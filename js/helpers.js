// creo la funcion para que cada vez que se cargue la pagina se genere un numero aleatorio unico en el input del codigo
// window.onload = main;
// function main(){
//     let campoCodigo = document.querySelector("#codigo");
//     campoCodigo.value = Math.floor(Math.random() * 1000);
// }

export function codigoUnico(input){
    input.value = Math.floor(Math.random() * 1000);
}

export function campoRequerido(input){
    if(input.value.trim().length > 0){
        input.className = "form-control is-valid";
        return true;
    }else{
        input.className = "form-control is-invalid";
        return false;
    }
}

export function campoRequeridoDescripcion(input){
    if(input.value.trim().length > 5){
        input.className = "form-control is-valid";
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

export function ValidarGeneral(campoProducto, campoDescripcion, campoURL, campoPrecio){
    let alerta = document.querySelector("#msjAlerta");
    if(campoRequerido(campoProducto) &&
    campoRequeridoDescripcion(campoDescripcion) && 
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