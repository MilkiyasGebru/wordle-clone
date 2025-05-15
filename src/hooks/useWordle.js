import {useEffect, useRef, useState} from "react";

const deep_copy = (guesses)=>{
    return guesses.map(guess =>{
        if (guess){
            return guess.map(g=>({...g}))
        }
        return null
    })
}

export const useWordle = () => {
    const Solution = "AABBC"
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([...Array(6).fill(null)]);
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [yellowCharacters, setYellowCharacters] = useState(new Set());
    const [greenCharacters, setGreenCharacters] = useState(new Set());
    const current_ref = useRef(null);
    const [error, setError] = useState(null);


    const handleKeyUp = ({key}) =>  {
        if (key === "Enter") {

            if (currentGuess.length < 5){
                if (current_ref.current){
                    const element = current_ref.current;
                    element.classList.add("vibrate-touch")
                    setTimeout(()=>{
                        element.classList.remove("vibrate-touch")
                    },500)
                }

                setError("Not Enough Letters");
                setTimeout(()=>{
                    setError(null);
                }, 3000)

                return
            }

            if (turn > 5){
                console.log("Finished ")
                return
            }


            if (history.includes(currentGuess)) {
                console.log("Word has already been guessed")
                if (current_ref.current){
                    const element = current_ref.current;
                    element.classList.add("vibrate-touch")
                    setTimeout(()=>{
                        element.classList.remove("vibrate-touch")
                    },500)
                }

                setError("Already Guessed");
                setTimeout(()=>{
                    setError(null);
                }, 3000)


                return
            }
            const colored_guess = decorate_guess()
            addNewGuess(colored_guess)

        }

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

    const decorate_guess = ()=>{

        const copied_yellow_characters = new Set(yellowCharacters)
        const copied_green_characters = new Set(greenCharacters)

        const freq_solution = new Map();
        const colored_guess = []

        for ( var i = 0; i<currentGuess.length; i++){
            if (!freq_solution.get(Solution[i])){
                freq_solution.set(Solution[i], 0)
            }
            freq_solution.set(Solution[i], freq_solution.get(Solution[i]) + 1);
        }

        for ( var i=0; i<currentGuess.length; i++){
            if (currentGuess[i] === Solution[i]){
                freq_solution.set(Solution[i], freq_solution.get(Solution[i]) - 1);
                copied_green_characters.add(currentGuess[i])
                copied_yellow_characters.delete(currentGuess[i])
            }

            colored_guess.push({
                element: currentGuess[i],
                color: currentGuess[i] === Solution[i]? "green": "gray"
            })
        }

        for ( var i=0; i<currentGuess.length; i++){
            if (currentGuess[i] !== Solution[i] && freq_solution.get(currentGuess[i]) > 0){
                colored_guess[i].color = "gold"
                freq_solution.set(currentGuess[i], freq_solution.get(currentGuess[i]) - 1);
                copied_yellow_characters.add(currentGuess[i])
            }
        }
        setGreenCharacters(copied_green_characters)
        setYellowCharacters(copied_yellow_characters)
        return colored_guess

    }

    const addNewGuess = (colored_guess)=>{
        setTurn(x => x + 1)

        const copied_guesses = deep_copy(guesses)
        copied_guesses[turn] = colored_guess
        setGuesses(copied_guesses)

        setHistory([...history, currentGuess])
        setCurrentGuess("")
        if (currentGuess === Solution){
            setIsCorrect(true)
        }
    }



    return {
        turn,
        currentGuess,
        guesses,
        isCorrect,
        handleKeyUp,
        yellowCharacters,
        greenCharacters,
        current_ref,
        error
    }

}

export default useWordle;
