import { useState } from "react"

const Background = () => {

    const [isbackground, setIsbackground] = useState(true)

    const handleChangebackground = () => {
        setIsbackground(!isbackground)
    }
    return (
        <>
        <h1>{isbackground? "bright": "blunt"}</h1>
        <button onClick={handleChangebackground}>Change background</button>
        </>
    )
}
export default Background