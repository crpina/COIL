import { Link } from "react-router-dom";
import useMjsMedico from "../customsHOOKS/useMjsMedico";
import useInfologin from "../customsHOOKS/useInfologin";

function NotificacionesMsj() {
    const { mesjRecomendacion } = useMjsMedico();
    const { usuarioActual } = useInfologin();

  
    const mensajesUsuario = usuarioActual && mesjRecomendacion
        ? mesjRecomendacion.filter((mensaje) => mensaje.email2 === usuarioActual.email)
        : [];

    return (
        <>
            <div className="flex items-end justify-end h-10 m-2">
                <Link to="/infopac" className="pr-6 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">
                    Volver
                </Link>
            </div>

            <div className="space-y-6 m-4">
                {mensajesUsuario.length > 0 ? (
                    mensajesUsuario.map((mensaje, index) => (
                        <div
                            key={index}
                            className="max-w-lg mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md"
                        >
                            <div className="flex items-center mb-4">
                                <div className="text-blue-600 text-2xl mr-2">ℹ️</div>
                                <h2 className="font-bold text-lg text-gray-800">{mensaje.desde} Medico</h2>
                                <span className="ml-auto text-sm text-gray-500">{mensaje.fecha}</span>
                            </div>
                            <div className="text-gray-600 mb-2">
                                <p className="text-sm">Asunto: Recomendación</p>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                {mensaje.msj}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No tienes mensajes nuevos.</p>
                )}
            </div>
        </>
    );
}

export default NotificacionesMsj;
