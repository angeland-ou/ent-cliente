export function aEur(importe) {
    return `${importe.toFixed(2)} €`; 
};

export function formatoFecha(fecha) {
    const partes = fecha.split('-');

    const dia = partes[2];
    const mes = partes[1];
    const ano = partes[0].slice(2);

    return `${dia} / ${mes} / ${ano}`;
};