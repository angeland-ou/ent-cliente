import { cargarProductos } from './data.js';
import { renderizarCatalogo } from './catalogo.js';
import { iniciarUI } from './ui.js';

document.addEventListener("DOMContentLoaded", () => {
    cargarProductos(renderizarCatalogo);
    iniciarUI();
});
