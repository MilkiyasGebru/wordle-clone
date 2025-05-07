import RowGrid from "./RowGrid";

export default function Grid({currentGuess, guesses, turn, current_ref}){
    return (
        <div className="flex justify-center flex-col items-center gap-2">
            {guesses.map((guess, index) => {
                if (index === turn){

                    return <RowGrid key={index} current_guess={currentGuess} ref={current_ref}/>
                }
                return <RowGrid key={index} guess={guess} />
})}
        </div>
    )
}