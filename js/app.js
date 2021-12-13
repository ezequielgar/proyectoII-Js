// traer los datos del localStorage
let listaProductos = JSON.parse (localStorage.getItem('listaProductosKey')) || [];
listaProductos.forEach((producto)=>{
    crearCard(producto);
});
function crearCard(producto){
    let grilla = document.getElementById('grillaPrincipal');
    grilla.innerHTML += `<div class="col-sm-12 col-md-4 text-center my-3 ps-5">

    <div class="card" style="width: 18rem;">
        <img src="${producto.url}" class="card-img-top" alt="${producto.producto} ">
        <div class="card-body">
          <h5 class="card-title">${producto.producto} </h5>
          <p class="card-text">${producto.descripcion} </p>
          <p class="card-text">$ ${producto.precio} </p>
          
        </div>
      </div>
</div>`
    

}

function borrarCards(){
  
  grilla.innerHTML = " ";
  console.log("se activa la función borrar cards")
}



function buscarProducto(e) {
e.preventDefault();
console.log("le saco el evento submit por defecto al botón buscar");

borrarCards();

listaProductos.filter((objetoProducto)=>{if(objetoProducto.codigo == idBuscador.value || objetoProducto.producto == idBuscador.value ){
crearCard(objetoProducto);
}})

}





