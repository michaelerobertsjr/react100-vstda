import React from 'react';

const Todo = props => (
    <div>
       <ul className = "list-group">
       {props.todos.map(todo => {
          return <li className = "list-group-item" key ={todo.id}>{todo.text}<a value={todo.id} onClick={props.onDelete(todo.id)}
          className="glyphicon glyphicon-trash" href="#"></a></li>
        })
      }
    </ul>
      </div>
);

export default Todo;
