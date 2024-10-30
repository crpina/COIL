import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";  
import { useEffect, useState } from "react";

function InfoMedico() {
    const { register, handleSubmit } = useForm();
    
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
        // Logic to fetch user data can go here
    }, []);

    const onSubmit = (data) => {
        console.log("Comment submitted: ", data);
        // Handle form submission logic here
    };

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
                <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
                            <div className="px-4 py-2 bg-white rounded-t-lg">
                                <label htmlFor="comment" className="sr-only">Your comment</label>
                                <textarea
                                    id="comment"
                                    rows="4"
                                    className="w-full px-0 text-sm text-gray-900 bg-white border-0"
                                    placeholder="Write a comment..."
                                    required
                                    {...register('comment')}
                                ></textarea>
                            </div>
                            <div className="flex items-center justify-between px-3 py-2 border-t">
                                <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800">
                                    Enviar comentario
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="flex flex-col items-center p-5">
                    <Link to="/test" className="radio-boton-paciente flex w-60 justify-center mt-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Hacer test
                    </Link>
                    <button className="radio-boton-paciente flex w-60 justify-center mt-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="button">
                        Ver resultado del test
                    </button>
                </div>
            </div>
        </>
    );    
}

export default InfoMedico;
