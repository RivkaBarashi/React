import { useState } from "react"
import DetailList from "./DetailList"
import TodoList from "./TodoList";
import AddList from "./AddList";

const AllList =({})=>{

    const [lists, setLists] = useState([]);

    return(
        <>
        <TodoList lists={lists} />
        <AddList setLists={setLists}/>
        
              
            
        </>
    )
}
export default AllList