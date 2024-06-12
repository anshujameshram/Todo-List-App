import { useState } from "react";

export default function Form(){
    const [name,setName]=useState({firstName:"",lastName:""});

function handleSubmit(e){
    e.preventDefault();
    console.log(name)
}
    function handleChange(e){
        console.log(e.target.value);
        setName({firstName:e.target.value,lastName:e.target.value})
    }
    return(
        <div>
            <form>
                First name:
                <input onChange={(e)=>setName({...name,firstName:e.target.value})} value={name.firstName} type="text"></input><br></br>
                last name:
                <input onChange={(e)=>setName({...name,lastName:e.target.value})} value={name.lastName} type="text"></input><br></br>
                <button type="submit" value="submit" onClick={(e)=>handleSubmit(e)}>submit</button>
            </form>
        </div>
    )
}