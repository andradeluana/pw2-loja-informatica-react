import React from "react";
import "./Banner.css";

const Banner = () => {
    return (
        <header className="banner-container" style={{
            background: 'linear-gradient(135deg, #C387C2 50%, #A4E9FF 100%)',
            padding: '60px 20px',
            textAlign: 'center',
            color: '#ffffff',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
        }}>
            <h1 style={{ 
                fontSize: '3rem', 
                fontWeight: '800', 
                margin: '0 0 10px 0',
                letterSpacing: '1px',
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
            }}>
                Avaliação Pratica -  Loja Informática  
            </h1>
            <p style={{ 
                fontSize: '1.2rem', 
                margin: '0', 
                opacity: '0.9',
                fontWeight: '500'
            }}>
                Programação para Web II
            </p>
        </header>
    );
}

export default Banner;
