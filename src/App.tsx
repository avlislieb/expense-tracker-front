import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/Items';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';

import { TableArea } from './components/tableArea';
import { InfoArea } from './components/InfoArea';
import { InsertArea } from './components/InsertArea';

const App = () => {
  const [listItems, setListItems] = useState(items);
  const [filteredListItems, setFilteredListItems] = useState<Item[]>([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth);


  useEffect(()=>{
    setFilteredListItems(filterListByMonth(listItems, currentMonth))
  }, [listItems, currentMonth]);

  useEffect(()=>{
    let incomeCount: number = 0;
    let expenseCount: number = 0;

    for (let i in filteredListItems) {
      if (categories[filteredListItems[i].category].expense) {
        expenseCount += filteredListItems[i].value;
      } else {
        incomeCount += filteredListItems[i].value;
      }
      setIncome(incomeCount);
      setExpense(expenseCount);
    }
  }, [filteredListItems]);

  const handleChangeMonth = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }
  
  const handleAddItemList = (item: Item) => {
    let newList = [...listItems];
    newList.push(item);
    setListItems(newList);
  }

  return (
    <C.Container>
      <C.Header> 
        <C.HeaderText>Sistema financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        
        {/* area de informação */}
        <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleChangeMonth}
          income={income}
          expense={expense}
        />
        {/* area de inserção */}
        <InsertArea onAddItem={handleAddItemList}/>

        {/* tabela de itens */}
        <TableArea list={filteredListItems} />
      </C.Body>
    </C.Container>
  );
}


export default App;