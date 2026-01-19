import { agregar } from './carrito.js';

export function iniciarUI() {

    const grid = document.querySelector("#grid-sesiones");
    
    if(grid) {
        grid.addEventListener("click", (event) => { 
            const boton = event.target.closest(".btn[data-id]");
            if (!boton) return;
            const idProducto = +boton.dataset.id;
            agregar(idProducto);
        });
    }

    const desplegableCarrito = document.getElementById("carrito");
    const enlaceCart = document.getElementById("cart");

    if (desplegableCarrito && enlaceCart) {
        enlaceCart.addEventListener("click", (event) => {
            event.preventDefault();
            desplegableCarrito.classList.toggle("abierto");
        });
    }
}

export function abrirCarrito() {
    document.getElementById("carrito").classList.add("abierto");
}
