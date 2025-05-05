import KeyboardRow from "./KeyboardRow";

export default function Keyboard({yellowCharacters, greenCharacters}) {
    const rows = [
        ["Q","W","E","R","T","Y","U","I","O","P"],
        ["A","S","D","F","G","H","J","K","L"],
        ["ENTER","Z","X","C","V","B","N","M","CLEAR"]
    ]

    return (
        <div className="flex flex-col items-center gap-2 justify-center w-full">
            {rows.map((row,index)=> <KeyboardRow row={row}  key={index} yellowCharacters={yellowCharacters}  greenCharacters={greenCharacters}/>)}
        </div>
    )
}