import { Item } from "../types/Items";

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`;
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];
    let [year, month] = date.split('-');

    for(let i in list) {
        if (
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth()+1) === parseInt(month)
        ) {
            newList.push(list[i]);
        }
    }
    return newList;
}

export const getDateFormated = (date: Date): string => {
    let year: number  = date.getFullYear(); 
    let month: number  = date.getMonth()+1; 
    let day: number  = date.getDate(); 
    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;

export const formatCurrentMonth = (currentMonth: string): string => {
    let [year, month] = currentMonth.split('-');

    const months = ['Janeiro', 'Feveiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 
    'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    
    const monthNumber = parseInt(month)-1;
    return`${months[monthNumber]} / ${year}`;
}

export const setDateField = (date: string) => {
    let [year, month, day] = date.split('-');
    return new Date(parseInt(year), parseInt(month)-1, parseInt(day));
}