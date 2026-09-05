import React, { useState } from "react";
import './Formulario.css';
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [secao, setSecao] = useState('Computadores') 
    const [marca, setMarca] = useState('HP')          
    const [condicao, setCondicao] = useState('Novo')  

    const listaMarcas = ["HP", "Dell", "Positivo", "Asus", "genérico"];

    const aoSalvar = (evento) => {
        evento.preventDefault()
        
        props.aoProdutoCadastrado({
            "nome": nome,
            "preco": preco,
            "secao": secao,
            "marca": marca,
            "condicao": condicao
        });

        setNome('');
        setPreco('');
        setSecao('Computadores');
        setMarca('HP');
        setCondicao('Novo');
    }

    return (
        <section className="formulario">

            <form onSubmit={aoSalvar}>

                <h2>Dados do produto:</h2>

                <CampoTexto
                    label="Nome do Produto"
                    placeholder="Digite o nome do produto"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto
                    label="Preço (R$)"
                    tipo="number"
                    placeholder="Digite o preço ex: 299.90"
                    valor={preco}
                    aoAlterado={valor => setPreco(valor)}
                />

                <ListaSuspensa
                    label="Seções"
                    itens={props.secoes}
                    valor={secao}
                    aoAlterado={valor => setSecao(valor)}
                />

                <ListaSuspensa
                    label="Marcas"
                    itens={listaMarcas}
                    valor={marca}
                    aoAlterado={valor => setMarca(valor)}
                />

                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', margin: '24px 0', width: '100%' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '18px', fontWeight: '600' }}>
                        Condição do Produto
                    </label>
                    <div style={{ display: 'flex', gap: '20px', fontSize: '16px' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
                            <input 
                                type="radio" 
                                name="condicao" 
                                value="Novo" 
                                checked={condicao === "Novo"} 
                                onChange={() => setCondicao("Novo")} 
                            /> Novo
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
                            <input 
                                type="radio" 
                                name="condicao" 
                                value="Usado" 
                                checked={condicao === "Usado"} 
                                onChange={() => setCondicao("Usado")} 
                            /> Usado
                        </label>
                    </div>
                </div>

                <Botao>Criar Produto</Botao>

            </form>

        </section>
    )
}

export default Formulario;
