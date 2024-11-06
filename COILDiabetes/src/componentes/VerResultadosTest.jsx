import { Link } from "react-router-dom";
import useUsuarios2 from "../customsHOOKS/useUsuarios2";
import useInfologin from "../customsHOOKS/useInfologin";

function VerResultadosTest() {
    const { tests } = useUsuarios2();
    const { usuarioActual } = useInfologin();

    return (

        <>
        <div className="flex w-full flex-col">
        
            <div className='flex items-end justify-end h-10 m-2'>
            <Link to="/infopac" className='pr-6 hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-blue-700 y-700' > Volver </Link>
            </div>
            
            <div className="flex flex-col w-full justify-center items-center">
                {tests.map((test, index) => (
                    test.email === usuarioActual.email && (
                        <div 
                            key={index} 
                            className="w-full max-w-sm m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                        >
                        
                            <div className="p-4">
                                <h2 className="text-lg font-bold">Resultados del Test</h2>
                                <p>Email: {test.email}</p>
                                <p>Resultado: {test.calificacion}</p> 
                            </div>

                        </div>
                    )
                ))}
            </div>
        </div>
        </>
    );
}

export default VerResultadosTest;
