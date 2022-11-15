import React, { useState } from 'react';
import FormButao from '../formbutao';
import FormInput from '../forminput';
import './styleform.css';

function FormProduto() {
  const [formDados, setFormDados] = useState({});

  const dadosForm = (event) => {
    const { name, value } = event.target;
    setFormDados({ ...formDados, [name]: value });
    console.log(formDados);
  };

  return (
    <div className="classformconteiner">
      <div className="classform">
        <form>
          <FormInput
            cdid="txcodigo"
            tipoinp="text"
            cpname="Codigo do  produto.:"
            event={dadosForm}
          />
          <FormInput
            cdid="txnome"
            tipoinp="text"
            cpname="Nome Produto.:"
            event={dadosForm}
          />
          <FormInput
            cdid="txquant"
            tipoinp="number"
            cpname="Quantidade.:"
            event={dadosForm}
          />
          <FormInput
            cdid="txpeco"
            tipoinp="text"
            cpname="Preço.:"
            event={dadosForm}
          />
          <div className="btgconfig">
            <FormButao tipobt="button" nomebt="Cadastrar Produto" />
            <FormButao tipobt="button" nomebt="limpar" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormProduto;
