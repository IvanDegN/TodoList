import {useState} from "react";
import style from '../style/ToDoList.module.css'


const ToDoList = ({setTodo, todo}) =>
{
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState()

    let deleteTodo = (id) =>
    {
        let newTodo = [...todo].filter(item => item.id !== id) // создание копии массива to-do и фильтрация этой копии
        setTodo(newTodo) // обновление state
    } // функция для удаления записи

    let ChangeStatusTodo =(id) => // изменение статуса задачи
    {
        let newTodo = [...todo].filter(item => { // создание копии массива и фильтрация. Если id равен выбранному, тогда изменить статус
            if(item.id === id)
            {
                item.isClosed = !item.isClosed
            }
            return item
        })
        setTodo(newTodo); // обновление state
    }

    let EditTodo = (id, title) =>
    {
        setEdit(id);
        setValue(title) // передача текста задачи в поле для редактирования
    }


    let ChangeText = (id) => // изменение текста задачи
    {
        let newTodo = [...todo].map(item => {
            if (item.id === id)
            {
                item.title = value;
            }
            return item
        })
        setTodo(newTodo) // обновить текст задачи
        setEdit(null) // изменение флага на режим просмотра
    }

    let ListItems = todo.map(item => (
        <div key={item.id}>
            {
                edit === item.id ? // если id выбранного элемента равно edit id, тогда вывести кнопку и поле для ввода иначе - вывести задачу
                    <div>
                        <input onChange={(e)=>setValue(e.target.value)} value={value}/>
                    </div>
                    :
                    <div className={ !item.isClosed ? style.closed : style.text}>{item.title}</div>

            }

            {
                edit === item.id ? // если нажата кнопка "Изменить", тогда скрываются все кнопки, показывается кнопка "Сохранить"
                    <div>
                        <button onClick={ ()=> ChangeText(item.id)}>Сохранить</button>
                    </div>
                    :
                    <div className={style.buttons}>
                        <button className={item}   onClick={ ()=>deleteTodo(item.id) }>Удалить</button>
                        <button className={item}  onClick={ ()=>EditTodo(item.id, item.title) }>Изменить</button>
                        <button className={item}  onClick={ ()=>ChangeStatusTodo(item.id)}>Выполнена / Ожидает</button>
                    </div>
            }


        </div>
        )
    )

    return  (
        ListItems  /* вывод элементов на экран */
    )
}

export default ToDoList