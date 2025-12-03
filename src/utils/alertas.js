import Swal from "sweetalert2";

export function alertaGeneral(title, text, icon) {
  Swal.fire({
    title,
    text,
    icon,
  });
}

export function alertaRedireccion(title, icon, url, redirection) {
  let timerInterval;
  Swal.fire({
    title,
    html: 'Redirigiendo en <b></b> milisegundos.',
    icon,
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
      redirection(url);
    },
  });
}
