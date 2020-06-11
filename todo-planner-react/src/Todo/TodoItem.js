import React, {useContext} from "react"
import PropTypes from 'prop-types'
import Context from "../context"

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        background: 'lightgray',
        margin: '.5rem'
    },
    checkboxMargin: {
        marginRight: '1.2rem'
    },
}

function TodoItem({todo, index}) {
    const {toggleTodo, removeTodo} = useContext(Context)
    const classes = []

    classes.push(todo.completed ? 'done' : '')

    return (
        <li style={styles.li}>
            <span className={classes}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={toggleTodo.bind(null, todo.id)}
                    style={styles.checkboxMargin}/>
                <span className='todo-cursor-pointer' onClick={toggleTodo.bind(null, todo.id)}>{index + 1} - {todo.title}</span>
            </span>
            <button className='rm-button' onClick={removeTodo.bind(null, todo.id)}>&times;</button>
        </li>
    )
}
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
}
export default TodoItem