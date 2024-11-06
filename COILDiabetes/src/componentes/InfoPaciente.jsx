import { Link } from "react-router-dom";
import useInfologin from "../customsHOOKS/useInfologin";

function InfoPaciente (){


    const {usuarioActual} = useInfologin();


    return (
        <>
        <div className="pt-10 px-10">
            <div className="flex w-full items-center justify-center py-5 ">
                <div className="flex flex-col items-center w-full max-w-test shadow-md py-2">
                    <div className="div-foto-paciente">             
            
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfp79_BnOxH5sIOtUHwl-0jvY2q0UNAJj57A&s" alt="foto usuario"/>          
                    
                    </div>

                    <div  className="div-campanita-paciente">
                        <Link to="/notificaciones" > <img src="https://cdn-icons-png.flaticon.com/512/18/18666.png" alt="notificacion"/> </Link>
                    </div>
                </div>
            </div>
            
            <div className="flex w-full items-center justify-center py-5 ">
                <div className="flex flex-col py-1 px-2 w-full max-w-test shadow-md">
                    <p className="py-2 pc:text-xl iphone12:text-sm">Nombre: {usuarioActual.nombre}</p>
                    <p className="py-2 pc:text-xl iphone12:text-sm">Email: {usuarioActual.email}</p>
                    <p className="py-2 pc:text-xl iphone12:text-sm">Tipo: {usuarioActual.tipo}</p>
                    <p className="py-2 pc:text-xl iphone12:text-sm">Contacto telefónico: {usuarioActual.contacto}</p>
                    <p className="py-2 pc:text-xl iphone12:text-sm">Seguimientos en el año: {usuarioActual.estado.seguimientos}</p>
                    <p className="py-2 pc:text-xl iphone12:text-sm">Promedio de calificación: {usuarioActual.estado.promedio}/4</p>
                    <p className="py-2 pc:text-xl iphone12:text-sm">Probabilidad de padecer diabetes: {usuarioActual.estado.probabilidad}</p>
                </div>
            </div>

            <div className="flex flex-col items-center p-5">
                <Link to="/test"
                className="radio-boton-paciente flex w-60  justify-center mt-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                > Hacer test
                </Link>

                <Link to="/ver-resultados-test"
                className="radio-boton-paciente flex w-60  justify-center mt-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                > Ver Tests
                </Link>
            </div>
        </div>
        </>
    )    

}

export default InfoPaciente;