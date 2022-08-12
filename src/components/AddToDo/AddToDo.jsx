import {useState} from "react";

const AddToDo = ({setTodo, todo}) =>
{
    const [value, setValue] = useState('') // value - значение, которое вводит пользователь. setValue - функция для изменения значения


    let SaveList = () =>
    {
        setTodo([...todo, {
            id: 4,
            title: value,
            isClosed: false
        }])
        setValue('')
    }

    return (
        <div>
            <input placeholder={"Введите новую задачу"} value={value} onChange={ (e)=>setValue(e.target.value) }/>
            <button onClick={SaveList}>Сохранить</button>
        </div>
    )
}

export default AddToDo;