import * as C from './styles';
import { formatCurrentMonth } from '../../helpers/dateFilter';
import { ResumeItem } from '../ResumeItem';


type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {
    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month)-1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        const currentMonthFormated = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}`; 
        onMonthChange(currentMonthFormated);
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month)-1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        const currentMonthFormated = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}`; 
        onMonthChange(currentMonthFormated);
    }

    return (
      <C.Container>
        <C.MonthArea>
          <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
          <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
          <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
        </C.MonthArea>
        <C.ResumoArea>
          <ResumeItem title="Receitas" value={income} />
          <ResumeItem title="Despesas" value={expense} />
          <ResumeItem
            title="Balanço"
            color={income - expense < 0 ? "red" : "green"}
            value={income - expense}
          />
        </C.ResumoArea>
      </C.Container>
    );
}