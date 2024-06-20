import { useState } from "react";

function App() {
    const [ inputValue, setInputValue ] = useState("");
    const [ names, setNames ] = useState([]);

    const liList = [
        <li>{"test1"}</li>,
        <li>{"test2"}</li>,
        <li>{"test3"}</li>,
        <li>{"test4"}</li>
    ]

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            setNames(names => [...names, inputValue ]);
            setInputValue(""); // e.target.value = ""; 다른버전 
        }
    }

    return <>
        <input 
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            value={inputValue}
        />
        <ul>
            { liList }
            {/* map을 쓸때 무조건 key값이 들어가야 한다. */}
            {names.map((name, a) => <li key={a}>{name}</li> )}
        </ul>
    </>
}

export default App;