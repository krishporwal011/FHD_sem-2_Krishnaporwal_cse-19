import React from "react";

function Greetings(props) {
    return (
        
        <div>
           
            <h2>{props.name}</h2>
            <p>Course: {props.Branch} Marks: {props.Marks}</p>
        </div>
    )
}
export default Greetings