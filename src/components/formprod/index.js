import React from 'react';

function FormProduto() {
  return (
    <div>
      <form>
        <label htmlFor="txtcodigo">
          Codigo Produto.:
          <input type="text" name="codigo" id="txtcodigo" />
        </label>
      </form>
    </div>
  );
}

export default FormProduto;
