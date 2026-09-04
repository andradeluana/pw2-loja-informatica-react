import React from "react";
import './Lista.css';

const Lista = (props) => {

  return (
    <div className="lista">
        
      <h2>Lista de Produtos</h2>

      {props.objetos.map( (objeto, index) => (

        <div key={index}>
          <strong>Nome:</strong> {objeto.nome} <br/>
          <strong>Preço:</strong> R$ {parseFloat(objeto.preco).toFixed(2)} <br/>
          <strong>Seção:</strong> {objeto.secao} <br/>
          <strong>Marca:</strong> {objeto.marca} <br/>
          <strong>Condição:</strong> {objeto.condicao} <br/>
          <hr />
        </div>

      ))}

    </div>
  )
}

export default Lista;
