export default function Modal({turn, isCorrect}){
    return (
        <div className="bg-white/70 fixed w-full h-full flex justify-center items-center">
            {isCorrect && (<div className="border bg-white opacity-100 p-4 rounded-md">
                <h1 className="text-4xl text-center">You Win!</h1>
                <p className="text-2xl">You found the word in {turn} guesses</p>
            </div>)}
            {!isCorrect && (<div className="border bg-white opacity-100 p-4 rounded-md">
                <h1 className="text-4xl text-center">You Lose :)</h1>
                <p className="text-2xl">Try again later</p>
            </div>)}

        </div>
    )
}