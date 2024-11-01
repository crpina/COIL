import React from "react";
import { Link, useNavigate } from "react-router-dom"; 
import pacientesData from "../DB falsa/pacientes.json"; 

function VistaPacientesMed() {
    const paciente = pacientesData[0];


    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-5 mt-4 rounded-full shadow-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfp79_BnOxH5sIOtUHwl-0jvY2q0UNAJj57A&s" alt="Patient"/>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{paciente.nombre}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Número de paciente: 1</span>
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">Promedio: {paciente.estado.promedio}</span>
                    <Link to="/medic"
                        className="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">
                        Examinar Paciente
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default VistaPacientesMed;
