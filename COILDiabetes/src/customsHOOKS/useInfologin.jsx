

const usuarioActual = {
    
    "email": null,
    "contrasena": null,
    "tipo": null,
    "nombre": null,
    "fechaNa": null,
    "edad": null,
    "contacto": null,
    "estado": {
        "seguimientos": null,
        "promedio": null,
        "probabilidad": null
    },
    "tutor": {
        "tutornombre": null,
        "parentesco": null
    }


};

function useInfologin (){

    const actualizarUsuario = (usuario) => {
        console.log("resivo " + usuario.email);
        usuarioActual.email = usuario.email;
        usuarioActual.contrasena = usuario.contrasena;
        usuarioActual.tipo = usuario.tipo;
        usuarioActual.nombre = usuario.nombre;
        usuarioActual.fechaNa = usuario.fechaNa;
        usuarioActual.edad = usuario.edad;
        usuarioActual.contacto = usuario.contacto;
        usuarioActual.estado = usuario.estado;
        usuarioActual.tutor.tutornombre = usuario.tutor.tutornombre;
        usuarioActual.tutor.parentesco = usuario.tutor.parentesco;

        console.log("update:" + usuarioActual.email);
    };

    return { actualizarUsuario, usuarioActual };    

}

export default useInfologin;