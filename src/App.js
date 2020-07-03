import React from 'react';
import TodoTemplate from "./components/todo-template";
import Scrollable from "./components/Scrollable";


function App() {
    return (
        <div className="App">
            <header className="App-header" stylesheet={"App.css"}>
                <Scrollable/>
            </header>
        </div>
    );
}

export default App;
