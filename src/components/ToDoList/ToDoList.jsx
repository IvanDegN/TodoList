
const ToDoList = ({setTodo, todo}) =>
{

    let deleteTodo = (id) =>
    {
        let newTodo = [...todo].filter(item => item.id !== id) // создание копии массива todo и фильтрация этой копии
        setTodo(newTodo) // обновление state
    } // функция для удаления записи

    let ListItems = todo.map(item => (
        <div key={item.id}>
            <div>{item.title}</div>
            <button onClick={ ()=>deleteTodo(item.id)  }>Удалить</button>
        </div>
        )
    )

    return  (
        ListItems  /* вывод элементов на экран */
    )
}

export default ToDoList