import React from 'react';
import './styleinput.css';
function FormInput(props) {
  return (
    <label htmlFor={props.cdid} className="classLabel">
      {props.cpname}
      <input
        type={props.tipoinp}
        id={props.cdid}
        className="classInput"
        name={props.cdid}
        onChange={props.event}
        min="0"
      />
    </label>
  );
}

export default FormInput;
