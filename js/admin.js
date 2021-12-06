// creo la funcion para que cada vez que se cargue la pagina se genere un numero aleatorio unico en el input del codigo
window.onload = main;
function main(){
    campoCodigo.value = Math.floor(Math.random() * 1000);
}

function campoRequerido(input){
    if(input.value.trim().length > 0){
        input.className = "form-control is-valid";
        return true;
    }else{
        input.className = "form-control is-invalid";
        return false;
    }
}
function campoRequeridoDescripcion(input){
    if(input.value.trim().length > 5){
        input.className = "form-control is-valid";
        return true;
    }else{
        input.className = "form-control is-invalid";
        return false;
    }
}

function ValidarNumeros(input){
    let patron = /^[0-9]{1,8}$/;
    if(patron.test(input.value)){
        input.className = "form-control is-valid";
        return true;
    }else{
        input.className = "form-control is-invalid";
        return false;
    }
}

function ValidarURL(input){
    let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/
    if(patron.test(input.value)){
        input.className = "form-control is-valid";
        return true;
    }else{
        input.className = "form-control is-invalid";
        return false;
    }
}

function ValidarGeneral(e){
    e.preventDefault();
    let alerta = document.querySelector("#msjAlerta");
    if(campoRequerido(campoProducto) &&
    campoRequeridoDescripcion(campoDescripcion) && 
    ValidarURL(campoURL) && 
    ValidarNumeros(campoPrecio)){
        console.log("si paso la validacion");
        alerta.className = "alert alert-danger my-3 d-none";
    }else{
        console.log("no paso la validacion")
        alerta.className = "alert alert-danger my-3";
    }
}

//aqui agrego los eventos a los elementos del formulario
let campoCodigo = document.querySelector("#codigo");
let campoProducto = document.querySelector("#producto");
let campoDescripcion = document.querySelector("#descripcion");
let campoURL = document.querySelector ("#url");
let campoPrecio = document.querySelector("#precio");
let formularioProductos = document.querySelector("#formProductos");


campoProducto.addEventListener("blur", function(){campoRequerido(campoProducto)});
campoDescripcion.addEventListener("blur", ()=>{campoRequeridoDescripcion(campoDescripcion)});
campoURL.addEventListener("blur", ()=>{ValidarURL(campoURL)});
campoPrecio.addEventListener("blur", ()=>{ValidarNumeros(campoPrecio)});
formularioProductos.addEventListener("submit", ValidarGeneral);