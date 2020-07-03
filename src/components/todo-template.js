import React, {useState} from 'react';

function TodoTemplate(props) {
    const [chosen, setChosen] = useState(true);


    const clickHandler = (event) => {
        console.log(props.name)
        setChosen(prevState => !prevState)
    }


    return (
        <>
            <div>
                <input type="checkbox" id="stacked-remember"
                       style={{marginLeft: '5px', marginRight: '5px'}}
                       onClick={(event) => clickHandler(event)}/>
                <label className="pure-checkbox pure-u-1-2 pure-u-sm-1-3"
                       style={chosen ? {} : {textDecoration: 'line-through'}}>{props.name}</label>
                <button className="pure-u-1-12" onClick={() => props.selfDestruct(props.id)}>x</button>
            </div>

        </>
    );
}

export default TodoTemplate;