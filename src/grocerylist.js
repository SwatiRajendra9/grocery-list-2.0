
import './App.css';
import edit from './editicon.png';
import del from './deleteicon.jpeg';


function GroceryList(props) {
   
  return( 
          <div id='list'> 
            <li id='items-in-list'>{props.sendItem}
                <div id='edit-delete-button'>
                  <button id='edit' onClick={editItem}><img id='edit-icon-image' src={edit} alt={'edit icon'}></img></button>
                  <button id='delete' onClick={deleteItem}><img id='delete-icon-image' src={del} alt={'delete icon'}></img></button>
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