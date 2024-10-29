import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"; 

function Login() {
    
    const { register,formState: {errors}, handleSubmit } = useForm();
    
    return (
        <div  className="flex flex-col pt-24 ">
            
            <div className="flex justify-center"> 
                <img src="https://revista.colegiomedico.cl/wp-content/uploads/2023/07/Nos-cuidamos-696x464.jpg" className="pc:w-96 iphone12:w-52" alt="foto de corazon" />
            </div>

            <form  >
                   
                    <div className="flex flex-col items-center pt-4">
                        
                        <label className="block mb-2 text-lg  font-medium text-gray-900" name="email" id="email">Email</label>  
                        
                        <input type="Email" 
                        className="block w-60 h-9 pl-2 placeholder:pl-2  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
                        placeholder="Cristofer@gmail.com" {...register("email", {required: true, maxLength: 30})}/>
                        {errors.name?.type === 'required' &&  <p className="text-red-600">"Email requerido!"</p> }
                        {errors.name?.type === 'maxLenghy' &&  <p className="text-red-600">"El email es demaciado largo"</p>}

                    </div>

                    <div className="flex flex-col items-center pt-4">
                        
                        <label className="block mb-2 text-lg font-medium" name="contra" id="contra">Contraseña</label>  
                        
                        <input type="password"
                        className="block w-60 h-9 pl-2 placeholder:pl-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
                        placeholder="**********************" {...register("contra", {required: true, maxLength: 30})}/>
                        {errors.name?.type === 'required' &&  <p className="text-red-600">"Contraseña requerida!"</p> }
                        {errors.name?.type === 'maxLenghy' &&  <p className="text-red-600">"La contraseña es demaciado largo"</p>}

                    </div>
                    
                    <div className="flex flex-col items-center p-5">
                    <Link to="/infopac"
                    className="flex w-60 justify-center mt-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    > Iniciar
                    </Link>

                    <Link to="/registro"
                    className="flex w-60 justify-center mt-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    > Registrar
                    </Link>
                    </div>

            </form>        


        </div>
    )
}

export default Login