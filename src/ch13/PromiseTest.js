function PromiseTest() {
    /**
     * Promise : 비동기 객체
     * then을 쓰면 동기 형태로 쓸 수 있다
     * promise 만이 then catch 를 쓸 수 있다
     * 프로미스의 3가지 상태
     * 1. 대기 -> 이행되지도 거부되지도 않은 상태
     * 2. 이행 -> 연산이 성공했을 때의 상태
     * 3. 거부 -> 연산을 실패했을 때의 상태 
     */

    function p1(name) {
        return new Promise((resolve, reject) => { // resolve : 이행 / reject : 거부
            // 대기(동기)
            console.log(name + "프로미스 생성");
            if(!name) {
                reject("오류!!!");
            }
            resolve(name);
        });
    }

    // async를 걸면 무조건 p2의 함수는 promise가 적용됨
    async function p2() {
        let a = null;
        try {
            // 비동기 동작
            // p4().then(r => {
            //     a = r;
            // });

            // p4에 return값을 호출하고 싶을 때 await 사용
            // await은 async안에서만 사용할 수 있고, Promise 객체에만 사용할 수 있다
            a = await p4(); // await -> 이행할 때까지 기다려

            // setTimeout 자체가 비동기처리
            // await setTimeout(() => {}, 2000); / await를 쓸 수 없다
            // await p5(); // p5를 실행 시키지 않을 때에는 p4가 출력된다
        } catch(error) {
            console.log(error);
            a = "p5";
        }
        
        return a;
    }

    // 일반 promise
    function p3() {
        return new Promise((resolve, reject) => {
            resolve("p3");
        });
    }

    async function p4() {
        return "p4";
    }

    async function p5() {
        throw new Error("오류!!!!!");
    }

    // const p1 = new Promise((resolve, reject) => {
    //     console.log("프로미스 생성");
    // });

    // 클릭이 되어졌을 때 p1이 실행 될것이다.
    const handleClick = () => {
        p1("p1").then(result => {
            console.log("이행");
            console.log(result);
            if(true) {
                throw new Error("거부!!"); // error 생성해서 throw(던지다) 할것이다 // 거부(reject)
            }
            return "두번째 then"; // return : 이행(resolve)

        })
        .then(result => { // then은 계속 쓸수 있다 / 대기상태를 의미
            console.log(result);
        }).catch(error => { // 오류가 뜨면 then으로 가는 것이 아닌 바로 catch로 내려와 값을 출력한다
            // console.log(error);
        }); 

        console.log("출력1");
        p1("p2"); 
        console.log("출력2");
        p1("p3"); 

    }

    const handleClick2= () => {
        setTimeout(() => {
            p2().then(r => {
                console.log(r);
            }); 
        }, 2000); 

        // p2().then(r => {
        //     console.log(r);
        //     // return "p2."
        // })
        // promise를 수동적으로 설정하였기에 p2 형식과 동일한 형식으로 출력됨
        // p3().then(r => console.log(r));
    }
    
    return ( 
        <>
            <button onClick={handleClick}>promise</button>
            <button onClick={handleClick2}>async</button>
        </>
     );
}

export default PromiseTest;