import React from "react";

const Userinput = props => {
 
  return(
      <div>
      <form onSubmit={props.onSubmit}>
      <input 
       value={props.value} 
       onChange={props.onChange}>
       </input>
      <button>Add To-Do</button>
      <label>What is the priority?</label>
      <select onChange={props.onChangeSelect}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      </form>
      </div>
  )  
}
export default Userinput;
