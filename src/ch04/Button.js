function Button({ text, number, setNumber }) { // number, setNumber를 불러옴

    const handleClick = () => {
        if(text === "증가") {
            setNumber(number => number + 1);
        }

        if(text === "감소") {
            setNumber(number => number - 1);
        }
    }

    return <button onClick={handleClick}>{ text }</button>
}

export default Button;