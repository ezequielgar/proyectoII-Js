// traer los datos del localStorage
let listaProductos =
  JSON.parse(localStorage.getItem("listaProductosKey")) || [];
listaProductos.forEach((producto) => {
  crearCard(producto);
});

let btnBuscar = document.querySelector("#btnBuscar");
let campoFiltro = document.querySelector("#idBuscador");
btnBuscar.addEventListener("click", filtrar);

function filtrar() {
  const cadena = campoFiltro.value.toLowerCase(); //Value del input texto lo paso a minusculas
  const productos = JSON.parse(localStorage.getItem("listaProductosKey")); //obtengo los productos
  borrarCards(); //borro todas las cards

  const productosMinus = productos.map((el) => {
    //pasar campos descripcion y producto a minusculas
    el.descripcion = el.descripcion.toLowerCase();
    el.producto = el.producto.toLowerCase();
    return el;
  });

  const productosFiltrados = productosMinus.filter((el) => {
    //filtramos los productos que contengan la cadena a buscar
    if (
      el.codigo.includes(cadena) ||
      el.descripcion.includes(cadena) ||
      el.producto.includes(cadena)
    ) {
      return el;
    }
  });
  for (let producto of productosFiltrados) {
    //Agregamos las cards a la pagina
    crearCard(producto);
  }
}

function crearCard(producto) {
  let grilla = document.getElementById("grillaPrincipal");
  grilla.innerHTML += `<div class="col-sm-12 col-md-4 text-center my-3 ps-5">

    <div class="card" style="width: 18rem;">
        <img src="${producto.url}" class="card-img-top" alt="${producto.producto} ">
        <div class="card-body">
          <h5 class="card-title">${producto.producto} </h5>
          <p class="card-text">${producto.descripcion} </p>
          <p class="card-text">$ ${producto.precio} </p>
          
        </div>
      </div>
</div>`;
}

function borrarCards() {
  let grilla = document.getElementById("grillaPrincipal");
  grilla.innerHTML = " ";
  console.log("se activa la función borrar cards");
}
