// creo la funcion para que cada vez que se cargue la pagina se genere un numero aleatorio unico en el input del codigo
window.onload = main;
function main(){
    campoCodigo.value = Math.floor(Math.random() * 100);
}

function campoRequerido(input){
    if(input.value.trim().length > 0){
        input.className = "form-control is-valid";
    }else{
        input.className = "form-control is-invalid";
    }
}
function campoRequeridoDescripcion(input){
    if(input.value.trim().length > 5){
        input.className = "form-control is-valid";
    }else{
        input.className = "form-control is-invalid";
    }
}

function ValidarNumeros(input){
    // crear una expresion regular
    let patron = /^[0-9]{1,8}$/;
    //probar el funcionamiento del patron o expresion regular
    if(patron.test(input.value)){
        //cumple la expresion regular
        input.className = "form-control is-valid";
    }else{
        //si no cumple la expresion regular
        input.className = "form-control is-invalid";
    }
}

function ValidarURL(input){
    let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/
    if(patron.test(input.value)){
        input.className = "form-control is-valid";
    }else{
        input.className = "form-control is-invalid";
    }
}

//aqui agrego los eventos a los elementos del formulario
let campoCodigo = document.querySelector("#codigo");
let campoProducto = document.querySelector("#producto");
let campoDescripcion = document.querySelector("#descripcion");
let campoURL = document.querySelector ("#url");
let campoPrecio = document.querySelector("#precio");


campoProducto.addEventListener("blur", function(){campoRequerido(campoProducto)});
campoDescripcion.addEventListener("blur", ()=>{campoRequeridoDescripcion(campoDescripcion)});
campoURL.addEventListener("blur", ()=>{ValidarURL(campoURL)});
campoPrecio.addEventListener("blur", ()=>{ValidarNumeros(campoPrecio)});