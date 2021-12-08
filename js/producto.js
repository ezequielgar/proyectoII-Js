export class Producto{
    constructor(campoCodigo, campoProducto, campoDescripcion, CampoURL, campoPrecio){
        this.codigo = campoCodigo;
        this.producto = campoProducto;
        this.descripcion = campoDescripcion;
        this.url = CampoURL;
        this.precio = campoPrecio;
    }

    get mostrarCodigo(){
        return this.codigo;
    }
    get mostrarProducto(){
        return this.producto;
    }
    get mostrarDescripcion(){
        return this.descripcion;
    }
    get mostrarURL(){
        return this.url;
    }
    get mostrarPrecio(){
        return this.precio;
    }
  
    set modificarProducto(nuevoProducto){
        this.producto = nuevoProducto;
    }
    set modificarDescripcion(nuevaDescripcion){
        this.descripcion = nuevaDescripcion;
    }
    set modificarURL (nuevaURL){
        this.url = nuevaURL;
    }
    set modificarPrecio(nuevoPrecio){
        this.precio = nuevaPrecio;
    }
}

export class Consulta{
    constructor(campoNombre, campoEmail, campoConsulta){
        this.nombre = campoNombre;
        this.email = campoEmail;
        this.Consulta = campoConsulta;
    }

    get mostrarNombre(){
        return this.nombre;
    }
    get mostrarEmail(){
        return this.email;
    }
    get mostrarConsulta(){
        return this.Consulta;
    }

    set modificarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }
    set modificarEmail(nuevoEmail){
        this.email = nuevoEmail;
    }
    set modificarConsulta(nuevaConsulta){
        this.Consulta = nuevaConsulta;
    }
}