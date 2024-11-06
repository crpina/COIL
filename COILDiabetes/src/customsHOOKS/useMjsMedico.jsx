
const mesjRecomendacion = (
    [
        {
            "fecha":"05-11-2024",
            "desde": "Carlos ",
            "email": "medico@coil.com",
            "para": "carlos 3",
            "email2":"usuario3@coil.com",
            "msj": "Hola, te recomiendo que hagas ejercicio 3 veces a la semana, busca a un nutricionista para que te ayude a llevar una dieta balanceada y no olvides tomar tus medicamentos a tiempo.",

        }
    ]
)

function useMjsMedico ( ) {


    const agregarMensaje = (mensaje) => {
        console.log("se agrego a la lista de mensajes" + mensaje);
        console.log(mensaje);
        mesjRecomendacion.push(mensaje);
        
    }


    return{ mesjRecomendacion, agregarMensaje };

}

export default useMjsMedico;