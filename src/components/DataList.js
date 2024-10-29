import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, deleteData, updateData } from '../actions/dataActions';

const DataList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.data);

  const [editingId, setEditingId] = useState(null); // ID редагованого запису
  const [editFormData, setEditFormData] = useState({ first_name: '', last_name: '' });

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleEditClick = (item) => {
    setEditingId(item.id);
    setEditFormData({ first_name: item.first_name, last_name: item.last_name });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(updateData(editingId, editFormData));
    setEditingId(null); // Закриваємо форму редагування
  };

  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка: {error}</p>;

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {editingId === item.id ? (
            // Форма редагування
            <form onSubmit={handleEditSubmit}>
              <input
                type="text"
                name="first_name"
                value={editFormData.first_name}
                onChange={handleEditChange}
              />
              <input
                type="text"
                name="last_name"
                value={editFormData.last_name}
                onChange={handleEditChange}
              />
              <button type="submit">Зберегти</button>
              <button type="button" onClick={() => setEditingId(null)}>Скасувати</button>
            </form>
          ) : (
            // Відображення даних з кнопками "Редагувати" і "Видалити"
            <>
              {item.first_name} {item.last_name}
              <button onClick={() => handleEditClick(item)}>Редагувати</button>
              <button onClick={() => handleDelete(item.id)}>Видалити</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default DataList;
