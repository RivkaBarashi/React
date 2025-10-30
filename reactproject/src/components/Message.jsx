import { useState } from "react"

const Message = () => {

    const [Email, setEmail] = useState("")

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const [UserName, setUserName] = useState("")

    const handleUserNameChange = (e) => {
        setUserName(e.target.value)
    }

    return (
        <>
                <h1>--------------------------------------------------------------------------------------</h1>

        <h1>Hello {UserName}</h1>
        <input placeholder="Enter UserName" onChange={handleUserNameChange}/>
        <h5>The Email is: {Email}</h5>
        <input placeholder="Enter Email" onChange={handleEmailChange}/>
        
        </>
    )
}

export default Message