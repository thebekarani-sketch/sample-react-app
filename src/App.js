import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// https://react.dev/reference/react/hooks
function App() {
  var [shoppingList, setShoppingList] = useState([])
  var test = useState([])
  

  return (
    <div>
      <h1>Shopping List Application</h1>
      <input placeholder='Enter shopping list item'/>
      <button onClick={() => setShoppingList([...shoppingList, 'banana'])}>add item</button>
      <ol>
        {shoppingList.map((shoppingItem) => <li>{shoppingItem}</li>)}
      </ol>
    </div>
  );
}

export default App;
