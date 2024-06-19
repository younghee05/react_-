function Box({ name, isShow, children }) {
    // const result = false && !!10; // true로 쓰고 싶으면 !!(부정의 부정) 붙이기 
    const result = false && 10; // false로 출력됨 
    console.log(result); 

    return <div>
        <h1>{name}</h1>
        {children}
        {1 + 1}
        {true && "김영희"} 
        {isShow && <h3>안녕하세요</h3>}
        {isShow ? <h3>안녕하세요</h3> : <h4>안녕하세요1</h4>}
    </div>
}

export default Box;