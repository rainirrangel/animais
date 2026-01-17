import outsideClick from "./clickoutside.js";

export default function initMobileMenu() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["touchstart", "click"];

  if (menuButton) {
    function openMenu(event) {
      event.preventDefault();
      menuList.classList.add("ativo");
      menuButton.classList.add("ativo");
      outsideClick(menuList, eventos, () => {
        menuList.classList.remove("ativo");
        menuButton.classList.remove("ativo");
      });
    }

    eventos.forEach((userEvent) => {
      menuButton.addEventListener(userEvent, openMenu);
    });
  }
}
