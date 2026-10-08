const botonMenu = document.querySelector(".boton-menu");
const menuLateral = document.querySelector(".menu-lateral");

if (botonMenu && menuLateral) {

    botonMenu.addEventListener("click", () => {
        menuLateral.classList.toggle("abierto");
    });

    const enlaces = menuLateral.querySelectorAll(".menu-link");

    enlaces.forEach((enlace) => {

        enlace.addEventListener("click", () => {
            menuLateral.classList.remove("abierto");
        });

    });
}
