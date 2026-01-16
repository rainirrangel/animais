export default function initModal() {
  const modal = document.querySelector('[data-modal="container"]');
  const link = document.querySelector('[data-modal="abrir"]');
  const close = document.querySelector('[data-modal="fechar"]');

  if (modal && link && close) {
    function toggleModal(event) {
      event.preventDefault();
      modal.classList.toggle("ativo");
    }

    function outModal(event) {
      if (event.target === this) toggleModal(event);
    }

    link.addEventListener("click", toggleModal);
    close.addEventListener("click", toggleModal);
    modal.addEventListener("click", outModal);
  }
}
