
// import React, { useState } from 'react';


// const AddItemForm = ({ addItem }) => {
//     const [newItem, setNewItem] = useState('');
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       if (newItem.trim()) {
//         addItem(newItem);
//         setNewItem(''); // очищуємо поле після додавання
//       }
//     };
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={newItem}
//           onChange={(e) => setNewItem(e.target.value)}
//           placeholder="Add new item"
//         />
//         <button type="submit">Add Item</button>
//       </form>
//     );
//   };
//   export default AddItemForm;