export const productos = [];

export function cargarProductos(callback) {
    fetch('/data/sesiones.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .then(data => {
            productos.push(...data);
            callback();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
