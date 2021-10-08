import React from "react";

const FunctionalComponent = ({value,handleClick}) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1> HELLO WORLD</h1>
     <p>INC: {value}</p>
      <button onClick={()=>{
        handleClick(2)}}>Inc</button>
    </div>
  );
};

export default FunctionalComponent;
