import {codigoUnico,campoRequerido, ValidarNumeros, ValidarURL, ValidarGeneral} from "./helpers.js"
import {Producto} from "./producto.js"

//aqui agrego los eventos a los elementos del formulario
let campoCodigo = document.querySelector("#codigo");
let campoProducto = document.querySelector("#producto");
let campoDescripcion = document.querySelector("#descripcion");
let campoURL = document.querySelector ("#url");
let campoPrecio = document.querySelector("#precio");
let formularioProductos = document.querySelector("#formProductos");
//lista de productos
let listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || [];
let listaConsulta = [];

campoCodigo.addEventListener("click", function(){codigoUnico(campoCodigo)});
campoCodigo.addEventListener("blur", function(){campoRequerido(campoCodigo)});
campoProducto.addEventListener("blur", function(){campoRequerido(campoProducto)});
campoDescripcion.addEventListener("blur", ()=>{campoRequerido(campoDescripcion)});
campoURL.addEventListener("blur", ()=>{ValidarURL(campoURL)});
campoPrecio.addEventListener("blur", ()=>{ValidarNumeros(campoPrecio)});
formularioProductos.addEventListener("submit", guardarProducto);
//aqui agrego los input de axelcampos


function guardarProducto(e){
    e.preventDefault();
    if(ValidarGeneral(campoCodigo,campoProducto,campoDescripcion,campoURL,campoPrecio)){
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
    //guardar en locolstorage el arreglo listaProductos
    guardarLocalstorage();
    //mostrar mensaje al usuario de que se creo correctamente
    Swal.fire(
        'Muy bien!',
        'Su producto fue creado correctamente!',
        'success'
      )
}

function limpiarFormulario(){
    //limpiar los value de todo el formulario 
    formularioProductos.reset();
    //limpiar las clases del formulario
    campoCodigo.className = "form-control"
    campoProducto.className = "form-control";
    campoDescripcion.className = "form-control";
    campoURL.className = "form-control";
    campoPrecio.className = "form-control";
}

function guardarLocalstorage(){
    localStorage.setItem("listaProductosKey", JSON.stringify(listaProductos));
}