import { useForm } from "react-hook-form";  
import { Link, useNavigate } from "react-router-dom"; 
import { useState } from "react";
import useInfologin from "../customsHOOKS/useInfologin";
import useUsuario2 from "../customsHOOKS/useUsuarios2";
import MensajeConfirmacion from "./MensajeConfirmacion";

function Login() {
    const [mensaje, setMensaje] = useState("Usuario o contraseña incorrectos");
    const [mostrarMensaje, setMostrarMensaje] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate(); 
    const { actualizarUsuario } = useInfologin();
    const { buscarUsuario } = useUsuario2();

    const onSubmit = (data) => {
        const cuentaValida = buscarUsuario(data.email, data.contrasena);

        if (cuentaValida) {
            // Redireccionamos según el tipo de usuario
            if (cuentaValida.tipo === "paciente") {
                console.log("Paciente autenticado: " + data.email);
                actualizarUsuario(cuentaValida);
                navigate("/infopac");
            } else if (cuentaValida.tipo === "medico") {
                console.log("Médico autenticado: " + data.email);
                actualizarUsuario(cuentaValida);
                navigate("/pacientes");
            } else {
                console.log("Tipo de cuenta no válido: " + cuentaValida.tipo);
            }
        } else {
            console.log("Credenciales no válidas: " + data.email + " y " + data.contrasena);
            setMostrarMensaje(true); 
        }
    };

    const manejarAceptar = () => {
        setMostrarMensaje(false); 
    };

    return (
        <div className="flex flex-col pt-24">
            <div className="flex justify-center"> 
                <img src="https://revista.colegiomedico.cl/wp-content/uploads/2023/07/Nos-cuidamos-696x464.jpg" className="pc:w-96 iphone12:w-52" alt="foto de corazon" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col items-center pt-4">
                    <label className="block mb-2 text-lg font-medium text-gray-900" htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        className="block w-60 h-9 pl-2 placeholder:pl-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" 
                        placeholder="Cristofer@gmail.com" 
                        {...register("email", { required: true, maxLength: 30 })} 
                    />
                    {errors.email?.type === 'required' && <p className="text-red-600">"Email requerido!"</p>}
                    {errors.email?.type === 'maxLength' && <p className="text-red-600">"El email es demasiado largo"</p>}
                </div>

                <div className="flex flex-col items-center pt-4">
                    <label className="block mb-2 text-lg font-medium" htmlFor="contra">Contraseña</label>
                    <input 
                        type="password"
                        className="block w-60 h-9 pl-2 placeholder:pl-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" 
                        placeholder="**********************" 
                        {...register("contrasena", { required: true, maxLength: 30 })} 
                    />
                    {errors.contrasena?.type === 'required' && <p className="text-red-600">"Contraseña requerida!"</p>}
                    {errors.contrasena?.type === 'maxLength' && <p className="text-red-600">"La contraseña es demasiado larga"</p>}
                </div>

                <div className="flex flex-col items-center p-5">
                    <button 
                        type="submit"
                        className="flex w-60 justify-center mt-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Iniciar
                    </button>

                    <Link to="/registro"
                        className="flex w-60 justify-center mt-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Registrar
                    </Link>
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

export default Login;
