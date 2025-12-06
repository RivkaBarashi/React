import Car from "./Car.jsx";
import { useState } from "react"
const   Road =()=>{
 const cars=[
    { model: "Toyota", color: "Red" },
    { model: "BMW", color: "Blue" },
    { model: "Audi", color: "Black" },
    { model: "Mercedes", color: "White" },
    ]
  const [speed, setSpeed] = useState(0)

   return (
        <>
           {cars.map((car, index) => (
      <Car key={index} model={car.model} color={car.color} speed={speed} setSpeed={setSpeed} />
    ))}
           
          
            
        </>
    )

   
}
export default Road