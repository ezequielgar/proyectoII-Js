export function codigoUnico(input){
    input.value = obtenerCodigo();
}

function obtenerCodigo(){
    let listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || [];
    let codigo = 0;
    if(listaProductos.length > 0){
        codigo = parseInt(listaProductos[listaProductos.length-1].codigo);
    }
    return codigo +1;
}

export function campoRequerido(input){
    if(input.value.trim().length > 0){
        input.className = "form-control is-valid";
        console.log("paso la validacion")
        return true;
    }else{
        input.className = "form-control is-invalid";
        return false;
    }
}

export function ValidarNumeros(input){
    let patron = /^[0-9]{1,8}$/;
    if(patron.test(input.value)){
        input.className = "form-control is-valid";
        return true;
    }else{
        input.className = "form-control is-invalid";
        return false;
    }
}

export function ValidarURL(input){
    let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/
    if(patron.test(input.value)){
        input.className = "form-control is-valid";
        return true;
    }else{
        input.className = "form-control is-invalid";
        return false;
    }
}

export function ValidarGeneral(campoCodigo,campoProducto, campoDescripcion, campoURL, campoPrecio){
    let alerta = document.querySelector("#msjAlerta");
    if(campoRequerido(campoCodigo) && campoRequerido(campoProducto) &&
    campoRequerido(campoDescripcion) && 
    ValidarURL(campoURL) && 
    ValidarNumeros(campoPrecio)){
        console.log("si paso la validacion");
        alerta.className = "alert alert-danger my-3 d-none";
        return true;
    }else{
        console.log("no paso la validacion")
        alerta.className = "alert alert-danger my-3";
        return false;
    }
}

export function ValidarGeneralConsulta(campoNombre,campoEmail, campoConsulta){
   if(campoRequerido(campoNombre) && validarEmail(campoEmail) &&
   campoRequerido(campoConsulta)){
       console.log("si paso la validacion");
       return true;
   }else{
       console.log("no paso la validacion")
       return false;
   }
}
 export function validarEmail(input){
    let patron = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if(patron.test(input.value)){
        input.className = "form-control is-valid";
        return true;
    }else{
        input.className = "form-control is-invalid";
        return false;
    }
 }

