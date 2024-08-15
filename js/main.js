
const contenedorProductos = document.getElementById('listaProductos');
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const contadorCarrito = document.getElementById("contadorCarrito");

document.addEventListener('DOMContentLoaded', () =>{
    getProducts();
});

const guardadoLocal = () =>{
    localStorage.setItem("compra", JSON.stringify(carrito))
}