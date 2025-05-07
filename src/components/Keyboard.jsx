import KeyboardRow from "./KeyboardRow";

export default function Keyboard({yellowCharacters, greenCharacters, handleKeyUp}) {
    const rows = [
        ["Q","W","E","R","T","Y","U","I","O","P"],
        ["A","S","D","F","G","H","J","K","L"],
        ["Enter","Z","X","C","V","B","N","M","Backspace"]
    ]

    return (
        <div className="flex flex-col  gap-2 justify-center items-center w-fit mx-auto">
            {rows.map((row,index)=> <KeyboardRow row={row}  key={index} yellowCharacters={yellowCharacters} handleKeyUp={handleKeyUp}  greenCharacters={greenCharacters}/>)}
        </div>
    )
}