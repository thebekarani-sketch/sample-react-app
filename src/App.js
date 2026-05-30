import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

// https://react.dev/reference/react/hooks
function App() {
  var [shoppingList, setShoppingList] = useState([])
  var shoppingItemInputRef = useRef(null)

  var onAddItem = (event) => {
    console.log(event)
    event.preventDefault()
    setShoppingList([...shoppingList, shoppingItemInputRef.current.value])
    shoppingItemInputRef.current.value = ''
  }

  var onDeleteItem = (event, index) => {
     event.preventDefault()
     setShoppingList(shoppingList.filter((_, idx) => idx !== index))
  }

  var shoppingListItems = shoppingList.map((shoppingItem, index) => {
    return (
      <li>
        {index}-{shoppingItem}
        <button onClick={event => onDeleteItem(event, index)} >delete</button>
      </li>
    )
  })

  return (
    <div>
      <h1>Shopping List Application</h1>
      <form>
        <input ref={shoppingItemInputRef} placeholder='Enter shopping list item'/>
        <button onClick={onAddItem}>add item</button>
      </form>
      
      <ol>
        {shoppingListItems}
      </ol>
    </div>
  );
}

export default App;
