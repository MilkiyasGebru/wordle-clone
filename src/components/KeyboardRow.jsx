const bg_colors = {
    "gray": "bg-gray-300",
    "green":"bg-green-500",
    "gold":"bg-amber-500",
}

export default function KeyboardRow({row, yellowCharacters, greenCharacters}) {
    console.log(yellowCharacters, row, row[0],greenCharacters.has(row[0]))
    return (
        <div className="flex gap-2">
            {row.map((item,i)=>{
                console.log(item, " this is row elements")
                let x = ""
                if (yellowCharacters.has(item)){
                    x = "gold"
                    // alert(x)
                }
                if (greenCharacters.has(item)){
                    x = "green"
                }
                return (
                    <div className={`${bg_colors[x]} text-black text-2xl flex justify-center items-center h-[60px] border border-gray-200 px-3 py-2 rounded-md`} key={i}>
                        {item}
                    </div>
                )
            })}
        </div>
    )
}