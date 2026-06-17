import React from 'react'

const card = (props) => {
  return (
    <div style={{border:"1px solid yellow",width:"300px",height:"400px",margin:"20px"}}>
      <h3>Student Record</h3>
      <img src={props.img} alt="Student" style={{width:"50%",height:"50%"}}/>
      <h3>Student Name:{props.name}</h3>
      <h3>Student Class: {props.class}</h3>
    </div>
  )
}
export default card
