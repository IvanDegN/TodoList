
const ToDoList = ({setTodo, todo}) =>
{

    let deleteTodo = (id) =>
    {
        let newTodo = [...todo].filter(item => item.id !== id) // создание копии массива to-do и фильтрация этой копии
        setTodo(newTodo) // обновление state
    } // функция для удаления записи

    let ChangeStatusTodo =(id) =>
    {
        let newTodo = [...todo].filter(item => {
            if(item.id === id)
            {
                item.isClosed = !item.isClosed
            }
            return item
        })
        setTodo(newTodo);
    }

    let ListItems = todo.map(item => (
        <div key={item.id}>
            <div>{item.title}</div>
            <button onClick={ ()=>deleteTodo(item.id) }>Удалить</button>
            <button onClick={ ()=>ChangeStatusTodo(item.id)}>Закрыть / Открыть</button>
        </div>
        )
    )

    return  (
        ListItems  /* вывод элементов на экран */
    )
}

export default ToDoList