

function Info (){

    return (
        <>
        <div className=" flex flex-row flex-wrap pt-16 px-16 justify-around h-auto">

            <div className="w-auto pc:max-w-96 mb-12 iphone12:max-w-3xl px-6"> 
            
                <h1 className="font-bold text-3xl">Diabetes mellitus</h1>
                <p className="pt-8 pc:text-xl iphone12:text-sm"> 
                ° Afección crónica que se presenta comúnmente en la infancia / adolescencia <br /><br /> 
                ° El cuerpo (páncreas) no puede producir insulina -- Hormona necesaria para procesar  la glucosa <br /><br />
                ° El sistema inmunológico ataca por error las células del páncreas que producen insulina.

                </p>
                
            
            </div>

            <div className="w-auto pc:max-w-96 mb-12 iphone12:max-w-3xl  px-6">
                <h1 className="font-bold text-3xl">Complicaciones</h1>
                <p className="pt-8 pc:text-xl iphone12:text-sm"> 
                En la enfermedad renal crónica incrementan los niveles de urea en la sangre, 
                lo cual puede llegar a dar un síndrome urémico, una condición grave en la que los desechos se acumulan en elcuerpo. <br /><br />
                El riñón posee un rol fundamental con el equilibrio de las funciones corporales, 
                es por ello en que se puede llevar amuchas complicaciones relacionadas con  sustancias como elsodio,
                potasio, calcio y magnesio.

                </p>
            </div>
            
            <div className="w-auto max-w-3xl mb-12  px-6">
                <h1 className="font-bold text-3xl">Medidas preventivas</h1>
                <img src="https://media.istockphoto.com/id/894875516/es/vector/signo-de-exclamaci%C3%B3n-firme-en-tri%C3%A1ngulo-rojo-icono-de-vector.jpg?s=612x612&w=0&k=20&c=Hnqg59pzo0IOxGqO-YIb8A8TjeMjabx_kqiB-VYtDac="
                className="pc:w-32 pc:h-32 iphone12:w-16 iphone12:h-16 pc:float-right iphone12:float-end pc:m-0 iphone12:m-2" alt="imagen de peligro" />               
                <p className="pt-8 pc:text-xl iphone12:text-sm">
                ° Control estricto de la presión arterial.<br />
                ° Control en la ingesta de sal, proteinas y grasas.<br />
                ° Control en los niveles de glucosa en sangre. <br />
                ° Uso de bicarbonato. <br />
                ° Uso de medicamentos del grupo IECAS/ARA. <br />
                ° Evitar uso innecesario de medicamentos del grupo AINES y adicción a sustancias.
                </p>
                

   

            </div>    

        </div>

        <div className="flex flex-row flex-wrap pt-16 px-16 justify-around h-auto">
            <div className="w-auto pc:max-w-96 mb-12 iphone12:max-w-3xl  px-6">
                <h1 className="font-bold text-3xl">Funciones del riñón</h1>
                <p className="pt-8 pc:text-xl iphone12:text-sm"> 
                ° Elimina lo que no necesitamos de la sangre. <br />
                ° Regula la cantidad de agua y sal en nuestro cuerpo. <br />
                ° Cotrolan la presión arterial. <br />
                ° Mantienen los niveles de glucosa y Ph en su punto justo.
           

                </p>
            </div>

            <div className="w-auto pc:max-w-96 mb-12 iphone12:max-w-3xl px-6">
                <h1 className="font-bold text-3xl">Manifestaciones clínicas</h1>
                <p className="pt-8 pc:text-xl iphone12:text-sm"> 
                ° Sed excesiva. <br />
                ° Ir a orinar frecuentemente. <br />
                ° Hambre extrema. <br />
                ° Pérdida de peso inexplicada <br />
                ° Fatiga <br />
                ° Visión borrosa <br />
                ° Infecciones frecuentes

                </p>
            </div>

            <div className=" pc:w-test iphone12:w-72 max-w-3xl mb-12  px-6">
                
                <h1 className="pc:text-xl text-center">¡Haz un test para obtener recomendaciones personalizadas!</h1>
                
                <div className="flex justify-center">
                    <img src="https://st3.depositphotos.com/1008336/14920/v/450/depositphotos_149205896-stock-illustration-people-relaxing-in-the-park.jpg"  
                    className="h-52 w-96 mt-5 mb-3 object-cover" alt="gente en el park" />
                </div>


                <div className="flex justify-center w-auto">                 
                <button className=" block  w-80 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
                rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> Hacer Test </button>
                </div>

    
            </div>   
        </div>
        </>
    )    

}

export default Info;