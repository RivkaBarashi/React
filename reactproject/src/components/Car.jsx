import CarMode from "./CarMode"

const Car =({ model, color })=>{

   return (
        <>
         <h3>Car Model: {model}</h3>
         <h3>Car Color: {color}</h3>
         
          <CarMode />  
          <hr />
            
        </>
    )

   
}
export default Car