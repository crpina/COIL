import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; 
import useUsuarios2 from "../customsHOOKS/useUsuarios2";
import MensajeConfirmacion from "./MensajeConfirmacion";

function Registro() {
    const [tutor, setTutor] = useState(false);
    const [mensaje, setMensaje] = useState("Cuenta creada exitosamente");
    const [mostrarMensaje, setMostrarMensaje] = useState(false);
    const { agregarUsuario } = useUsuarios2();
    const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit, getValues, setValue } = useForm({
        defaultValues: {
            "email": null,
            "contrasena": null,
            "tipo": "paciente",
            "nombre": null,
            "fechaNa": null,
            "edad": null,
            "contacto": null,
            "estado": {
                "seguimientos": "0",
                "promedio": "0",
                "probabilidad": "sin seguimientos"
            },
            "tutor": {
                "tutornombre": null,
                "parentesco": null
            },
            "politica": null,
        }
    });

    const verSetTutor = () => {
        setTutor(prev => !prev); 
    }

    const onSubmit = async (data) => {
        const fechaNa = getValues("fechaNa");
    
        if (fechaNa) {
            const birthDate = new Date(fechaNa);
            const age = new Date().getFullYear() - birthDate.getFullYear();
    
            console.log("Edad:", age);
            const textoedad = age.toString();
            
            
            await setValue("edad", textoedad);
        }
    
        console.log(data);
    
        
        await agregarUsuario(data);
        setMostrarMensaje(true); 
    };

    
    const manejarAceptar = () => {
        setMostrarMensaje(false); 
        navigate("/login"); 
    };

    return (
        <div className="flex justify-center w-3xl mx-5">
            <form className="max-w-3xl w-full p-8" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="nombre" className="block mb-2 text-lg font-medium text-gray-900">Nombre</label>
                    <input type="text"
                        className="block w-full h-9 pl-2 bg-gray-50 border text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Nombre" {...register("nombre", { required: true, maxLength: 30 })} />
                    {errors.nombre?.type === 'required' && <p className="text-red-600">"Nombre requerido!"</p>}
                    {errors.nombre?.type === 'maxLength' && <p className="text-red-600">"El nombre es demasiado largo"</p>}
                </div>

                <div className="pt-4">
                    <label htmlFor="fechaNa" className="block mb-2 text-lg font-medium">Fecha nacimiento</label>
                    <input type="date"
                        className="block w-full h-9 pl-2 bg-gray-50 border text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        {...register("fechaNa", { required: true })} />
                    {errors.fechaNa?.type === 'required' && <p className="text-red-600">"Ingresa tu fecha de nacimiento!"</p>}
                </div>

                <div className="pt-4">
                    <label htmlFor="contacto" className="block mb-2 text-lg font-medium text-gray-900">Teléfono</label>
                    <input type="number"
                        className="block w-full h-9 pl-2 bg-gray-50 border text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="939798889" {...register("contacto", { required: true, maxLength: 9, minLength: 9 })} />
                    {errors.contacto?.type === 'required' && <p className="text-red-600">"Teléfono requerido!"</p>}
                    {errors.contacto?.type === 'maxLength' && <p className="text-red-600">"El número es demasiado largo"</p>}
                    {errors.contacto?.type === 'minLength' && <p className="text-red-600">"El número es demasiado corto"</p>}
                </div>

                <div className="pt-4">
                    <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900">Email</label>
                    <input type="text"
                        className="block w-full h-9 pl-2 bg-gray-50 border text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Usuario@gmail.com" {...register("email", { required: true, maxLength: 30 })} />
                    {errors.email?.type === 'required' && <p className="text-red-600">"Email requerido!"</p>}
                    {errors.email?.type === 'maxLength' && <p className="text-red-600">"El email es demasiado largo"</p>}
                </div>

                <div className="pt-4">
                    <label htmlFor="contrasena" className="block mb-2 text-lg font-medium text-gray-900">Contraseña</label>
                    <input type="password"
                        className="block w-full h-9 pl-2 bg-gray-50 border text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        {...register("contrasena", { required: true, maxLength: 30 })} />
                    {errors.contrasena?.type === 'required' && <p className="text-red-600">"Contraseña requerida!"</p>}
                    {errors.contrasena?.type === 'maxLength' && <p className="text-red-600">"La contraseña es demasiado larga"</p>}
                </div>

                <div className="flex items-center pt-4">
                    <input type="checkbox" {...register("politica", { required: true })} defaultChecked={false} />
                    <label htmlFor="politica" className="pl-6 text-lg font-medium text-gray-900">Acepto políticas y condiciones</label>
                    {errors.politica?.type === 'required' && <p className="text-red-600">"Debe aceptar políticas y condiciones!"</p>}
                </div>
                
                <div className="flex items-center pt-4">
                    <input 
                        type="checkbox" 
                        id="tutorCheckbox" 
                        checked={tutor} 
                        onChange={verSetTutor} 
                    />
                    <label htmlFor="tutorCheckbox" className="pl-6 text-lg font-medium text-gray-900">
                        {tutor ? "Eliminar tutor" : "Agregar tutor"}
                    </label>
                </div>

                {tutor && (
                    <>
                        <div className="pt-4">
                            <label htmlFor="nomtutor" className="block mb-2 text-lg font-medium text-gray-900">Nombre tutor</label>
                            <input type="text"
                                placeholder="Nombre tutor"
                                className="block w-full h-9 pl-2 bg-gray-50 border text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                {...register("tutor.tutornombre", { maxLength: 20 })} />
                            {errors.tutor?.tutornombre?.type === 'maxLength' && <p className="text-red-600">"El nombre es demasiado largo"</p>}
                        </div>

                        <div className="pt-4">
                            <label htmlFor="parentesco" className="block mb-2 text-lg font-medium text-gray-900">Parentesco</label>
                            <input type="text"
                                placeholder="Madre, padre, abuelo, etc."
                                className="block w-full h-9 pl-2 bg-gray-50 border text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                {...register("tutor.parentesco", { maxLength: 20 })} />
                                {errors.parentesco?.parentesco?.type === 'maxLength' && <p className="text-red-600">"El parentesco es demasiado largo"</p>}
                        </div>
                    </>
                )}

                <div className="flex justify-center pb-10 pt-6">
                    <button type="submit"
                        className="w-60 py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:ring-indigo-500">
                        Registrar
                    </button>
                </div>
            </form>

            {mostrarMensaje && (
                <MensajeConfirmacion 
                    mensaje={mensaje} 
                    onAceptar={manejarAceptar} 
                />
            )}
        </div>
    );
}

export default Registro;
