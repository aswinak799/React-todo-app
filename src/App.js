
import GithubCorner from 'react-github-corner';
import './App.css';
import NewTodo from './components/NewTodo';
import Completed from './components/Completed';
import Removed from './components/Removed';
import { useState } from 'react';
import Swal from 'sweetalert2';

function App() {

  const [toDos, setToDos] = useState(JSON.parse(localStorage.getItem("toDos")) || []);
  const [newTodo, setNewTodo] = useState("");

  const addTask = ()=>{
    if(newTodo === null) return;
    let newTodos = [
      { id: Date.now(), text: newTodo, checked: false, deleted: false },
      ...toDos,
    ]
    setToDos(newTodos)
    setNewTodo("")

  };

  const checkToggle = (id) => {
    let newTodos = toDos.filter((todo) => {
      if (todo.id === id) {
        todo.checked = todo.checked ? false : true;
      }
      return todo;
    })
    setToDos(newTodos);
    localStorage.setItem("toDos", JSON.stringify(newTodos))

  };
  const deleteToggle = (id) => {
    let newTodos = toDos.filter((todo) => {
      if (todo.id === id) {
        todo.deleted = todo.deleted ? false : true;
      }
      return todo;
    })
    setToDos(newTodos);
    localStorage.setItem("toDos", JSON.stringify(newTodos))

  };
  const editToggle = async (id) => {
    const { value: editedTask } = await Swal.fire({
      title: "Rename Task",
      input: "text",
      inputValue:toDos.find((todo)=>todo.id === id).text,
      inputPlaceholder: "Enter Here",
    });

    if (editedTask) {
      let newTodos =toDos.filter((todo) => {
        if (todo.id === id) {
          todo.text = editedTask;
        }
        return todo;
      })
      setToDos(newTodos);
    localStorage.setItem("toDos", JSON.stringify(newTodos))

    }
  };

  


  return (
<>
  <h1 style={{textAlign:'center' , fontSize:'50px'}}>AK'S TODO APP</h1>

    <div className="row">
     <NewTodo addTask = {addTask}
     toDos={toDos}
     newTodo={newTodo}
     setNewTodo={setNewTodo}
     checkToggle={checkToggle}
     deleteToggle={deleteToggle}
     editToggle={editToggle}
     />
     <Completed 
     checkToggle={checkToggle}
     toDos={toDos}
     deleteToggle={deleteToggle}
     editToggle={editToggle}
     />
     <Removed
      checkToggle={checkToggle}
      toDos={toDos}
      deleteToggle={deleteToggle}
      editToggle={editToggle}

     />
     <GithubCorner href="https://github.com/aswinak799"  />
    </div>
    </>
  );
}

export default App;
