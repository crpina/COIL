import React, { useState } from 'react';

const MensajeConfirmacion = ({ mensaje, onAceptar }) => {
    const [visible, setVisible] = useState(true);

    const manejarAceptar = () => {
        setVisible(false); 
        if (onAceptar) {
            onAceptar(); 
        }
    };

    if (!visible) return null; 

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs mx-auto">
                <p className="mb-4 text-center">{mensaje}</p>
                <button 
                    onClick={manejarAceptar}
                    className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    OK
                </button>
            </div>
        </div>
    );
};

export default MensajeConfirmacion;
