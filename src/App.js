import React from "react";
import './App.css';
import GroceryList from './grocerylist.js';


let j=0;

class mainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {item:'', showList : 'false', listOfItems : [] , submit:'true', listElementIndex : null, emptyList:false}
  } 

  handleChange = ({target}) => {
    this.setState({item:target.value});
  }

  addToList = () => {
    this.setState({showList:true});
    this.setState({emptyList:true});
    let b = this.state.listOfItems.slice();
    b[j] = this.state.item;
    this.setState({listOfItems:b});
    j++;
    this.setState({item:''});
  }

  deleteFromList = (value) => {
    let index = this.state.listOfItems.indexOf(value);
    this.state.listOfItems.splice(index,1);
    this.setState({listOfItems:this.state.listOfItems});
  }

  editInList = (value) => {
    this.setState({submit:false});
    let findIndex = this.state.listOfItems.indexOf(value);
    this.setState({listElementIndex:findIndex});
    console.log(this.state.listElementIndex);
    this.setState({item:value});
  }

  addEditedItem = () => {
    let edit = this.state.item;
    this.state.listOfItems.splice(this.state.listElementIndex,1);
    this.state.listOfItems.splice(this.state.listElementIndex,0,edit);
    this.setState({listOfItems:this.state.listOfItems}); 
    this.setState({submit:true});
    this.setState({item:''});
  }

  deleteList = () => {
    this.setState({listOfItems:[]});
    this.setState({emptyList:false});
  }



  render() {
    return(
      <div id='main'>
        <div id='input-items-div'>
          <h1>Grocery List</h1>
          <div id='input-items'>
            <input id='input' type='text' placeholder="e.g. Eggs" value={this.state.item} onChange={this.handleChange} ></input>
            {this.state.submit ? 
            <button id='submit' onClick={this.addToList}>Add Item</button>
            :
            <button id='other-edit-button' onClick={this.addEditedItem}>Edit</button>
          }
          </div>
          {this.state.listOfItems.map((element,index)=>(
          <GroceryList sendItem = {this.state.listOfItems[index]} sendAllItems={this.state.listOfItems} deleteFromList={this.deleteFromList} editInList={this.editInList} />
          ))}
          {this.state.emptyList ?
          <button id='clearlist' onClick={this.deleteList}>Clear All</button> 
          : null }

        </div>
      </div>
    )
  }
}

export default mainComponent;