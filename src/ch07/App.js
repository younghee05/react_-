import { useState } from "react"

function App() {

    const emptyUser = {
        username: "",
        password: "",
        email: ""
    }

    // const [username, setUserName] = useState("");
    // const [password, setPassword] = useState("");
    // const [email, setEmail] = useState("");
    

    // const handleInputChange = (e) => {
    //     switch(e.target.name) {
    //         case "username":
    //             setUserName(e.target.value);
    //             break;
    //         case "password":
    //             setPassword(e.target.value);
    //             break;
    //         case "email":
    //             setEmail(e.target.value);
    //             break;
    //         default: 
            
    //     }
    // }

    const [ user, setUser] = useState({...emptyUser});
    const [ inputData, setInputData ] = useState({...emptyUser});

    const handleInputChange = (e) => {
        setInputData(inputData => {
                return {
                    ...inputData,
                    [e.target.name]: e.target.value
                }
        });
       
    }

    const handleOkClick = () => {
        setUser(inputData);
    }


    return <>
        <input name="username" placeholder="사용자 이름" onChange={handleInputChange} value={inputData.username} /> {/*value을 무조건 써야한다*/}
        <input name="password" placeholder="비밀번호" onChange={handleInputChange} value={inputData.password}/>
        <input name="email" placeholder="이메일" onChange={handleInputChange} value={inputData.email}/>
        <button onClick={handleOkClick}>확인</button>
        <ul>
            <li>사용자 이름: {user.username}</li>
            <li>비밀번호: {user.password}</li>
            <li>이메일: {user.email}</li>

        </ul>
    </>
}

export default App;