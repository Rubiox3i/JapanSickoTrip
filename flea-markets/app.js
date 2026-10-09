const fleaMarkets = [
    {
        nombre: "Oedo Antique Market",
        subtitulo: "Uno de los grandes mercados de antigüedades al aire libre de Japón",
        ciudad: "Tokio",
        zona: "Tokyo International Forum / Marunouchi",
        frecuencia: "Fechas variables, normalmente 2 veces al mes",
        horario: "09:00 – 16:00",
        precioEntrada: "Gratis",
        importancia: "imprescindible",
        importanciaTexto: "Uno de los mercados que más merece la pena planificar durante una visita a Tokio.",
        ganga: "⭐⭐⭐⭐ Buena oportunidad",
        descripcion: "Gran mercado de antigüedades con cientos de vendedores. Es especialmente interesante para objetos japoneses antiguos, vintage, cerámica, textiles, juguetes, decoración y pequeñas rarezas.",
        categorias: ["tokio", "anime", "musica", "gangas"],
        etiquetas: ["🏺 Antigüedades", "👘 Vintage", "🧸 Juguetes", "🎌 Japón antiguo", "🔎 Rarezas"],
        foto: "https://thiswaytojapan.com/wp-content/uploads/2025/01/quirky-tokyo-oedo-antique-market.jpg",
        mapa: "https://www.google.com/maps/search/?api=1&query=Tokyo+International+Forum",
        web: "https://www.antique-market.jp/english/"
    },

    {
        nombre: "Tokyo City Flea Market",
        subtitulo: "Uno de los mejores sitios de Tokio para rebuscar entre cientos de puestos",
        ciudad: "Tokio",
        zona: "Oi Racecourse / Shinagawa",
        frecuencia: "Principalmente fines de semana, según calendario",
        horario: "09:00 – 14:30",
        precioEntrada: "Gratis",
        importancia: "imprescindible",
        importanciaTexto: "Especialmente interesante si quieres encontrar auténticas gangas de segunda mano.",
        ganga: "⭐⭐⭐⭐⭐ Potencial de ganga muy alto",
        descripcion: "Mercadillo enorme con una mezcla muy amplia de ropa, muebles, antigüedades, electrónica, objetos domésticos, juguetes y artículos usados.",
        categorias: ["tokio", "retro", "anime", "musica", "gangas"],
        etiquetas: ["💴 Gangas", "📷 Electrónica", "👕 Vintage", "🏺 Antigüedades", "🧸 Variado"],
        foto: "https://osotoiko.com/wp-content/uploads/2018/11/event_32_02.jpg",
        mapa: "https://www.google.com/maps/search/?api=1&query=Oi+Racecourse+First+Parking+Lot",
        web: "https://trx.jp/"
    },

    {
        nombre: "Heiwajima Antique Fair",
        subtitulo: "Una gran feria cubierta especializada en antigüedades",
        ciudad: "Tokio",
        zona: "Heiwajima / Ota",
        frecuencia: "Varias ediciones al año",
        horario: "10:00 – 17:00",
        precioEntrada: "Gratis",
        importancia: "recomendable",
        importanciaTexto: "Muy interesante si coinciden tus fechas y buscas objetos antiguos y coleccionismo.",
        ganga: "⭐⭐⭐ Variable",
        descripcion: "Feria de antigüedades principalmente cubierta con una selección más especializada. Es interesante para objetos antiguos, decoración, arte y coleccionismo.",
        categorias: ["tokio", "anime"],
        etiquetas: ["🏺 Antigüedades", "🖼️ Arte", "🧸 Coleccionismo", "🏠 Vintage", "☔ Interior"],
        foto: "https://kottouichi.com/images/contents/fes_img02.jpg",
        mapa: "https://www.google.com/maps/search/?api=1&query=Tokyo+Ryutsu+Center+Heiwajima",
        web: "https://kottouichi.com/en.html"
    },

    {
        nombre: "Shinjuku Chuo Park Flea Market",
        subtitulo: "Mercadillo urbano para rebuscar entre objetos de particulares",
        ciudad: "Tokio",
        zona: "Shinjuku Chuo Park",
        frecuencia: "Según calendario del organizador",
        horario: "Variable",
        precioEntrada: "Gratis",
        importancia: "recomendable",
        importanciaTexto: "Interesante si buscas una experiencia de mercadillo más local y menos especializada.",
        ganga: "⭐⭐⭐⭐ Buena oportunidad",
        descripcion: "Mercadillo de segunda mano con ropa, accesorios, objetos domésticos, juguetes y artículos variados. Su mayor atractivo es precisamente no saber qué vas a encontrar.",
        categorias: ["tokio", "gangas", "anime"],
        etiquetas: ["🔎 Rebusca", "💴 Barato", "👕 Ropa", "🧸 Variado", "🏙️ Local"],
        foto: "https://hisandhersphoto.com/Japan/images/japan_flea_market_a.jpg",
        mapa: "https://www.google.com/maps/search/?api=1&query=Shinjuku+Chuo+Park"
    },

    {
        nombre: "Toji Kobo-ichi",
        subtitulo: "El enorme mercado mensual del templo Tō-ji",
        ciudad: "Kioto",
        zona: "Tō-ji Temple",
        frecuencia: "Día 21 de cada mes",
        horario: "Aproximadamente 08:30 – 17:30",
        precioEntrada: "Gratis para el mercado",
        importancia: "imprescindible",
        importanciaTexto: "Uno de los grandes mercados tradicionales de Japón y una parada obligatoria si coincide con tu viaje.",
        ganga: "⭐⭐⭐⭐ Buena oportunidad",
        descripcion: "Un gigantesco mercado alrededor del templo Tō-ji. Hay antigüedades, cerámica, objetos japoneses, ropa vintage, herramientas, decoración, juguetes y muchísimas cosas difíciles de encontrar en tiendas normales.",
        categorias: ["kioto", "anime", "gangas"],
        etiquetas: ["⛩️ Templo", "🏺 Antigüedades", "👘 Kimono", "🧸 Juguetes", "🔎 Rarezas"],
        foto: "https://ja.kyoto.travel/resource/event/9231-3.jpg",
        mapa: "https://www.google.com/maps/search/?api=1&query=Toji+Temple+Kyoto",
        web: "https://ja.kyoto.travel/event/single.php?event_id=9231"
    },

    {
        nombre: "Kitano Tenjin-san",
        subtitulo: "Uno de los mercados de segunda mano más famosos de Kioto",
        ciudad: "Kioto",
        zona: "Kitano Tenmangu Shrine",
        frecuencia: "Día 25 de cada mes",
        horario: "Desde aproximadamente 06:30 hasta el atardecer",
        precioEntrada: "Gratis",
        importancia: "imprescindible",
        importanciaTexto: "Especialmente recomendable para encontrar objetos japoneses tradicionales y segunda mano.",
        ganga: "⭐⭐⭐⭐ Buena oportunidad",
        descripcion: "El mercado ocupa los alrededores del santuario Kitano Tenmangu. Hay antigüedades, kimono, juguetes, herramientas, cerámica, objetos tradicionales, libros, ropa y puestos de comida.",
        categorias: ["kioto", "anime", "gangas", "musica"],
        etiquetas: ["⛩️ Santuario", "👘 Kimono", "🏺 Antigüedades", "🧸 Juguetes", "📚 Libros"],
        foto: "https://www.japan-guide.com/g18/3939_04.jpg",
        mapa: "https://www.google.com/maps/search/?api=1&query=Kitano+Tenmangu+Shrine+Kyoto",
        web: "https://kitanotenmangu.or.jp/en/"
    },

    {
        nombre: "Shitennoji Flea Market",
        subtitulo: "Uno de los grandes mercados mensuales de Osaka",
        ciudad: "Osaka",
        zona: "Shitennoji Temple",
        frecuencia: "Días 21 y 22 de cada mes",
        horario: "Aproximadamente 08:30 – 16:00",
        precioEntrada: "Gratis",
        importancia: "imprescindible",
        importanciaTexto: "Una de las mejores opciones de Osaka para buscar antigüedades y objetos usados.",
        ganga: "⭐⭐⭐⭐⭐ Muy interesante",
        descripcion: "Los terrenos del templo se llenan de cientos de puestos con antigüedades, cerámica, herramientas, objetos domésticos, ropa vintage, juguetes y curiosidades. Es especialmente bueno para rebuscar entre objetos usados.",
        categorias: ["osaka", "retro", "anime", "musica", "gangas"],
        etiquetas: ["🏯 Templo", "💴 Gangas", "👾 Retro", "🧸 Juguetes", "🏺 Antigüedades"],
        foto: "https://images.squarespace-cdn.com/content/65542a541828787a69482097/1720500541696-15VG8I5LGI11CK7KBJXK/DSC06560-2.jpg?content-type=image%2Fjpeg&format=1500w",
        mapa: "https://www.google.com/maps/search/?api=1&query=Shitennoji+Temple+Osaka",
        web: "https://osaka-info.jp/experience/en/osaka/spot/286"
    },

    {
        nombre: "Shimokitazawa Flea Market",
        subtitulo: "Vintage, ropa, objetos y cultura alternativa",
        ciudad: "Tokio",
        zona: "Shimokitazawa",
        frecuencia: "Eventos puntuales según calendario",
        horario: "Variable",
        precioEntrada: "Gratis",
        importancia: "recomendable",
        importanciaTexto: "Muy interesante si además de Japón retro te interesa la ropa vintage y la cultura alternativa.",
        ganga: "⭐⭐⭐⭐ Buena oportunidad",
        descripcion: "Mercadillo con un ambiente mucho más alternativo, donde aparecen ropa vintage, accesorios, cerámica, artesanía y objetos de segunda mano.",
        categorias: ["tokio", "gangas"],
        etiquetas: ["👕 Vintage", "🎨 Alternativo", "🛍️ Ropa", "💎 Accesorios", "🏺 Artesanía"],
        foto: "https://image.vinty.jp/event/b6a4af12-eead-46a1-9dda-2385d33230ce.jpg",
        mapa: "https://www.google.com/maps/search/?api=1&query=Shimokitazawa+Tokyo"
    }
];


