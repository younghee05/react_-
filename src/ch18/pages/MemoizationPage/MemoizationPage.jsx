import React, { useCallback, useMemo, useState } from 'react';

function MemoizationPage(props) {
    const [ value, setValue ] = useState(0);
    const [ value2, setValue2 ] = useState(0);
    const [ num, setNum ] = useState(0);

     // num 값이 바꼈을때만 num에 10을 더해라 라는 뜻 
    const a = useMemo(() => {
        console.log(num);
        return num + 10
    }, [num]);
    // console.log(a);

    const b = num + 20;

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);
    
    const handleChange2 = (e) => {
        setValue2(e.target.value);
    }

    const handleClick = useCallback(() => {
        setNum(parseInt(value));
    }, [value]);


    return (
        <div>
            <h1>{a}</h1>
            <input type="text" onChange={handleChange} />
            <input type="text" onChange={handleChange2} />
           <button onClick={handleClick}>확인</button> 
        </div>
    );
}

export default MemoizationPage;