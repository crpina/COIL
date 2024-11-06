import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";  
import useInfologin from "../customsHOOKS/useInfologin";
import useMsjMedico from "../customsHOOKS/useMjsMedico";
import MensajeConfirmacion from './MensajeConfirmacion';  

function InfoMedico() {
    const mensaje = {
        "fecha": "sin fecha",
        "desde": "Carlos ",
        "email": "medico@coil.com",
        "para": "null",
        "email2": "null",
        "msj": "null"
    };   
    const { register, handleSubmit } = useForm();
    const { usuarioActual } = useInfologin();
    const { agregarMensaje } = useMsjMedico();
    
    const date = new Date();
    const [mensajeConfirmacionVisible, setMensajeConfirmacionVisible] = useState(false);  
    const [mensajeConfirmacion, setMensajeConfirmacion] = useState(""); 

    const onSubmit = async (data) => {
        mensaje.fecha = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
        mensaje.para = usuarioActual.nombre;
        mensaje.email2 = usuarioActual.email;
        mensaje.msj = data.comment;
        
        await agregarMensaje(mensaje);
        setMensajeConfirmacion("Mensaje enviado correctamente.");
        setMensajeConfirmacionVisible(true);  
    };

    const handleAceptarConfirmacion = () => {
        setMensajeConfirmacionVisible(false);  
    };

    return (
        <>
            <div className='flex items-end justify-end h-10 m-2'>
                <Link to="/pacientes" className='pr-6 hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-blue-700 y-700'> Volver </Link>
            </div>

            <div className="pt-10 px-10">
                <div className="flex w-full items-center justify-center py-5 ">
                    <div className="flex flex-col items-center w-full max-w-test shadow-md py-2">
                        <div className="div-foto-paciente">             
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfp79_BnOxH5sIOtUHwl-0jvY2q0UNAJj57A&s" alt="foto usuario"/>          
                        </div>
                    </div>
                </div>

                <div className="flex w-full items-center justify-center py-5 ">
                    <div className="flex flex-col py-1 px-2 w-full max-w-test shadow-md">
                        <p className="py-2 pc:text-xl iphone12:text-sm">Nombre: {usuarioActual.nombre}</p>
                        <p className="py-2 pc:text-xl iphone12:text-sm">Fecha nacimiento: {usuarioActual.fechaNa}</p>
                        <p className="py-2 pc:text-xl iphone12:text-sm">Email: {usuarioActual.email}</p>
                        <p className="py-2 pc:text-xl iphone12:text-sm">Tipo: {usuarioActual.tipo}</p>
                        <p className="py-2 pc:text-xl iphone12:text-sm">Contacto telefónico: {usuarioActual.contacto}</p>
                        <p className="py-2 pc:text-xl iphone12:text-sm">Seguimientos en el año: {usuarioActual.estado.seguimientos}</p>
                        <p className="py-2 pc:text-xl iphone12:text-sm">Promedio de calificación: {usuarioActual.estado.promedio}/4</p>
                        <p className="py-2 pc:text-xl iphone12:text-sm text-lef">Probabilidad de padecer diabetes: {usuarioActual.estado.probabilidad}</p>
                    </div>
                </div>

                {usuarioActual.tutor.tutornombre !== null && (
                    <div className="flex w-full items-center justify-center py-5 ">
                        <div className="flex flex-col py-1 px-2 w-full max-w-test shadow-md">
                            <p className="py-2 pc:text-xl iphone12:text-sm">Nombre tutor: {usuarioActual.tutor.tutornombre}</p>
                            <p className="py-2 pc:text-xl iphone12:text-sm">Parentesco: {usuarioActual.tutor.parentesco}</p>
                        </div>
                    </div>   
                )}

                <div className="flex w-full items-center justify-center pt-3 ">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full max-w-test">
                        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
                            <div className="w-full px-4 py-2 bg-white rounded-t-lg ">
                                <textarea
                                    id="comment"
                                    rows="4"
                                    className="w-full pc:text-xl iphone12:text-sm text-sm text-gray-900 bg-white border-0"
                                    placeholder="Empieza a escribir aqui"
                                    required
                                    {...register('comment')}
                                ></textarea>
                            </div>
                            
                            <div className="flex items-center justify-between px-3 py-2 border-t">
                                <button type="submit" className="inline-flex items-center py-2.5 px-4 pc:text-xl iphone12:text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800">
                                    Enviar comentario
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>

           
            {mensajeConfirmacionVisible && (
                <MensajeConfirmacion 
                    mensaje={mensajeConfirmacion}
                    onAceptar={handleAceptarConfirmacion}
                />
            )}
        </>
    );
}

export default InfoMedico;