const filtros = {
    todos: "🧺 Todos los Flea Markets",
    tokio: "🗼 Tokio",
    kioto: "⛩️ Kioto",
    osaka: "🏯 Osaka",
    retro: "👾 Retro",
    anime: "🎌 Anime / Juguetes",
    musica: "💿 Música",
    gangas: "💴 Potencial de gangas",
    imprescindibles: "⭐ Imprescindibles",
    favoritos: "❤️ Quiero ir"
};


const STORAGE_KEY = "japanSickoFleaMarketsFavoritos";

let favoritos = JSON.parse(
    localStorage.getItem(STORAGE_KEY) || "[]"
);

let filtroActual = "todos";


const contenido = document.getElementById("contenido-flea");
const contador = document.getElementById("contador");


function guardarFavoritos() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(favoritos)
    );

}


function esFavorito(nombre) {

    return favoritos.includes(nombre);

}


function alternarFavorito(nombre) {

    if (esFavorito(nombre)) {

        favoritos = favoritos.filter(
            item => item !== nombre
        );

    } else {

        favoritos.push(nombre);

    }

    guardarFavoritos();
    renderizar();

}


function obtenerMercados() {

    if (filtroActual === "todos") {
        return fleaMarkets;
    }


    if (filtroActual === "favoritos") {

        return fleaMarkets.filter(
            mercado => esFavorito(mercado.nombre)
        );

    }


    if (filtroActual === "imprescindibles") {

        return fleaMarkets.filter(
            mercado =>
                mercado.importancia === "imprescindible"
        );

    }


    return fleaMarkets.filter(
        mercado =>
            mercado.categorias.includes(
                filtroActual
            )
    );

}


