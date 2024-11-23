import React from "react";
import ChildC from './ChildC';

function ChildC(){
    return(
        <>
        <h2>ChildB</h2>
        <ChildC/>
        </>
    )
}

export default ChildC;