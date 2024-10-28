import { useForm } from "react-hook-form";


function Registro () {
    
    const { register,formState: {errors}, handleSubmit, watch } = useForm({
        defaultValues: {
            politica: false,
            tutor: false, 
        }}
    );

    
    const polica = watch("politica", false);
    const tutor = watch("tutor", false);

    function ver(){
        console.log(polica);
        console.log(tutor);
    }

    return (
        
        
        <div className="flex justify-center w-3xl mx-5">
             <form className="max-w-3xl w-full p-8" >
                   
                   <div className="">
                       
                       <label className="block mb-2 text-lg  font-medium text-gray-900" name="nombre" id="nombre">Nombre</label>  
                       
                       <input type="text" 
                       className="block w-full h-9 pl-2 placeholder:pl-2  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
                       placeholder="Nombre" {...register("nombre", {required: true, maxLength: 30})}/>
                       {errors.name?.type === 'required' &&  <p className="text-red-600">"Nombre requerido!"</p> }
                       {errors.name?.type === 'maxLenghy' &&  <p className="text-red-600">"El nombre es demaciado largo"</p>}

                   </div>

                   <div className=" pt-4">
                       
                       <label className="block mb-2 text-lg font-medium" name="contra" id="contra">Fecha nacimiento</label>  
                       
                       <input type="date"
                       className="block w-full h-9 pl-2 placeholder:pl-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
                       placeholder="**********************" {...register("contra", {required: true, maxLength: 30})}/>
                       {errors.name?.type === 'required' &&  <p className="text-red-600">"Contraseña requerida!"</p> }
                       {errors.name?.type === 'maxLenghy' &&  <p className="text-red-600">"La contraseña es demaciado largo"</p>}

                   </div>

                   <div className="pt-4">
                       
                       <label className="block mb-2 text-lg  font-medium text-gray-900" name="nombre" id="nombre">Telefono</label>  
                       
                       <input type="number" 
                       className="block w-full h-9 pl-2 placeholder:pl-2  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
                       placeholder="939798889" {...register("telefono", {required: true, maxLength: 9, minLength:9})}/>
                       {errors.name?.type === 'required' &&  <p className="text-red-600">"Telefono requerido!"</p> }
                       {errors.name?.type === 'maxLenghy' &&  <p className="text-red-600">"El numero es demaciado largo"</p>}
                       {errors.name?.type === 'minLenghy' &&  <p className="text-red-600">"El numero es demaciado largo"</p>}

                   </div>

                   <div className="pt-4">
                       
                       <label className="block mb-2 text-lg  font-medium text-gray-900" name="nombre" id="nombre">Email</label>  
                       
                       <input type="text" 
                       className="block w-full h-9 pl-2 placeholder:pl-2  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
                       placeholder="Usuario@gmail.com" {...register("email", {required: true, maxLength: 30})}/>
                       {errors.name?.type === 'required' &&  <p className="text-red-600">"Email requerido!"</p> }
                       {errors.name?.type === 'maxLenghy' &&  <p className="text-red-600">"El email es demaciado largo"</p>}

                   </div>


                   <div className="pt-4">
                       
                       <label className="block mb-2 text-lg  font-medium text-gray-900" name="contra" id="contra">Contraseña</label>  
                       
                       <input type="password" 
                       className="block w-full h-9 pl-2 placeholder:pl-2  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
                       placeholder="" {...register("contra", {required: true, maxLength: 30})}/>
                       {errors.name?.type === 'required' &&  <p className="text-red-600">"Contraseña requerido!"</p> }
                       {errors.name?.type === 'maxLenghy' &&  <p className="text-red-600">"La contraseña es demaciado larga"</p>}

                   </div>

                   <div className="flex items-center pt-4">
                   
                       <input type="checkbox" {...register("politica")} />
                       <label className="block pl-6 text-lg  font-medium text-gray-900" name="politica" id="politica">Acepto politicas y condiciones</label>                       
                    
                    </div> 

                    <div className="flex items-center pt-4">
                   
                        <input type="checkbox"  {...register("tutor")} onClick={ver()} />
                        <label className="block pl-6 text-lg  font-medium text-gray-900" name="tutor" id="tutor">Cuenta manejada por tutor</label>                       
                        
                    </div>                     
                    
                    {tutor && (                    
                        <>
                        <div className="pt-4">
                       
                        <label className="block mb-2 text-lg  font-medium text-gray-900" name="nomtutor" id="nomtutor">Nombre tutor</label>  
                       
                        <input type="text" 
                        className="block w-full h-9 pl-2 placeholder:pl-2  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
                        placeholder="Nombre" {...register("nomtutor", { maxLength: 30})}/>
                        {errors.name?.type === 'maxLenghy' &&  <p className="text-red-600">"El nombre es demaciado largo"</p>}

                        </div> 

                        <div className="pt-4">
                       
                        <label className="block mb-2 text-lg  font-medium text-gray-900" name="parentesco" id="parentesco">Parentesco</label>  
                       
                        <input type="text" 
                        className="block w-full h-9 pl-2 placeholder:pl-2  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
                        placeholder="Padre, Madre, tutor legal" {...register("parentesco", { maxLength: 30})}/>
                        {errors.name?.type === 'maxLenghy' &&  <p className="text-red-600">"El parentesco es demaciado largo"</p>}

                        </div>

                        </>
                    )}
   
                   
                  

            

                   <div className="flex justify-center pb-10 pt-6">
                   <button className="flex w-60 justify-center mt-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                    type="submit">Registrar
                   </button>

                    

                   </div>

           </form>        
        </div>
    )
}

export default Registro