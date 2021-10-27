import { useState } from 'react';
import { categories } from '../../data/categories';
import { setDateField } from '../../helpers/dateFilter';
import { Item } from '../../types/Items';
import * as C from './styles';

type Props = {
    onAddItem: (list: Item) => void;
}

export const InsertArea = ({ onAddItem }: Props) => {
    let categoriesKeys = Object.keys(categories);

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [value, setValue] = useState(0);

    const validateForm = (): string[] => {
      const errors: string[] = [];

      if (isNaN(new Date(date).getTime())) {
        errors.push("Data incoreta.");
      }
      if (title.length === 0) {
        errors.push("Preencha o titulo.");
      }
      if (value <= 0) {
        errors.push("O valor tem que ser maior que 0.");
      }
      if (!categoriesKeys.includes(category)) {
        errors.push("Selecione uma categoria.");
      }

      return errors;
    };

    const handleCreateItem = () => {
      const errors: string[] = validateForm();

      if (errors.length > 0) {
        alert(errors.join("\n"));
      }

      let newItem: Item = {
        date: setDateField(date),
        category: category,
        title: title,
        value: value,
      };
      onAddItem(newItem);
      clearFields();
    };

    const clearFields = () => {
      setTitle("");
      setDate("");
      setCategory("");
      setValue(0);
    };

    return (
      <C.Container>
        <label>Titulo</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
        />
        <label>Data</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          name="data"
        />
        <label>Categoria</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option></option>
          {categoriesKeys.map((value, index) => (
            <option key={index} value={value}>
              {categories[value].title}
            </option>
          ))}
        </select>
        <label>Valor</label>
        <input
          value={value}
          type="number"
          onChange={(e) => setValue(parseFloat(e.target.value))}
        />

        <button onClick={handleCreateItem}>salvar</button>
      </C.Container>
    );
}