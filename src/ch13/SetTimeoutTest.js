function SetTimeoutTest() {

    /**
     * 비동기
     */

    // 콜백 함수
    setTimeout(() => {
        print(count);
    }, 2000);

    count();

    function print(fx) {
        console.log(4);
        fx();
    }

    function count() {
        console.log(1);
        console.log(2);
        console.log(3);
    }

    // // 순찬적으로 진행된 것을 동기
    // console.log(1);
    // console.log(2);
    // console.log(3);

    /**
     * 콜백함수
     */
    function test(fx) {
        console.log("test 함수 호출");
        fx();
    }

    function add() {
        console.log("add 함수 호출");
    }

    test(add);

    return (
        <>
        
        </>
    );
}

export default SetTimeoutTest;