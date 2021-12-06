import {codigoUnico,campoRequerido, campoRequeridoDescripcion, ValidarNumeros, ValidarURL, ValidarGeneral} from "./helpers.js"
import {Producto} from "./producto.js"

//aqui agrego los eventos a los elementos del formulario
let campoCodigo = document.querySelector("#codigo");
let campoProducto = document.querySelector("#producto");
let campoDescripcion = document.querySelector("#descripcion");
let campoURL = document.querySelector ("#url");
let campoPrecio = document.querySelector("#precio");
let formularioProductos = document.querySelector("#formProductos");
//lista de productos
let listaProductos = [];

campoCodigo.addEventListener("click", function(){codigoUnico(campoCodigo)});
campoProducto.addEventListener("blur", function(){campoRequerido(campoProducto)});
campoDescripcion.addEventListener("blur", ()=>{campoRequeridoDescripcion(campoDescripcion)});
campoURL.addEventListener("blur", ()=>{ValidarURL(campoURL)});
campoPrecio.addEventListener("blur", ()=>{ValidarNumeros(campoPrecio)});
formularioProductos.addEventListener("submit", guardarProducto);


function guardarProducto(e){
    e.preventDefault();
    if(ValidarGeneral(campoProducto,campoDescripcion,campoURL,campoPrecio)){
        //crear producto
        crearProducto();
    }
}

function crearProducto(){
    // crear el objeto producto
    let productoNuevo = new Producto(campoCodigo.value, campoProducto.value, campoDescripcion.value, campoURL.value, campoPrecio.value);
    //guardar el producto nuevo en el arreglo
    listaProductos.push(productoNuevo);
    console.log(listaProductos)
    //limpiar formulario
    limpiarFormulario();
}

function limpiarFormulario(){
    //limpiar los value de todo el formulario 
    formularioProductos.reset();
    //limpiar las clases del formulario
    campoProducto.className = "form-control";
    campoDescripcion.className = "form-control";
    campoURL.className = "form-control";
    campoPrecio.className = "form-control";
}