import React, { Component } from 'react';
import Userinput from "./userinput"
import Todo from "./todo"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      text: '',
      priority: 1,
      todos:[]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleDelete= this.handleDelete.bind(this);
  }


 handleChange(e)  {   
    this.setState
    ({text:e.target.value})
    //console.log(this.state.text)
  }
  handleSelectChange(e) {
    this.setState
    ({priority: e.target.value})
  }
   
  handleSubmit(event) {
    //console.log(event);
    this.setState({
      id: this.state.id + 1,
      text: '',
      priority: '',
      todos: [...this.state.todos, {id:this.state.id, text:this.state.text, priority: this.state.priority}]
    });
    event.preventDefault();
    //console.log(this.state);
  }
  handleDelete(){
    console.log();

  }
 

render() {
      return(
        <div>
       <Userinput 
       value={this.state.text} 
       onChange={this.handleChange} 
       onSubmit={this.handleSubmit}
       onChangeSelect={this.handleSelectChange}
       />
       <Todo 
       todos={this.state.todos}
       onDelete={this.handleDelete()}

       />
      </div>
      );
    }
  }

  
export default App;

