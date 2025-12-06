import CarMode from "./CarMode"

const Car =({ model, color,speed,setSpeed })=>{
  

   return (
        <>
         <h3>Car Model: {model}</h3>
         <h3>Car Color: {color}</h3>
         
          <CarMode setSpeed={setSpeed} speed={speed} />  
          <hr />
            
        </>
    )

   
}
export default Car