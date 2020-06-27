import React from "react";

const Form = props => (
  <form onSubmit={props.getImage}>
    <button className="btn">GET</button>
  </form>
);

export default Form;
