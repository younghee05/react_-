import React from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchParamsStudy(props) {
    const [ searchParams, setSearchParams ] = useSearchParams();
    console.log(searchParams.getAll("a")); // a값을 모두 배열로 가져옴 
    // const values = searchParams.values();
    // console.log(values.next()); // next를 하게되면 다음 값을 가지고 옴 

    // setSearchParams({...searchParams, c: 30});

    const handleClick = () => {
        const keys = searchParams.keys();
        console.log(keys.next().value);
        console.log(keys.next().value);
        let newParams = {

        }

        for(let i = 0; i < searchParams.size; i++) {
            const key = keys.next().value;
            const value = searchParams.get(key);
            newParams = {
                ...newParams,
                [key]: value
            }
        }
        setSearchParams({...newParams, c: 30});
    }

    return (
        <div>
            <h1>SearchParams</h1>
            <button onClick={handleClick}>c= 30 추가</button>
        </div>
    );
}

export default SearchParamsStudy;