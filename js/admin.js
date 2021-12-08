import {codigoUnico,campoRequerido, ValidarNumeros, ValidarURL, ValidarGeneral} from "./helpers.js"
import {Producto, Consulta} from "./producto.js"

//aqui agrego los eventos a los elementos del formulario
let campoCodigo = document.querySelector("#codigo");
let campoProducto = document.querySelector("#producto");
let campoDescripcion = document.querySelector("#descripcion");
let campoURL = document.querySelector ("#url");
let campoPrecio = document.querySelector("#precio");
let formularioProductos = document.querySelector("#formProductos");
//lista de productos
let listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || [];
let productoExistente = false; //si producto existente es igual a false quiero crear un nuevo producto, caso contrario quiero modificar
let botonNuevo = document.querySelector("#botonNuevo");
let listaConsulta = []; //variable axelcampos

campoCodigo.addEventListener("click", function(){codigoUnico(campoCodigo)});
campoCodigo.addEventListener("blur", function(){campoRequerido(campoCodigo)});
campoProducto.addEventListener("blur", function(){campoRequerido(campoProducto)});
campoDescripcion.addEventListener("blur", ()=>{campoRequerido(campoDescripcion)});
campoURL.addEventListener("blur", ()=>{ValidarURL(campoURL)});
campoPrecio.addEventListener("blur", ()=>{ValidarNumeros(campoPrecio)});
formularioProductos.addEventListener("submit", guardarProducto);
botonNuevo.addEventListener("click",limpiarFormulario);
//aqui agrego los input de axelcampos

//llamar a la funcion carga inicial
cargaInicial();

function guardarProducto(e){
    e.preventDefault();
    if(ValidarGeneral(campoCodigo,campoProducto,campoDescripcion,campoURL,campoPrecio)){
        if(productoExistente == false){
            //caso 1: el usuario quiere crear un producto
            crearProducto();
        }else{
            //caso 2: el usuario quiere editar un producto
            modificarProducto();
        }
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
      //crear fila
      crearFila(productoNuevo);
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
    //limpiar la variable booleana
    productoExistente = false;
}

function guardarLocalstorage(){
    localStorage.setItem("listaProductosKey", JSON.stringify(listaProductos));
}

function crearFila(productoNuevo){
    let tabla = document.querySelector("#tablaProductos");
    tabla.innerHTML += `<tr>
    <th scope="row">${productoNuevo.codigo}</th>
    <td>${productoNuevo.producto}</td>
    <td>${productoNuevo.descripcion}</td>
    <td>${productoNuevo.url}</td>
    <td>${"$" + productoNuevo.precio}</td>
    <td>
    <button type="button" class="btn btn-danger" onclick="prepararEdicionProducto(${productoNuevo.codigo})">Editar</button>
    <button type="button" class="btn btn-warning" onclick="borrarProducto(${productoNuevo.codigo})">Borrar</button>
</td>`;
}

function cargaInicial(){
    // si hay datos en localstorage o listaProductos dibujo las filas
    if(listaProductos.length > 0){
        //dibujar fila
        listaProductos.forEach((itemProducto)=>{crearFila(itemProducto)}) 
    }
}

function borrarTabla(){
    let tabla = document.querySelector("#tablaProductos");
    tabla.innerHTML = "";
}

window.prepararEdicionProducto = function (codigo) {
    //obtener el objeto a modificar
    let productoBuscado = listaProductos.find((itemProducto)=>{return itemProducto.codigo == codigo});
    //mostrar los datos en el formulario
    campoCodigo.value = productoBuscado.codigo;
    campoProducto.value = productoBuscado.producto;
    campoDescripcion.value = productoBuscado.descripcion;
    campoURL.value = productoBuscado.url;
    campoPrecio.value = productoBuscado.precio;
    //aqui modifico la variable booleana que indica que estoy editando
    productoExistente = true; 
}

function modificarProducto(){
    // buscar la posicion de mi producto dentro del arreglo
    let posicionProducto = listaProductos.findIndex((itemProducto)=>{ return itemProducto.codigo == campoCodigo.value});
    // modificar los datos de ese producto dentro del arreglo
    listaProductos[posicionProducto].producto = campoProducto.value; 
    listaProductos[posicionProducto].descripcion = campoDescripcion.value;
    listaProductos[posicionProducto].url = campoURL.value;
    listaProductos[posicionProducto].precio = campoPrecio.value;
    // actualizar datos dentro de localstorage
    guardarLocalstorage();
    //mostrar un cartel al usuario
    Swal.fire(
        'Producto modificado',
        'Su producto fue modificado correctamente!',
        'success'
      )
    //limpiar formulario
    limpiarFormulario();
    // actualizar tabla
    borrarTabla();
    // dibujar fila
    listaProductos.forEach((itemProducto)=>{crearFila(itemProducto)});
}

window.borrarProducto = function(codigo){
    console.log(codigo);
    // borro el producto del arreglo
    let arregloProductoBorrado = listaProductos.filter((itemProducto)=>{return itemProducto.codigo != codigo});
    //actualizo los datos de locastorage
    listaProductos = arregloProductoBorrado;
    guardarLocalstorage();
    // actualizar los datos de la tabla (borrar y volver a dibujar)
    borrarTabla();
    listaProductos.forEach((itemProducto)=>{crearFila(itemProducto)});
      //mostrar un cartel al usuario
      Swal.fire(
        'Producto Eliminado',
        'Su producto fue correctamente eliminado!',
        'success'
      )
}