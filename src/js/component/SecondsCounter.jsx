import React from "react";

const SecondsCounter = ({ seconds }) => {
    const formatNumber = (number) => {
        // Convierte el número en una cadena y rellena con ceros hasta tener 6 dígitos
        return number.toString().padStart(6, '0');
    };

    const formattedSeconds = formatNumber(seconds);

    return (
        <div style={{
            width:'20rem',
            height:'5rem',
            margin:'auto',
            fontSize: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black', // Fondo negro
            color: 'white', // Letras blancas
            padding: '20px',
            borderRadius: '10px'
        }}>
            <i className="fas fa-clock" style={{ marginRight: '10px' }}></i>
            {/* Renderiza cada dígito individualmente */}
            {formattedSeconds.split('').map((digit, index) => (
                <span key={index} style={{ margin: '0 5px' }}>
                    {digit}
                </span>
            ))}
        </div>
    );
};

export default SecondsCounter;