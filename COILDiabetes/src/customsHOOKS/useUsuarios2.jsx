const usuarios = [
    {
        "email": "usuario@coil.com",
        "contrasena": "a12345",
        "tipo": "paciente",
        "nombre": "Carlos 1",
        "fechaNa": "2015-01-04",
        "edad": "25",
        "contacto": "930787772",
        "estado": {
            "seguimientos": "3",
            "promedio": "1",
            "probabilidad": "baja"
        },
        "tutor": {
            "tutornombre": "no aplica",
            "parentesco": "no aplica"
        },
        "polica": true,
    },
    {
        "email": "usuario2@coil.com",
        "contrasena": "MexicoYChile",
        "tipo": "paciente",
        "nombre": "Carlos 2",
        "fechaNa": "2010-01-04",
        "edad": "25",
        "contacto": "930787771",
        "estado": {
            "seguimientos": "1",
            "promedio": "4",
            "probabilidad": "alta"
        },
        "tutor": {
            "tutornombre": "Carlos Antonio",
            "parentesco": "Padre"
        },
        "polica": true,
    },
    {

        "email": "usuario3@coil.com",
        "contrasena": "tres123",
        "tipo": "paciente",
        "nombre": "Carlos 3",
        "fechaNa": "2015-01-04",
        "edad": "25",
        "contacto": "930787772",
        "estado": {
            "seguimientos": "1",
            "promedio": "3",
            "probabilidad": "media-alta"
        },
        "tutor": {
            "tutornombre": "no aplica",
            "parentesco": "no aplica"
        },
        "polica": true,
    },
    {
        "email": "medico@coil.com",
        "contrasena": "b12345",
        "tipo": "medico",
        "nombre": "carlos",
        "fechaNa": null,
        "edad": "25",
        "contacto": "930787773",
        "estado": {
            "seguimientos": "no aplica",
            "promedio": "no aplica",
            "probabilidad": "no aplica"
        },    
        "tutor": {
            "tutornombre": "no aplica",
            "parentesco": "no aplica"
        },
        "polica": true,
    },    
];

const tests = [
    { 
        "email":  "usuario@coil.com",
        "calificacion": "4",
    },
    { 
        "email":  "usuario@coil.com",
        "calificacion": "1",
    },
    { 
        "email":  "usuario@coil.com",
        "calificacion": "1",
    },
    {
        "email": "usuario2@coil.com",
        "calificacion": "4",

    },
    {
        "email": "usuario3@coil.com",
        "calificacion": "3",
    }         
];

function useUsuarios2() {
    
    const buscarUsuario = (email, contra) => {
        const encontrado = usuarios.find((usuario) => usuario.email === email && usuario.contrasena === contra);  
        if (!encontrado) {
           console.log("Usuario no encontrado");
        } else {
            return encontrado;
        }    
    };

    const agregarUsuario = (usuario) => {
        usuarios.push(usuario);
        const ultimoElemento = usuarios[usuarios.length - 1];
        console.log("Último elemento:", ultimoElemento);
    };

    const agregarTestResult = (test) => {
        tests.push(test);
        const ultimoElemento = tests[tests.length - 1];
        console.log("Último elemento:", ultimoElemento);
    };

    const actualizarestado = async (email) => {
        const usuario = usuarios.find(user => user.email === email);
    
        if (usuario) {
            
            const calificacionesUsuario = tests
                .filter(test => test.email === email)
                .map(test => parseInt(test.calificacion, 10));  
    
           
            const totalCalificaciones = calificacionesUsuario.reduce((acc, curr) => acc + curr, 0);
    

    
           
            const repeticiones = calificacionesUsuario.length;
            usuario.estado.seguimientos = repeticiones.toString();
            
            const nuevoPromedio = Math.round(totalCalificaciones / repeticiones );
            usuario.estado.promedio = nuevoPromedio.toString();
    
            if(nuevoPromedio == 1){
                usuario.estado.probabilidad = "baja";
            } else if(nuevoPromedio == 2){
                usuario.estado.probabilidad = "media-baja";
            } else if(nuevoPromedio == 3){
                usuario.estado.probabilidad = "media-alta";
            } else if(nuevoPromedio == 4){
                usuario.estado.probabilidad = "alta";
            }
    
        } else {
            console.log('Usuario no encontrado');
        }
    };
    
    

    return { agregarTestResult, buscarUsuario, agregarUsuario, actualizarestado, usuarios, tests };
}

export default useUsuarios2;
