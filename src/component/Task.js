import React from "react";

function Task(props){

    return(
        <>
        <input type="checkbox" defaultChecked={props.completed}/>
        <span>{props.text}</span>
        </>
    )
}

export default Task;