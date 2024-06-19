/*
  컴포넌트 -> 함수 -> HTML 태그를 리턴하는 함수
  JSX
    1. 태그를 열었으면 닫아야 한다. 예) <a></a>, <a />
    2. 여러 태그를 리턴해야 하는 경우에는 하나로 묶어야 한다.
    3. JSX 안에 값 또는 변수를 사용하려면 {}표현식을 사용해야 한다.
    
*/

import "./App.css";
import Box from "./components/Box";
import CustomInput from "./components/CustomInput";
import Hello from "./components/Hello";


function App() {
  const name = "김영희";
  const fontColorRed = {
    color: "red"
  };

  const age = <h2>{20}</h2>;

  // 여러개를 쓰고 싶을때 <(쓰고싶은 코드 예: div, lu 등등)>(실행코드)</(쓰고싶은 코드 예: div, lu 등등)> 
  return <> 
   <div>
     <Hello></Hello>
   </div>
   {/* <div>
     <Hello></Hello>
   </div> */}
   {/* 값을 호출할때 {(변수명)} */}

   <h1 style={fontColorRed} className="fs-20 itelic">{name}</h1> 
    <CustomInput ph={"이름"} disable={true} value={"김영희"}/>
    <CustomInput ph={"나이"} disable={false} />
    <CustomInput ph={"연락처"} disable={true} />
    <Box name={"김영희"} isShow={true}>
      {/* 자식 요소로 들어가면 무조건 children */}
      <h2>{20}</h2>
    </Box>

  </> 
  
  // <div>
  //   {/* 한줄을 쓰고 싶을때 */}
  //   {/* < Hello  />  */}
  //   {/* 여러줄을 쓰고 싶을때 */}
  //   <Hello></Hello>
  // </div>
//   <div>
//   <Hello></Hello>
// </div> // react는 이런식으로 div을 같이 못쓴다

}

export default App;
