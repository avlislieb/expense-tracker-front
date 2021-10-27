import { Item } from '../../types/Items';
import { getDateFormated } from '../../helpers/dateFilter';
import * as C from './styles';
import { categories } from '../../data/categories';

type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {
    return (
        <C.TableLine>
            <C.TableColumn>{getDateFormated(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? 'red' : 'green'}>R$ {item.value}</C.Value>
            </C.TableColumn>
        </C.TableLine>
    ) 
}


 