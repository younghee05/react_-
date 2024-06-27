/** @jsxImportSource @emotion/react */
import RouteStudyPage from '../RouteStudyPage/RouteStudyPage';
import * as s from './style';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

function RouteStudySubPage1(props) {

    const navigate = useNavigate();
    const location = useLocation();

    console.log(location.pathname);
    console.log(location.pathname.lastIndexOf("/"));
    const index = location.pathname.lastIndexOf("/");
    console.log(location.pathname.substring(index + 1)); // substring : 문자열 자르기


    const handleAgeClick = () => {
        navigate("/routestudy/page1/age", {replace: true}); // 버튼을 누르면 나이를 찾도록 하는 
        // window.location.href = "https://naver.com" => replace: false
        // window.location.replace("https://naver.com") => replace: true

    }

    return (
        <div>
            <ul>
                <Link to={"/routestudy/page1/name"}><li>이름</li></Link>
                <Link to={"/routestudy/page1/age"}><li>나이</li></Link>
                <Link to={"/routestudy/page1/address"}><li>주소</li></Link>
            </ul>
            <button onClick={handleAgeClick}>나이</button>    
            <div>
                <Routes>
                    <Route path="/name" element={<h1>김영희</h1>} />
                    <Route path="/age" element={<h1>20</h1>} />
                    <Route path="/address" element={<h1>창원시 진해구</h1>} />
                </Routes>
            </div>
        </div>
    );
}

export default RouteStudySubPage1;