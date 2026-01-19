import { productos } from './data.js';
import { aEur, formatoFecha } from './utils.js';

export function renderizarCatalogo (){
    const catalogo = document.querySelector("#grid-sesiones");

    if(!catalogo) return;

    for (const p of productos) {
        const item = document.createElement("article");
        item.className = "product";
        item.innerHTML = `
            <div class="info">
                <div class="categoria">${p.categoria}</div>
                <div class="fecha">${formatoFecha(p.fecha)}</div>
            </div>
            <h3>${p.titulo}</h3>
            <p class="descripcion">${p.descripcion}</p>
            <p class="price">${aEur(Number(p.precio))}</p>
            <button class="btn" data-id="${p.id}">Añadir</button>
        `;
        catalogo.appendChild(item);
    }
}
