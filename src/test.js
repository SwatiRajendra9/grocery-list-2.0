import React, { useState } from "react";
import App from './App.css';



function GroceryList() {
   const [item,addItem] = useState();
   const [listOfItems,setListOfItems] = useState();
   const [showList,setShowList] = useState(false);
   

  return(
    <div id='main'>
      <div id='input-items-div'>
        <h1>Grocery List</h1>
        <div id='input-items'>
          <input type='text' placeholder="e.g. Eggs" value={item} onChange={add} onClick={clearItem}></input>
          <button id='submit' onClick={addToList}>Submit</button>
        </div>
        {showList ?
          <div id='list'> 
            <li>{listOfItems}</li>
          </div>
        : null }
      </div>
    </div>
  )

  function add({target}) {
    addItem(target.value); 
    console.log(typeof(item));
  }

  function addToList() {
    setShowList(true);
    setListOfItems(item);
  }

  function clearItem() {
    addItem('');
  }

}

export default GroceryList;