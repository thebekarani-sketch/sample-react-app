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

  return (
    <div>
      <h1>Shopping List Application</h1>
      <form>
        <input ref={shoppingItemInputRef} placeholder='Enter shopping list item'/>
        <button onClick={onAddItem}>add item</button>
      </form>
      
      <ol>
        {shoppingList.map((shoppingItem) => <li>{shoppingItem}</li>)}
      </ol>
    </div>
  );
}

export default App;
