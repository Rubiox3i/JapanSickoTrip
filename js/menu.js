const botonMenu = document.querySelector(".boton-menu");
const menuLateral = document.querySelector(".menu-lateral");


if (botonMenu && menuLateral) {


    /* =========================================
       ABRIR / CERRAR MENÚ
    ========================================== */

    botonMenu.addEventListener("click", () => {

        const abierto =
            menuLateral.classList.toggle("abierto");


        botonMenu.setAttribute(
            "aria-expanded",
            abierto
        );

    });


    /* =========================================
       CERRAR MENÚ AL ELEGIR UNA SECCIÓN
    ========================================== */

    const enlaces =
        menuLateral.querySelectorAll(".menu-link");


    enlaces.forEach((enlace) => {

        enlace.addEventListener("click", () => {

            menuLateral.classList.remove("abierto");

            botonMenu.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


    /* =========================================
       CERRAR MENÚ AL CAMBIAR A PC
    ========================================== */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 700) {

            menuLateral.classList.remove("abierto");

            botonMenu.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

}
