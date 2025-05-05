import useWordle from "../hooks/useWordle";
import {useEffect} from "react";

export default function Wordle(){
    const {currentGuess, handleKeyUp, turn, isCorrect,guesses} = useWordle()

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp)


        return ()=>{
            window.removeEventListener('keyup', handleKeyUp)
        }

    }, [handleKeyUp]);


    return (
        <div>
            This is the current guess: {currentGuess}
        </div>
    )
}