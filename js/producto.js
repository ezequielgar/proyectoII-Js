class Producto{
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