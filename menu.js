
(() => {
    const secciones = [
        { nombre: "Inicio", japones: "ホーム", ruta: "index.html", icono: "🏯" },
        { nombre: "Mapa", japones: "地図", ruta: "mapa/index.html", icono: "🗾" },
        { nombre: "Transporte", japones: "交通", ruta: "transporte/index.html", icono: "🚆" },
        { nombre: "Festivales", japones: "祭り", ruta: "festivales/index.html", icono: "🎆" },
        { nombre: "Conciertos", japones: "ライブ", ruta: "conciertos/index.html", icono: "🎤" },
        { nombre: "Tiendas", japones: "ショップ", ruta: "tiendas/index.html", icono: "🏬" },
        { nombre: "Templos", japones: "寺院", ruta: "templos/index.html", icono: "⛩️" },
        { nombre: "Compras", japones: "買い物", ruta: "compras/index.html", icono: "🛍️" },
        { nombre: "Mercadillos", japones: "蚤の市", ruta: "flea-markets/index.html", icono: "🎏" }
    ];

    const script = document.currentScript;
    const raiz = new URL(".", script.src);
    const rutaActual = window.location.pathname.replace(/\/+$/, "");

    const paginaActual = rutaActual.endsWith("/index.html")
        ? rutaActual.slice(0, -"/index.html".length)
        : rutaActual;

    const estilos = document.createElement("style");

    estilos.textContent = `
        #jst-menu-boton {
            position: fixed;
            top: 22px;
            left: 22px;
            z-index: 10001;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            padding: 0;
            border: 0;
            background: transparent;
            color: #fff;
            font: inherit;
            font-size: 32px;
            line-height: 1;
            cursor: pointer;
            text-shadow: 0 0 10px #ff3cac, 0 0 22px #ff3cac;
            transition: transform .2s ease, color .2s ease;
        }

        #jst-menu-boton:hover {
            color: #ff8bd5;
            transform: scale(1.1);
        }

        #jst-menu-fondo {
            position: fixed;
            inset: 0;
            z-index: 10002;
            background: rgba(0, 0, 0, .62);
            opacity: 0;
            visibility: hidden;
            transition: opacity .25s ease, visibility .25s ease;
        }

        #jst-menu-fondo.abierto {
            opacity: 1;
            visibility: visible;
        }

        #jst-menu-panel {
            position: absolute;
            top: 0;
            left: 0;
            width: min(340px, 86vw);
            height: 100%;
            height: 100dvh;
            box-sizing: border-box;
            overflow-y: auto;
            padding: 28px 28px 36px;
            background: rgba(12, 8, 20, .96);
            border-right: 1px solid rgba(255, 75, 190, .32);
            box-shadow: 12px 0 45px rgba(0, 0, 0, .3);
            transform: translateX(-105%);
            transition: transform .28s ease;
            scrollbar-width: thin;
            scrollbar-color: #a83c8b transparent;
        }

        #jst-menu-fondo.abierto #jst-menu-panel {
            transform: translateX(0);
        }

        #jst-menu-cabecera {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 28px;
        }

        #jst-menu-marca {
            margin: 0;
            color: #fff;
            font-family: "Mochiy Pop One", sans-serif;
            font-size: 20px;
            line-height: 1.6;
            text-shadow: 0 0 12px #ff3cac;
        }

        #jst-menu-subtitulo {
            display: block;
            margin-top: 5px;
            color: #ff9cda;
            font-size: 12px;
            letter-spacing: 2px;
        }

        #jst-menu-cerrar {
            flex-shrink: 0;
            padding: 0 4px;
            border: 0;
            background: transparent;
            color: #fff;
            font-size: 30px;
            cursor: pointer;
            text-shadow: 0 0 10px #ff3cac;
        }

        #jst-menu-enlaces {
            display: flex;
            flex-direction: column;
            gap: 19px;
        }

        #jst-menu-enlaces a {
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 2px 0;
            border: 0;
            background: transparent;
            color: #fff;
            text-decoration: none;
            transition: color .2s ease, transform .2s ease;
        }

        #jst-menu-enlaces a:hover,
        #jst-menu-enlaces a.actual {
            color: #ff83d0;
            transform: translateX(4px);
            text-shadow: 0 0 12px rgba(255, 60, 172, .7);
        }

        #jst-menu-enlaces .jst-icono {
            width: 28px;
            flex-shrink: 0;
            font-size: 21px;
            text-align: center;
        }

        #jst-menu-enlaces .jst-textos {
            display: flex;
            flex-direction: column;
            gap: 3px;
        }

        #jst-menu-enlaces .jst-nombre {
            font-size: 15px;
            font-weight: 700;
        }

        #jst-menu-enlaces .jst-japones {
            color: #c5b5c9;
            font-size: 11px;
            letter-spacing: 1px;
        }

        body.jst-menu-abierto {
            overflow: hidden;
        }

        @media (max-width: 600px) {
            #jst-menu-boton {
                top: 12px;
                left: 12px;
                width: 44px;
                height: 44px;
                font-size: 29px;
            }

            #jst-menu-panel {
                padding: 23px 23px 32px;
            }

            #jst-menu-enlaces {
                gap: 17px;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            #jst-menu-fondo,
            #jst-menu-panel,
            #jst-menu-enlaces a,
            #jst-menu-boton {
                transition: none;
            }
        }
    `;

    document.head.appendChild(estilos);

    const boton = document.createElement("button");
    boton.id = "jst-menu-boton";
    boton.type = "button";
    boton.setAttribute("aria-label", "Abrir menú de navegación");
    boton.setAttribute("aria-controls", "jst-menu-fondo");
    boton.setAttribute("aria-expanded", "false");
    boton.textContent = "☰";

    const fondo = document.createElement("div");
    fondo.id = "jst-menu-fondo";
    fondo.setAttribute("aria-hidden", "true");

    const panel = document.createElement("nav");
    panel.id = "jst-menu-panel";
    panel.setAttribute("aria-label", "Navegación principal");

    const cabecera = document.createElement("div");
    cabecera.id = "jst-menu-cabecera";

    const marca = document.createElement("div");

    const tituloMarca = document.createElement("p");
    tituloMarca.id = "jst-menu-marca";
    tituloMarca.textContent = "JAPAN SICKO TRIP";

    const subtitulo = document.createElement("span");
    subtitulo.id = "jst-menu-subtitulo";
    subtitulo.textContent = "日本旅行ガイド";

    marca.append(tituloMarca, subtitulo);

    const cerrar = document.createElement("button");
    cerrar.id = "jst-menu-cerrar";
    cerrar.type = "button";
    cerrar.setAttribute("aria-label", "Cerrar menú");
    cerrar.textContent = "×";

    cabecera.append(marca, cerrar);

    const enlaces = document.createElement("div");
    enlaces.id = "jst-menu-enlaces";

    secciones.forEach((seccion) => {
        const url = new URL(seccion.ruta, raiz);
        const enlace = document.createElement("a");
        enlace.href = url.href;

        const destino = url.pathname.replace(/\/+$/, "");

        const destinoPagina = destino.endsWith("/index.html")
            ? destino.slice(0, -"/index.html".length)
            : destino;

        const esInicio = seccion.ruta === "index.html";

        const rutaRaiz = raiz.pathname.replace(/\/+$/, "");

        const esActual = esInicio
            ? paginaActual === rutaRaiz ||
              paginaActual === rutaRaiz.replace(/\/index\.html$/, "")
            : paginaActual === destinoPagina;

        if (esActual) {
            enlace.classList.add("actual");
            enlace.setAttribute("aria-current", "page");
        }

        const icono = document.createElement("span");
        icono.className = "jst-icono";
        icono.textContent = seccion.icono;

        const textos = document.createElement("span");
        textos.className = "jst-textos";

        const nombre = document.createElement("span");
        nombre.className = "jst-nombre";
        nombre.textContent = seccion.nombre;

        const japones = document.createElement("span");
        japones.className = "jst-japones";
        japones.textContent = seccion.japones;

        textos.append(nombre, japones);
        enlace.append(icono, textos);
        enlaces.appendChild(enlace);
    });

    panel.append(cabecera, enlaces);
    fondo.appendChild(panel);
    document.body.append(boton, fondo);

    function abrirMenu() {
        fondo.classList.add("abierto");
        document.body.classList.add("jst-menu-abierto");
        fondo.setAttribute("aria-hidden", "false");
        boton.setAttribute("aria-expanded", "true");
        boton.setAttribute("aria-label", "Cerrar menú de navegación");
        boton.textContent = "×";
        cerrar.focus();
    }

    function cerrarMenu() {
        fondo.classList.remove("abierto");
        document.body.classList.remove("jst-menu-abierto");
        fondo.setAttribute("aria-hidden", "true");
        boton.setAttribute("aria-expanded", "false");
        boton.setAttribute("aria-label", "Abrir menú de navegación");
        boton.textContent = "☰";
        boton.focus();
    }

    boton.addEventListener("click", () => {
        if (fondo.classList.contains("abierto")) {
            cerrarMenu();
        } else {
            abrirMenu();
        }
    });

    cerrar.addEventListener("click", cerrarMenu);

    fondo.addEventListener("click", (evento) => {
        if (evento.target === fondo) {
            cerrarMenu();
        }
    });

    enlaces.addEventListener("click", (evento) => {
        if (evento.target.closest("a")) {
            document.body.classList.remove("jst-menu-abierto");
        }
    });

    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape" && fondo.classList.contains("abierto")) {
            cerrarMenu();
        }
    });
})();