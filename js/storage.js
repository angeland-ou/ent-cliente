const CLAVE_CARRITO = "carrito";

export function guardarCarrito(carrito) {
    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
}

export function cargarCarrito() {
    const datos = localStorage.getItem(CLAVE_CARRITO);
    return datos ? JSON.parse(datos) : [];
}

export function borrarCarrito() {
    localStorage.removeItem(CLAVE_CARRITO);
}
