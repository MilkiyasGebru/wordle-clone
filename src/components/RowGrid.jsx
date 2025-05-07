import {forwardRef} from "react";

const styles = {
    gray: {'--background-color': ' #787C7E'},
    gold: {'--background-color': '#C9B458'},
    green: {'--background-color': '#6AAA64'},
}

const RowGrid = forwardRef(({guess, current_guess},ref) => {

    if (guess) return (

        <div className="flex gap-2" >
            {guess.map((element,index)=>(
                <div key={index} style={{...styles[element.color],animationDelay:`${350*index}ms`}} className={`w-[60px] h-[60px] text-3xl  rounded-md flex justify-center items-center uppercase animate-flip text-white`}>
                    {element.element}
                </div>
            ))}
        </div>
    );

    if (current_guess) {

        let letters = current_guess.split("")
        return (
            <div className="flex gap-2" ref={ref}>
                {letters.map((letter, index)=>(
                    <div key={index}
                         className={`w-[60px] h-[60px] border-2 border-gray-700 rounded-md flex justify-center items-center uppercase animate-bounce-cell`}>
                        {letter}
                    </div>
                ))}
                {Array(5-letters.length).fill(null).map((_, index)=> (
                    <div key={index}
                         className={`w-[60px] h-[60px] border rounded-md flex justify-center items-center uppercase border-gray-600 `}>

                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="flex  gap-2">
            {Array(5).fill(null).map((val, index) => {
                return <div key={index}
                            className="w-[60px] h-[60px] border border-gray-400 rounded-md flex justify-center items-center uppercase">

                </div>
            })}
        </div>
    )
})

export default RowGrid;