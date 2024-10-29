import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


function InfoPaciente (){


    const [usuario, setUsuario] = useState({
        tipo: null,
        edad: null,
        email: null,
        contactoTelefonico: null,
        estado: null,
        seguimientosEnElAño: null,
        promedioCalificacion: null,
        estadoDiabetes: null,
    });

    useEffect(() => {


    },[]);


    return (
        <>
        <div className="div-info-paciente">

            <div className="div-foto-paciente">             
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfp79_BnOxH5sIOtUHwl-0jvY2q0UNAJj57A&s" alt="foto usuario"/>          
            </div>

            <div className="div-campanita-paciente">
                <img src="https://cdn-icons-png.flaticon.com/512/18/18666.png" alt="notificacion"/>
            </div>

            <div className="div-datos-paciente">
                <p>paciente</p>
                <p>edad: 22</p>
                <p>Email: usuario@gmail.com</p>
                <p>Contacto telefonico: 9534XXXXX</p>
                <p>Estado del usuario:</p>
                <p>Seguimientos en el año: 4</p>
                <p>Promedio de calificacion: 6/10</p>
                <p>Estado de padecer diabetes: media-baja</p>
            </div>

                <div className="flex flex-col items-center p-5">
                <Link to="/test"
                className="radio-boton-paciente flex w-60  justify-center mt-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                > Hacer test
                </Link>

                <button className="radio-boton-paciente flex w-60  justify-center mt-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                 type="submit">Ver resultado del test
                </button>
            </div>
        </div>
        </>
    )    

}

export default InfoPaciente;