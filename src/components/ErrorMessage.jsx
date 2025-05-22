import {useEffect} from "react";

export default function ErrorMessage({errors, setErrors}) {

    useEffect(() => {
        const timer = setTimeout(()=>{
            setErrors(errors.slice(1));
        },5000)
        return ()=>{
            clearTimeout(timer)
        }
    }, [errors]);

    console.log(errors)
    const display_errors = [...errors].reverse();
    return (
        <div className="absolute top-[5%] left-[50%] flex flex-col gap-2 text-white -translate-x-1/2">
            {display_errors.map((error,index) =>{
                return (
                    <div className="border p-4 border-gray-500 bg-black text-white  transition-opacity duration-500 opacity-100"    >{error}</div>
                )
            })}
        </div>
    )
}