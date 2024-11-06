import useUsuarios2 from "../customsHOOKS/useUsuarios2";
import useInfologin from "../customsHOOKS/useInfologin";
import { Link } from 'react-router-dom';


const MsjResultadoTest = () => {

  const { usuarioActual} = useInfologin();
  const { tests, actualizarestado } = useUsuarios2();
  
  const ultimoElemento = tests[tests.length - 1];
  console.log("Último elemento:", ultimoElemento);

  
  const calificacion = ultimoElemento ? parseInt(ultimoElemento.calificacion, 10) : null;

  actualizarestado(usuarioActual.email)


  let mensaje;

  switch (calificacion) {
    case 1:
      mensaje = "¡Muy bien! Excelente trabajo.";
      break;
    case 2:
      mensaje = "Bien hecho, sigue así. ";
      break;
    case 3:
      mensaje = "Buen trabajo, pero aún hay margen para mejorar.";
      break;
    case 4:
      mensaje = "¡Necesitas mejorar.";
      break;
    default:
      mensaje = "Calificación no válida.";
  }

 

  return (
    <div className="flex w-full justify-center items-center">
      <div className="w-full m-10 shadow-xl p-7 min-w-80 max-w-test">
        <h2 className="text-2xl font-bold">Tu calificación: {calificacion} / 4</h2>
        <p className="text-xl">{mensaje}</p>
        
        
        
        <button
          
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          <Link to={"/infopac"}>Ok, gracias</Link> 
        </button>
      </div>
    </div>
  );
};

export default MsjResultadoTest;
