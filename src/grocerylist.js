import React, { useState } from "react";
import App from './App.css';
import editIcon from '/Users/swatirajendra/Desktop/Projects/grocerybud/src/editicon.png';
import deleteIcon from '/Users/swatirajendra/Desktop/Projects/grocerybud/src/deleteicon.jpeg';



function GroceryList(props) {
   
  return( 
          <div id='list'> 
            <li id='items-in-list'>{props.sendItem}
                <div id='edit-delete-button'>
                  <button id='edit' onClick={editItem}><img id='edit-icon-image' src={editIcon}></img></button>
                  <button id='delete' onClick={deleteItem}><img id='delete-icon-image' src={deleteIcon}></img></button>
                </div>
            </li>
            
          </div>  
          
  )

  function deleteItem() {
    props.deleteFromList(props.sendItem);
  }

  function editItem() {
    props.editInList(props.sendItem);
  }

  

}

export default GroceryList;