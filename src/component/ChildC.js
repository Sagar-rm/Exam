import React,{useContext} from "react";
import { MyContext } from "../App";

function ChildC (){
    const contextValue = useContext (MyContext);
    return(
        <>
        <h3>ChildC</h3>
        <p>{contextValue}</p>

        </>
    )

}

export default ChildC;