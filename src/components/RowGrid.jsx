
const styles = {
    gray: {'--background-color': ' #afb19f'},
    gold: {'--background-color': '#c9e70c'},
    green: {'--background-color': '#33ff39'},
}

export default function RowGrid({guess, current_guess}) {

    if (guess) return (

        <div className="flex gap-2">
            {guess.map((element,index)=>(
                <div key={index} style={{...styles[element.color],animationDelay:`${350*index}ms`}} className={`w-[60px] h-[60px]  rounded-md flex justify-center items-center uppercase animate-flip text-white`}>
                    {element.element}
                </div>
            ))}
        </div>
    );

    if (current_guess) {

        let letters = current_guess.split("")
        return (
            <div className="flex gap-2">
                {letters.map((letter, index)=>(
                    <div key={index}
                         className={`w-[60px] h-[60px] border border-gray-600 rounded-md flex justify-center items-center uppercase animate-bounce-cell`}>
                        {letter}
                    </div>
                ))}
                {Array(5-letters.length).fill(null).map((_, index)=> (
                    <div key={index}
                         className={`w-[60px] h-[60px] border rounded-md flex justify-center items-center uppercase border-gray-50 `}>

                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="flex  gap-2">
            {Array(5).fill(null).map((val, index) => {
                return <div key={index}
                            className="w-[60px] h-[60px] border border-gray-200 rounded-md flex justify-center items-center uppercase">

                </div>
            })}
        </div>
    )
}