import React, { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";
import Secao from "./componentes/Secao/Secao";

function App() {

  const secoes = [
    {
      nome : 'Computadores',
      corPrimaria : '#C387C2',   
      corSecundaria : '#F9F1F9'
    },
    {
      nome : 'Acessórios',
      corPrimaria : '#A4E9FF',    
      corSecundaria : '#F0FAFF'    
    },
    {
      nome : 'Impressoras',
      corPrimaria : '#FA85B9',   
      corSecundaria : '#FFF0F6'    
    },
    {
      nome : 'Games',
      corPrimaria : '#C387C2',     
      corSecundaria : '#F9F1F9'
    },
    {
      nome : 'Gadgets',
      corPrimaria : '#FA85B9',
      corSecundaria : '#FFF0F6'
    }
  ];

  const listaSecoes = secoes.map( secao => secao.nome );
  const [produtos, setProdutos] = useState( [] )

  const adicionaProduto = (prod) => {
    const listaNova = produtos.slice();
    listaNova.push(prod)
    setProdutos( listaNova )
  }

  return (
    <div>
      {}
      <Banner />
      
      <Formulario secoes={listaSecoes} aoProdutoCadastrado={prod => adicionaProduto(prod)} />

      { secoes.map(secao => <Secao key={secao.nome}
                                nome={secao.nome}
                                corPrimaria={secao.corPrimaria}
                                corSecundaria={secao.corSecundaria}
                                produtos={ produtos.filter( prod => prod.secao === secao.nome ) }
                          />) 
      }

    </div>
  );
}

export default App;
