const bg_colors = {
    "gray": "bg-gray-300 text-white",
    "green":"bg-[#6AAA64] text-white",
    "gold":"bg-[#C9B458] text-white",
    "empty":"bg-[#D3D6DA] text-black",
}

export default function KeyboardRow({row, yellowCharacters, greenCharacters, handleKeyUp}) {
    return (
        <div className="flex gap-2">
            {row.map((item,i)=>{
                let x = "empty"
                if (yellowCharacters.has(item)){
                    x = "gold"
                }
                if (greenCharacters.has(item)){
                    x = "green"
                }
                console.log("x",x,bg_colors[x])
                return (
                    <div style={{
                        transitionDelay:"3000ms"
                    }} className={`${bg_colors[x]} cursor-pointer uppercase text-black text-2xl flex justify-center items-center h-[60px] min-w-[50px] border border-gray-200 px-3 py-2 rounded-md `} key={i} onClick={(e)=>{handleKeyUp({key:item})}}>
                        {item}
                    </div>
                )
            })}
        </div>
    )
}