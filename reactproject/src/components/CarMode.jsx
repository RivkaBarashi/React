import { useState } from "react"

const CarMode =({setSpeed,speed})=>{

    const [isMoving, setIsMoving] = useState(false)
     
const handleToggleIsMoving = () => {
        setIsMoving(!isMoving)
    }

    const handleSpeedChange = (e) => {
        setSpeed(Number(e.target.value))
    }
   return (
        <>
        <button onClick={handleToggleIsMoving}>{isMoving ? "the car moving" :"the car Stop" }</button>
         {isMoving &&<> <h3>Your speed is: {speed}</h3>
                <input placeholder="Enter speed" type="number" onBlur={handleSpeedChange} /></>}
         
        
           
            
        </>
    )

   
}
export default CarMode