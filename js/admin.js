import {campoRequerido, campoRequeridoDescripcion, ValidarNumeros, ValidarURL, ValidarGeneral} from "./helpers.js"

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
formularioProductos.addEventListener("submit", guardarProducto);

function guardarProducto(e){
    e.preventDefault();
    //validar los campos del formulario

    //crear producto
}

function crearProducto(){
    console.log("aqui creo el producto")
}