function crearTarjeta(mercado, numero) {

    const favorito =
        esFavorito(mercado.nombre);


    return `

        <article class="flea-card">

            <div class="flea-imagen">

                <img
                    src="${mercado.foto}"
                    alt="Foto de ${mercado.nombre}"
                    loading="lazy"
                    decoding="async"
                    onerror="
                        this.style.display='none';
                        this.parentElement.innerHTML =
                        '<div class=&quot;imagen-fallback&quot;><span>🧺</span><small>Foto no disponible</small></div>';
                    "
                >

            </div>


            <div class="flea-contenido">

                <div class="flea-numero">
                    #${numero}
                </div>


                <h3>
                    ${mercado.nombre}
                </h3>


                <div class="flea-subtitulo">
                    ${mercado.subtitulo}
                </div>


                <div class="datos">

                    <div class="dato">

                        <span class="dato-label">
                            📅 Frecuencia
                        </span>

                        <span class="dato-valor">
                            ${mercado.frecuencia}
                        </span>

                    </div>


                    <div class="dato">

                        <span class="dato-label">
                            🕐 Horario
                        </span>

                        <span class="dato-valor">
                            ${mercado.horario}
                        </span>

                    </div>


                    <div class="dato">

                        <span class="dato-label">
                            💴 Entrada
                        </span>

                        <span class="dato-valor">
                            ${mercado.precioEntrada}
                        </span>

                    </div>


                    <div class="dato">

                        <span class="dato-label">
                            📍 Zona
                        </span>

                        <span class="dato-valor">
                            ${mercado.zona}
                        </span>

                    </div>

                </div>


                <p>
                    ${mercado.descripcion}
                </p>


                <div class="etiquetas">

                    ${mercado.etiquetas
                        .map(
                            etiqueta => `
                                <span class="etiqueta">
                                    ${etiqueta}
                                </span>
                            `
                        )
                        .join("")
                    }

                </div>


                <div class="importancia ${mercado.importancia}">

                    <strong>
                        ${
                            mercado.importancia === "imprescindible"
                                ? "⭐ IMPRESCINDIBLE"
                                : "👍 RECOMENDABLE"
                        }
                    </strong>

                    <span>
                        ${mercado.importanciaTexto}
                    </span>

                </div>


                <div class="ganga">

                    <strong>
                        💴 POTENCIAL DE GANGA
                    </strong>

                    <span>
                        ${mercado.ganga}
                    </span>

                </div>


                <div class="ubicacion">

                    📍 ${mercado.ciudad}

                </div>


                <div class="botones">

                    <a
                        class="flea-btn"
                        href="${mercado.mapa}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        🗺️ Ver ubicación
                    </a>


                    ${
                        mercado.web
                            ? `
                                <a
                                    class="flea-btn"
                                    href="${mercado.web}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    🌐 Web
                                </a>
                            `
                            : `
                                <span></span>
                            `
                    }


                    <button
                        type="button"
                        class="flea-btn favorito ${
                            favorito ? "activo" : ""
                        }"
                        data-favorito="${mercado.nombre}"
                        aria-pressed="${favorito}"
                    >

                        ${
                            favorito
                                ? "❤️ Quiero ir"
                                : "☆ Quiero ir"
                        }

                    </button>

                </div>

            </div>

        </article>

    `;
}


