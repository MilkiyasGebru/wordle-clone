import RowGrid from "./RowGrid";

export default function Grid({currentGuess, guesses, turn}){
    return (
        <div className="flex justify-center flex-col items-center gap-2">
            {guesses.map((guess, index) => (
                <RowGrid key={index} />
            ))}
        </div>
    )
}