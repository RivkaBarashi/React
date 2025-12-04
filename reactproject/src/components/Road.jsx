import Car from "./Car.jsx";
const   Road =()=>{
 const cars=[
    { model: "Toyota", color: "Red" },
    { model: "BMW", color: "Blue" },
    { model: "Audi", color: "Black" },
    { model: "Mercedes", color: "White" },
    ]


   return (
        <>
           {cars.map((car, index) => (
      <Car key={index} model={car.model} color={car.color} />
    ))}
           
          
            
        </>
    )

   
}
export default Road