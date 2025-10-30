import { useState } from "react"

const PasswordStrengthIndicator = () => {

    
     const [message, setMessage] = useState("")
    const handleTextChange = (e) => {
        const length= e.target.value.length
        if(length<6)
            setMessage("Weak Password")
        else{
         if(length<10)
            setMessage("Moderate Password")
        if(length>10)
            setMessage("Strong Password")
    }  
    }

   
    return (
        <>
        <h1>--------------------------------------------------------------------------------------</h1>
        <h1>Enter Password</h1>
        <input placeholder="Enter UserName" onBlur={handleTextChange}/>
        <h5>Password Strength: {message}</h5>
        
        
        </>
    )
}

export default PasswordStrengthIndicator