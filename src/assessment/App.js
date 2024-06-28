import "./App.css"

function App(props) {
    return (
        <div className="container">
            <div className="box">
                <h2>회원정보 수정</h2>
                <div className="input-box">
                    <p>이름: </p>
                    <input type="text"/>
                    <p>이메일: </p>
                    <input type="text"/>
                    <p>비밀번호: </p>
                    <input type="text"/>
                    <button className="save-button">저장</button>
                </div>
                
            </div>
            
        </div>
    );
}

export default App;