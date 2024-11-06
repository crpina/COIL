import React from "react";
import {useNavigate } from "react-router-dom"; 
import useUsuarios2 from "../customsHOOKS/useUsuarios2";
import useInfologin from "../customsHOOKS/useInfologin";

function VistaPacientesMed() {

    const {usuarios} = useUsuarios2();
    const {actualizarUsuario} = useInfologin();
    const navigar = useNavigate();
    const examinarPaciente= (usuario) => {
        actualizarUsuario(usuario);
        navigar("/medic");
    };


    return (
        <div className="flex flex-col items-center justify-center p-10 w-full">
            <div className="flex flex-col items-center justify-center w-full ">
                {usuarios.map((usuario, index) => (
                    usuario.tipo === "paciente" && usuario.estado.promedio >= 3 && (
                        <div key={index} className="w-full max-w-72 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex flex-col items-center pb-10">
                                <img className="w-24 h-24 mb-5 mt-4 rounded-full shadow-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfp79_BnOxH5sIOtUHwl-0jvY2q0UNAJj57A&s" alt="Patient"/>
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{usuario.nombre}</h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Número de paciente: {index + 1}</span>
                                <span className="text-lg font-semibold text-gray-900 dark:text-white">Promedio: {usuario.estado.promedio}</span>   
                                
                                <button 
                                
                                className="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                                onClick={() => examinarPaciente(usuario)}>

                                Examinar Paciente    
                                </button>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}

export default VistaPacientesMed;
