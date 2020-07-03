import React from 'react';

function TodoTemplate(props) {
    return (
        <div style={{background: "#781455",}}>
            <h1>{props.name}</h1>
            <input style={{display: inline}} type="checkbox"/>
        </div>
    );
}

export default TodoTemplate;