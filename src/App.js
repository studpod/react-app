
import './App.css';
import React, {useState} from 'react';
import AddItemForm from './AddItemForm';

function ItemList(props) {
  return <li>Item { props.index }</li>;
}

function Item() {
  const [items, setItems] = useState(['1', '2', '3']);
  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };
  return (
    <>
	    <h1>My Items list</h1>
	    <ul>
       {items.map((item, idx) =>
         <ItemList key={idx} index={item} />)}
      </ul>
      <AddItemForm addItem={addItem}/>
    </>
  );
}

export default Item;
