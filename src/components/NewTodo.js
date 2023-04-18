import React from 'react'
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";


function NewTodo({
    addTask,
    newTodo,
    setNewTodo,
    toDos,
    checkToggle,
    deleteToggle,
    editToggle

    })
 {
    // let checked =false;
  return (
    <div className="todo-app">
        <h1>What's the Plan for Today?</h1>
        <div className="todo-form">
        <input
          value={newTodo}
          placeholder="Add a todo"
          name="text"
          className="todo-input"
          onChange={(e) => setNewTodo(e.target.value)}
          
        />
        <button onClick={addTask} className="todo-button">
          Add Task
        </button>
      </div>

        
      
      {toDos.map(({ id, text, checked, deleted }) => {
        if (checked) return null;
        if (deleted) return null;
        return (<div className={"todo-row"}>
        <div 
        onClick={() => checkToggle(id)}
        >
          {checked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
        </div>
        <div>{text}</div>
        <div className="icons">
          <RiCloseCircleLine
            onClick={() => deleteToggle(id)}
            className="delete-icon"
          />
          <TiEdit 
          onClick={() => editToggle(id)} 
          className="edit-icon" />
        </div>
      </div>
      );
    })}

      
    </div>
  )
}

export default NewTodo
