import { useState } from "react"


const AddList=({setLists})=>{
 

    const [{title},{setTitle}]=useState()
    const [{massege},{setMassege}]=useState()

    const handleTitle= (e) => {
        setTitel(e.target.value)
       
    }
    const handleMassege= (e) => {
        setMassege(e.target.value)
    }
    const  addSetLists=()=>{
        setLists({title:{title},massege:{massege}})
    }

    
    return(
        <>
        <input type="test" value="" onClick={handleTitel}/>
        <input type="test" value="" onClick={handleMassege}/>
        <button ></button>
       
        </>
    )
}
export default AddList