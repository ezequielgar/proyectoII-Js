import {campoRequerido, validarEmail, ValidarGeneralConsulta} from "./helpers.js"
import {Consulta} from "./producto.js";


//variables pagina contacto
let campoNombre = document.querySelector("#campoNombre");
let campoEmail = document.querySelector("#campoEmail");
let campoConsulta = document.querySelector("#campoConsulta");
let formularioPaginaContacto = document.querySelector("#formContacto")

campoNombre.addEventListener("blur", function(){campoRequerido(campoNombre)});
campoEmail.addEventListener("blur",function(){validarEmail(campoEmail)});
campoConsulta.addEventListener("blur", function(){campoRequerido(campoConsulta)});
formularioPaginaContacto.addEventListener("submit", guardarConsulta);

let listaConsulta = JSON.parse(localStorage.getItem("listaConsultaKey")) || [];; //variable axelcampos

function guardarConsulta(e){
    e.preventDefault();
    if(ValidarGeneralConsulta(campoNombre, campoEmail, campoConsulta)){
        crearConsulta();
    }else{
        Swal.fire(
            'Error!',
            'Complete todos los campos correctamente!',
            'error'
          )
    }
}

function crearConsulta(){
    // crear el objeto producto
    let consultaNueva = new Consulta(campoNombre.value, campoEmail.value, campoConsulta.value);
    //guardar el producto nuevo en el arreglo
    listaConsulta.push(consultaNueva);
    console.log(listaConsulta)
    //limpiar formulario
    limpiarFormulario();
    //guardar en locolstorage el arreglo listaProductos
    guardarLocalstorage();
    //mostrar mensaje al usuario de que se creo correctamente
    Swal.fire(
        'Muy bien!',
        'Su consulta fue enviada correctamente!',
        'success'
      )
}

function limpiarFormulario(){
    //limpiar los value de todo el formulario 
    formularioPaginaContacto.reset();
    //limpiar las clases del formulario
    campoNombre.className = "form-control"
    campoEmail.className = "form-control";
    campoConsulta.className = "form-control";
    //limpiar la variable booleana
}

function guardarLocalstorage(){
    localStorage.setItem("listaConsultaKey", JSON.stringify(listaConsulta));
}