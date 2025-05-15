import useWordle from "../hooks/useWordle";
import {useEffect, useState} from "react";
import Grid from "./Grid";
import Keyboard from "./Keyboard";
import Modal from "./Modal";
import Navbar from "./Navbar";
import ErrorMessage from "./ErrorMessage";

export default function Wordle(){
    const {currentGuess, handleKeyUp, turn, isCorrect,guesses, greenCharacters, yellowCharacters, current_ref, error} = useWordle()
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp)

        if (isCorrect){
            setTimeout(()=>{
                setShowModal(true);
            },2000)
            window.removeEventListener('keyup', handleKeyUp)
        }

        if (turn > 5) {
            setTimeout(()=>{
                setShowModal(true);
            },2000)
            window.removeEventListener('keyup', handleKeyUp)
        }

        return ()=>{
            window.removeEventListener('keyup', handleKeyUp)
        }

    }, [handleKeyUp, turn, isCorrect]);


    return (
        <div className="flex flex-col gap-4 font-semibold">
            <Navbar/>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} current_ref={current_ref}/>
            <Keyboard yellowCharacters={yellowCharacters} greenCharacters={greenCharacters} handleKeyUp={handleKeyUp}/>
            {showModal && <Modal turn={turn} isCorrect={isCorrect}/>}
            {error && <ErrorMessage error={error}/>}


        </div>
    )

}

