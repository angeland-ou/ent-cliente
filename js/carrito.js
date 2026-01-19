import { productos } from './data.js';
import { aEur } from './utils.js';
import { abrirCarrito } from './ui.js';
import { guardarCarrito, cargarCarrito, borrarCarrito } from './storage.js';

const buscarProducto = idProducto =>
    productos.find(producto => producto.id === idProducto);

let carrito = cargarCarrito() || [];
renderizarCarrito(carrito);

document.querySelector("#vaciar-carrito").addEventListener("click", vaciarCarrito);

function obtenerLinea(idProducto) {
    return carrito.find(item => item.id === idProducto);
}

function recalcularSubtotal(linea, precio) {
    linea.subtotal = +(linea.cantidad * Number(precio));
}

function actualizarCarrito() {
    renderizarCarrito(carrito);
    guardarCarrito(carrito);
}

export function agregar(idProducto) {
    sumarItem(idProducto);
    abrirCarrito();
}

function renderizarCarrito(lineas = []) {
    const ulCarrito = document.querySelector("#listaCarrito");
    const globoUnidades = document.querySelector("#globoUnidades");
    const txtUnidades = document.querySelector("#txtUnidades");
    const txtTotal = document.querySelector("#txtTotal");

    ulCarrito.innerHTML = "";

    let totalUnidades = 0;
    let totalPrecio = 0;

    lineas.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="item-nombre">${item.nombre}</div>
            <div class="item-info">
                <div class="item-precio">${item.cantidad} x ${aEur(item.subtotal)}</div>
                    <div class="item-buttons">
                    <button class="btn-menos" data-id="${item.id}"><img class="menos" src="img/dash-circle.svg" alt="-1"></button>
                    <button class="btn-mas" data-id="${item.id}"><img class="mas" src="img/plus-circle.svg" alt="+1"></button>
                    <button class="btn-eliminar" data-id="${item.id}"><img class="quitar" src="img/x-circle-fill.svg" alt="Quitar"></button>
                </div>
            </div>
        `;
        ulCarrito.appendChild(li);

        totalUnidades += item.cantidad;
        totalPrecio += item.subtotal;
    });

    txtUnidades.textContent = totalUnidades;
    globoUnidades.textContent = totalUnidades;
    txtTotal.textContent = aEur(totalPrecio);
}

function vaciarCarrito() {
    carrito = [];
    borrarCarrito();
    renderizarCarrito();
}

function eliminarLinea(idProducto) {
    carrito = carrito.filter(item => item.id !== idProducto);
    actualizarCarrito();
}

function restarItem(idProducto) {
    const producto = buscarProducto(idProducto);
    if (!producto) return;

    const linea = obtenerLinea(idProducto);
    if (!linea) return;

    if (linea.cantidad > 1) {
        linea.cantidad--;
        recalcularSubtotal(linea, producto.precio);
    } else {
        eliminarLinea(idProducto);
        return;
    }

    actualizarCarrito();
}

function sumarItem(idProducto) {
    const producto = buscarProducto(idProducto);
    if (!producto) return;

    const linea = obtenerLinea(idProducto);

    if (linea) {
        linea.cantidad++;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.titulo,
            cantidad: 1,
            subtotal: 0
        });
    }

    recalcularSubtotal(obtenerLinea(idProducto), producto.precio);
    actualizarCarrito();
}

const listaCarrito = document.querySelector("#listaCarrito");

listaCarrito.addEventListener("click", (event) => {
    const btnEliminar = event.target.closest(".btn-eliminar");
    if (!btnEliminar) return;

    const idProducto = +btnEliminar.dataset.id;
    eliminarLinea(idProducto);
});

listaCarrito.addEventListener("click", (event) => {
    const btnMas = event.target.closest(".btn-mas");
    if (!btnMas) return;

    const idProducto = +btnMas.dataset.id;
    sumarItem(idProducto);
});

listaCarrito.addEventListener("click", (event) => {
    const btnMenos = event.target.closest(".btn-menos");
    if (!btnMenos) return;

    const idProducto = +btnMenos.dataset.id;
    restarItem(idProducto);
});