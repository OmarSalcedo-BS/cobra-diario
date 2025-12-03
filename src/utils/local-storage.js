export function guardarEnLocalStorage(llave, valor) {
  localStorage.setItem(llave, JSON.stringify(valor));
}

export function obtenerDeLocalStorage(llave) {
  return JSON.parse(localStorage.getItem(llave));
}

export function eliminarDeLocalStorage(llave) {
  localStorage.removeItem(llave);
}
