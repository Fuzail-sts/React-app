import React from "react";

const FunctionalComponent = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1> HELLO WORLD</h1>
     <p>INC: {props.value}</p>
      <button onClick={()=>{props.handleClick(2)}}>Inc</button>
    </div>
  );
};

export default FunctionalComponent;
