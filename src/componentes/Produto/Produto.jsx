import React from "react";
import "./Produto.css";

import logoHp from "./hp.jpg";
import logoDell from "./dell.jpg";
import logoPositivo from "./positivo.png";
import logoAsus from "./asus.jpg";
import logoGenerico from "./generico.png";

const Produto = (props) => {
    const imagensDasMarcas = {
        "HP": logoHp,
        "Dell": logoDell,
        "Positivo": logoPositivo,
        "Asus": logoAsus,
        "Generico": logoGenerico
    };

    const imagemExibida = imagensDasMarcas[props.marca] || logoGenerico;

    return (
        <div className="colaborador">
            <div className="cabecalho" style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                padding: '20px',
                height: '150px',
                backgroundColor: '#ffffff',
                borderBottom: '1px solid #f1f5f9'
            }}>
                <img 
                    src={imagemExibida} 
                    alt={`Logo da ${props.marca}`} 
                    style={{ 
                        maxHeight: '100%', 
                        maxWidth: '80%', 
                        objectFit: 'contain' 
                    }} 
                />
            </div>

            <div className="rodape" style={{ textAlign: 'left', padding: '15px', backgroundColor: '#ffffff' }}>
                <h4 style={{ margin: '0 0 5px 0', fontSize: '1.2rem', color: '#1e293b' }}>{props.nome}</h4>
                
                <h5 style={{ margin: '0 0 10px 0', color: '#0284c7', fontSize: '1.1rem', fontWeight: 'bold' }}>
                    R$ {props.preco && !isNaN(props.preco) ? parseFloat(props.preco).toFixed(2) : "0.00"}
                </h5>

                <span className={`status-badge ${props.condicao === "Novo" ? "novo" : "usado"}`} style={{
                    padding: '3px 8px',
                    borderRadius: '5px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    backgroundColor: props.condicao === "Novo" ? '#dcfce7' : '#fef3c7',
                    color: props.condicao === "Novo" ? '#15803d' : '#b45309'
                }}>
                    {props.condicao}
                </span>
            </div>
        </div>
    );
}

export default Produto;
