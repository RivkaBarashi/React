import { useState } from "react"
const DetailList=({lists})=>{

    return(
        <>
        <h2>DetailList</h2>
        <h3> {lists.titel} </h3>
        <h3>{lists.massege}</h3>

        </>
    )
}
export default DetailList