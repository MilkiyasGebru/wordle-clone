export default function ErrorMessage({error}) {
    return (
        <div className="absolute top-[5%] left-[50%] border p-4 border-gray-500 bg-black text-white -translate-x-1/2">
            <p>Error is {error}</p>
        </div>
    )
}