
import './App.css';
import Header from "./components/Header/Header";
import AddToDo from "./components/AddToDo/AddToDo";
import ToDoList from "./components/ToDoList/ToDoList";
import {useState} from "react";

const App = () => {

    const [todo, setTodo] = useState(
        [
            {
                id: 1,
                title: 'first post',
                isClosed: true
            },
            {
                id: 2,
                title: 'second post',
                isClosed: false
            },
            {
                id: 3,
                title: 'third post',
                isClosed: true
            },

        ]
    ) // создание state. to-do - это список задач (state). setTodo - функция, которая будет менять to-do.





  return (
    <div className={'App'}>
      <Header/> {/* подключение компонента Header */}
        <AddToDo setTodo={setTodo} todo={todo}/>  {/* подключение компонета AddToDo */}
        <ToDoList todo={todo} setTodo={setTodo}/>  {/* подключение компонета ToDoList */}
    </div>
  );
}

export default App;
