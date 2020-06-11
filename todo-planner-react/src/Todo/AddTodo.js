import React, {useState} from "react"
import PropTypes from 'prop-types'
import userEvent from "@testing-library/user-event";

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddTodo({create}) {
    const input = useInputValue()
    function submitHandler(event) {
        event.preventDefault()
        if(input.value().trim()) {
            create(input.value())
            input.clear()
        }
    }
    return (
        <form style={{marginBottom: '1.2rem'}} onSubmit={submitHandler}>
            <input {...input.bind}/>
            <button type="submit">Add todo</button>
        </form>
    )
}

AddTodo.propTrypes = {
    create: PropTypes.func.isRequired
}

export default AddTodo