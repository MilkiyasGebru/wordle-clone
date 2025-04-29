import {useEffect, useState} from "react";

export const useWordle = () => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([]);
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleKeyUp = ({key}) => {

        if (key === "Backspace") {
            setCurrentGuess(prev => prev.slice(0,-1));
        }

        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5){

                setCurrentGuess((prev)=>{
                    return prev + key
                })
            }
        }
    }

    useEffect(() => {
        console.log("current guess has changed", currentGuess)
    }, [currentGuess])

    return {
        turn,
        currentGuess,
        guesses,
        isCorrect,
        handleKeyUp
    }

}

export default useWordle;
