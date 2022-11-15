import React from 'react';
import './stylebt.css';
function FormButao(props) {
  return (
    <button type={props.tipobt} className="classButton">
      {props.nomebt}
    </button>
  );
}

export default FormButao;
