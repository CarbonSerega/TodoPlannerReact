import React, {useEffect} from 'react'
import Context from "./context"
import TodoList from "./Todo/TodoList"
import './App.css'
import ModalDialog from "./ModalDialog/ModalDialog";

const AddTodo = React.lazy(() => import('./Todo/AddTodo'))

function App() {
    const [todos, setTodos] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(t => {
                setTimeout(() => {
                    setTodos(t)
                    setLoading(false)
                    },
                    2000)

            })
            .catch((err) => {
                setLoading(false)
                console.log(err)})
    }, [])

    function addTodo(title) {
        setTodos(todos.concat([{
            id: Date.now(),
            title,
            completed: false
        }]))
    }

    function toggleTodo(id) {
        setTodos(todos.map(t => {
            if(t.id === id) {
                t.completed = !t.completed
            }
            return t
        }))
    }

    function removeTodo(id) {
        setTodos(todos.filter(t => t.id !== id))
    }
  return (
      <Context.Provider value={{toggleTodo, removeTodo}}>
        <div className="wrapper">
            <h1>Todo List</h1>
            <ModalDialog />
            <React.Suspense fallback={<p>Loading</p>}>
                <AddTodo create={addTodo}/>
            </React.Suspense>

            {
                todos.length
                ? <TodoList todos={todos} toggle={toggleTodo}/>
                : loading ? <h3>Loading...</h3> : <h3>No todos!</h3>}

        </div>
      </Context.Provider>
  );
}

export default App;
