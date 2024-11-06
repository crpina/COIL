import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useUsuarios2 from '../customsHOOKS/useUsuarios2';
import useInfologin from '../customsHOOKS/useInfologin';


const jsonPreguntas = [
    {
        "pregunta": "¿Cuál es la frecuencia con la que revisa sus niveles de glucosa en sangre?",
        "tipo": "salud",
        "opciones": ["Todos los días", "Varias veces a la semana", "Una vez a la semana", "Menos de una vez a la semana"]
    },
    {
        "pregunta": "¿Con qué frecuencia realiza controles médicos para evaluar su salud en relación con la diabetes (por ejemplo, exámenes de fondo de ojo, chequeos de pies)?",
        "tipo": "salud",
        "opciones": ["Cada tres meses o más", "Dos veces al año", "Una vez al año", "Nunca"]
    },
    {
        "pregunta": "¿Cuál de los siguientes hábitos alimenticios sigue con más frecuencia?",
        "tipo": "alimentacion",
        "opciones": ["Dieta balanceada, alta en frutas y verduras y moderada de proteínas y carbohidratos", "Dieta moderadamente balanceada", "Saltarse comidas regularmente", "Consumo frecuente de alimentos procesados y azucarados"]
    },
    {
        "pregunta": "¿Qué tan seguido sigue sus pautas de medicación?",
        "tipo": "salud",
        "opciones": ["Siempre", "A veces", "Generalmente", "Nunca"]
    },
    {
        "pregunta": "¿Cuántas horas duerme en promedio cada noche?",
        "tipo": "salud",
        "opciones": ["Más de 8 horas", "7-8 horas", "5-6 horas","Menos de 5 horas"]
    },
    {
        "pregunta": "¿Cuál es su nivel de comprensión sobre cómo la insulina afecta sus niveles de glucosa?",
        "tipo": "salud",
        "opciones": ["Alto", "Moderado", "Bajo", "Muy bajo"]
    },
    {
        "pregunta": "¿Qué tan seguido se realiza exámenes generales de orina (EGO)?",
        "tipo": "salud",
        "opciones": ["Siempre", "A veces", "Generalmente", "Nunca"]
    },
    {
        "pregunta": "¿Alguna vez ha perdido el conocimiento debido a sus niveles de glucosa?",
        "tipo": "salud",
        "opciones": ["Más de 5 veces", "3-4 veces", "1-2 veces", "Nunca"]
    },
    {
        "pregunta": "¿Qué tan seguido realiza ejercicio aeróbico?",
        "tipo": "salud",
        "opciones": ["Siempre", "A veces", "Generalmente","Nunca"]
    },
    {
        "pregunta": "¿Cuántos días a la semana consume alimentos con altos niveles de grasa?",
        "tipo": "alimentacion",
        "opciones": ["1", "2-3", "4-5", "6-7"]
    },
    {
        "pregunta": "¿Cuántos familiares de su familia tienen alguna enfermedad renal?",
        "tipo": "salud",
        "opciones": ["Sin antecedentes familiares", "1", "2", "3 o más"]
    },
    {
        "pregunta": "¿Cuántos días a la semana fuma?",
        "tipo": "salud",
        "opciones": ["No fumo", "1-2", "3-5", "6-7"]
    },
    {
        "pregunta": "¿Ha notado que sus pies, tobillos o cara (particularmente alrededor de sus ojos) se hinchen?",
        "tipo": "salud",
        "opciones": ["Si, frecuentemente", "A veces", "Rara vez", "Nunca"]
    },
    {
        "pregunta": "En sus últimas visitas al médico, le han comentado que su presión se encuentra alta?",
        "tipo": "salud",
        "opciones": ["Sí, en las últimas 3 visitas", "Sí, en las últimas 2 visitas", "Sí, en la última visita", "En ninguna"]
    },
    {
        "pregunta": "En su última consulta con un nutriólogo, ¿le mencionaron que necesita mejorar su alimentación?",
        "tipo": "salud",
        "opciones": ["No, nunca", "Sí en la última consulta", "Sí, en las dos últimas consultas", "No voy al nutriólogo"]
    }
];

function Testweb() {
    
    const navigar = useNavigate();
    const { usuarioActual } = useInfologin();
    const { agregarTestResult } = useUsuarios2();
    const { register, handleSubmit, getValues } = useForm();
    
    
    const onSubmit = async () => {
        
        const values = getValues();
        const sum = Object.values(values).reduce((acc, curr) => acc + Number(curr), 0);
        const resultado = sum / 15;
        const resultadoRedondeado = Math.round(resultado);

        const test = {
            "email": usuarioActual.email,
            "calificacion": resultadoRedondeado.toString()
        };
        console.log("elecciones: "+ values)
        console.log("sin round: "+ resultado)
        console.log("redondeado: "+ resultadoRedondeado)
        await agregarTestResult(test);
        
        navigar("/test-individual");
        
    };

    return (
        <>
            <div className='flex items-end justify-end h-10 m-2'>
                <Link to="/infopac" className='pr-6 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'> Volver </Link>
            </div>
            
            <div className='flex justify-center pt-8'>
                <form onSubmit={handleSubmit(onSubmit)} className='max-w-xl'>
                    {jsonPreguntas.map((preguntaObj, index) => (
                        <div key={index} className="pregunta p-6 shadow-md m-5">
                            <h3 className='text-center pc:text-xl iphone12:text-sm'>{preguntaObj.pregunta}</h3>
                            {preguntaObj.opciones.map((opcion, idx) => (
                                <div key={idx}>
                                    <label className='pc:text-xl iphone12:text-sm '>
                                        <input className='mr-2 my-1'
                                            type="radio"
                                            value={idx + 1} 
                                            {...register(`respuesta${index}`, { required: true })} />
                                        {opcion}
                                    </label>
                                </div>
                            ))}
                        </div>
                    ))}
                    
                    <div className='flex justify-center p-8'>
                        <button type="submit" className='w-60 justify-center mt-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Testweb;
