import {useState} from "react";

const AddToDo = ({setTodo, todo}) =>
{
    const [value, setValue] = useState('') // value - значение, которое вводит пользователь. setValue - функция для изменения значения


    let GetId = () => // генерация случайного id
    {
        return  Math.random().toString(36).substring(2,9);
        // преобразование в базу 36
        // взятие первых девяти символов
    }


    let SaveList = () =>
    {
        setTodo([...todo, {
            id: GetId(),
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