function renderizar() {

    const visibles =
        obtenerMercados();


    contador.textContent =
        visibles.length === 1
            ? "1 flea market"
            : `${visibles.length} flea markets`;


    if (visibles.length === 0) {

        contenido.innerHTML = `

            <div class="sin-resultados">

                <div>
                    ❤️
                </div>

                <h3>
                    Aún no tienes flea markets marcados
                </h3>

                <p>
                    Pulsa «Quiero ir» en los mercados que quieras visitar.
                </p>

            </div>

        `;

        conectarFavoritos();

        return;
    }


    contenido.innerHTML = `

        <section class="flea-seccion">

            <div class="seccion-titulo">

                <h2>
                    ${filtros[filtroActual]}
                </h2>

                <span>
                    ${visibles.length}
                    ${
                        visibles.length === 1
                            ? "mercado"
                            : "mercados"
                    }
                </span>

            </div>


            <div class="flea-grid">

                ${visibles
                    .map(
                        (mercado, index) =>
                            crearTarjeta(
                                mercado,
                                index + 1
                            )
                    )
                    .join("")
                }

            </div>

        </section>

    `;


    conectarFavoritos();

}


function conectarFavoritos() {

    document
        .querySelectorAll("[data-favorito]")
        .forEach(boton => {

            boton.addEventListener(
                "click",
                () => {

                    alternarFavorito(
                        boton.dataset.favorito
                    );

                }
            );

        });

}


document
    .querySelectorAll("[data-filtro]")
    .forEach(boton => {

        boton.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll("[data-filtro]")
                    .forEach(item => {

                        item.classList.remove(
                            "activo"
                        );

                    });


                boton.classList.add(
                    "activo"
                );


                filtroActual =
                    boton.dataset.filtro;


                renderizar();

            }
        );

    });


renderizar();
