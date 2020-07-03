import React, {useState} from 'react';
import TodoTemplate from "./todo-template";
import {nanoid} from 'nanoid'

function Scrollable(props) {
    const [todoList, setTodoList] = useState([
        {key: 1, name: "Learn programming"},
        {key: 2, name: "Ăn phở"},])

    const [value, setValue] = useState("")

    const addTodo = (event) => {
        event.preventDefault();
        if (value != "") {
            setTodoList(
                [...todoList,
                    {
                        key: nanoid(),
                        name: value
                    }
                ]
            )
            setValue("")
        }
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleDestroy = (id) => {
        setTodoList(todoList.filter(element => element.key !== id))
    }


    return (
        <>
            <h1 style={{marginLeft: '2%'}}>Todo list</h1>
            <form onSubmit={(event => addTodo(event))}>
                <button style={{marginRight: '5px', marginLeft: '5px'}} type="submit">Add</button>
                <input className={"pure-u-1-3 pure-u-lg-1-4"} type="text" value={value}
                       onChange={(event) => handleChange(event)}/>
            </form>
            <br/>
            {todoList.map(element => <TodoTemplate key={element.key} id={element.key} name={element.name}
                                                   selfDestruct={handleDestroy}/>)}
        </>
    )
}


export default Scrollable;