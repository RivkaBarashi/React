import { useState } from "react"

import DetailList from "./DetailList";


const TodoList = () => {
    


    return(
        <>
       
       {
             lists.map(lists => <DetailList lists= {lists}/>)
       }
        

        
        </>
    )
}
export default TodoList




