"use strict";

(async function () {

    // ========================================================
    // CONFIGURACIÓN
    // ========================================================

    const CLAVE_SITIOS = "japanSickoMisSitios";

    let misSitios = cargarSitios();

    const marcadoresSitios = {};


    // ========================================================
    // COMPROBAR LEAFLET
    // ========================================================

    if (typeof L === "undefined") {

        console.error("Leaflet no se ha cargado.");

        alert(
            "No se ha podido cargar Leaflet. " +
            "Comprueba que existe la carpeta mapa/leaflet/."
        );

        return;
    }


    // ========================================================
    // CARGAR CSS MAPLIBRE
    // ========================================================

    function cargarCSS(url) {

        return new Promise(function (resolve) {

            const existente =
                document.querySelector(
                    `link[href="${url}"]`
                );

            if (existente) {
                resolve();
                return;
            }

            const link =
                document.createElement("link");

            link.rel = "stylesheet";
            link.href = url;

            link.onload = function () {
                resolve();
            };

            link.onerror = function () {

                console.warn(
                    "No se pudo cargar:",
                    url
                );

                resolve();
            };

            document.head.appendChild(link);
        });
    }


    await cargarCSS(
        "https://cdn.jsdelivr.net/npm/maplibre-gl@6.9.0/dist/maplibre-gl.css"
    );


    // ========================================================
    // CARGAR MAPLIBRE
    // ========================================================

    let maplibreDisponible = false;

    try {

        const maplibregl =
            await import(
                "https://cdn.jsdelivr.net/npm/maplibre-gl@6.9.0/dist/maplibre-gl.mjs"
            );

        window.maplibregl = maplibregl;

        await import(
            "https://cdn.jsdelivr.net/npm/@maplibre/maplibre-gl-leaflet@0.1.4/leaflet-maplibre-gl.js"
        );

        if (
            typeof L.maplibreGL === "function"
        ) {

            maplibreDisponible = true;
        }

    } catch (error) {

        console.warn(
            "MapLibre/Maptoolkit no disponible. " +
            "Se utilizará OpenStreetMap.",
            error
        );

        maplibreDisponible = false;
    }


    // ========================================================
    // CREAR MAPA
    // ========================================================

    const mapa =
        L.map("map").setView(
            [
                36.2048,
                138.2529
            ],
            5
        );


    // ========================================================
    // MAPA NORMAL
    // ========================================================

    let capaMapa;


    if (maplibreDisponible) {

        try {

            capaMapa =
                L.maplibreGL({

                    style:
                        "https://styles.maptoolkit.org/street-en.json",

                    attribution:
                        "<a href='https://www.maptoolkit.com/copyright/' target='_blank' rel='noopener'>© Maptoolkit</a> " +
                        "<a href='https://www.openstreetmap.org/copyright' target='_blank' rel='noopener'>© OpenStreetMap</a>"

                });


            capaMapa.addTo(mapa);

        } catch (error) {

            console.warn(
                "No se pudo crear el mapa Maptoolkit. " +
                "Se utilizará OpenStreetMap.",
                error
            );

            capaMapa =
                L.tileLayer(
                    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                    {
                        maxZoom: 19,

                        attribution:
                            "&copy; OpenStreetMap contributors"
                    }
                ).addTo(mapa);
        }

    } else {

        capaMapa =
            L.tileLayer(
                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                {
                    maxZoom: 19,

                    attribution:
                        "&copy; OpenStreetMap contributors"
                }
            ).addTo(mapa);
    }


    // ========================================================
    // RELIEVE
    // ========================================================

    const capaRelieve =
        L.tileLayer(
            "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
            {
                maxZoom: 17,

                attribution:
                    "Map data © OpenStreetMap contributors, " +
                    "SRTM | Map style © OpenTopoMap"
            }
        );


    // ========================================================
    // SATÉLITE
    // ========================================================

    const capaSatelite =
        L.tileLayer(
            "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
            {
                maxZoom: 19,

                attribution:
                    "Tiles © Esri"
            }
        );


    // ========================================================
    // CARRETERAS
    // ========================================================

    const capaCarreteras =
        L.tileLayer(
            "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}",
            {
                maxZoom: 19,

                attribution:
                    "Esri"
            }
        );


    const capaSateliteCarreteras =
        L.layerGroup([
            capaSatelite,
            capaCarreteras
        ]);


    // ========================================================
    // SELECTOR DE CAPAS
    // ========================================================

    const capasBase = {

        "🗺️ Mapa en inglés":
            capaMapa,

        "⛰️ Relieve":
            capaRelieve,

        "🛰️ Satélite":
            capaSatelite,

        "🌐 Satélite + carreteras":
            capaSateliteCarreteras
    };


    L.control.layers(
        capasBase,
        null,
        {
            position: "topright"
        }
    ).addTo(mapa);


    // ========================================================
    // ELEMENTOS HTML
    // ========================================================

    const buscador =
        document.getElementById(
            "buscador-mapa"
        );

    const resultadosBusqueda =
        document.getElementById(
            "resultados-busqueda"
        );

    const listaSitios =
        document.getElementById(
            "lista-sitios"
        );

    const contadorSitios =
        document.getElementById(
            "contador-sitios"
        );


    if (
        !buscador ||
        !resultadosBusqueda ||
        !listaSitios ||
        !contadorSitios
    ) {

        console.error(
            "Faltan elementos HTML necesarios para el mapa."
        );

        return;
    }


    // ========================================================
    // CATEGORÍAS
    // ========================================================

    const categorias = [

        {
            nombre: "Otros",
            icono: "📍"
        },

        {
            nombre: "Tiendas",
            icono: "🏪"
        },

        {
            nombre: "Templos",
            icono: "⛩️"
        },

        {
            nombre: "Restaurantes",
            icono: "🍜"
        },

        {
            nombre: "Conciertos",
            icono: "🎵"
        },

        {
            nombre: "Festivales",
            icono: "🎎"
        },

        {
            nombre: "Compras",
            icono: "🛍️"
        },

        {
            nombre: "Foto/Video",
            icono: "📷"
        }

    ];


    // ========================================================
    // OBTENER ICONO
    // ========================================================

    function obtenerIconoCategoria(
        categoria
    ) {

        const encontrada =
            categorias.find(
                function (item) {

                    return (
                        item.nombre ===
                        categoria
                    );
                }
            );

        return encontrada
            ? encontrada.icono
            : "📍";
    }


    // ========================================================
    // ESCAPAR HTML
    // ========================================================

    function escaparHTML(
        texto
    ) {

        return String(
            texto ?? ""
        )
            .replace(
                /&/g,
                "&amp;"
            )
            .replace(
                /</g,
                "&lt;"
            )
            .replace(
                />/g,
                "&gt;"
            )
            .replace(
                /"/g,
                "&quot;"
            )
            .replace(
                /'/g,
                "&#039;"
            );
    }


    // ========================================================
    // CARGAR SITIOS
    // ========================================================

    function cargarSitios() {

        try {

            const datos =
                localStorage.getItem(
                    CLAVE_SITIOS
                );

            if (!datos) {
                return [];
            }

            const sitios =
                JSON.parse(datos);

            return Array.isArray(sitios)
                ? sitios
                : [];

        } catch (error) {

            console.error(
                "Error cargando sitios:",
                error
            );

            return [];
        }
    }


    // ========================================================
    // GUARDAR SITIOS
    // ========================================================

    function guardarSitios() {

        localStorage.setItem(
            CLAVE_SITIOS,
            JSON.stringify(
                misSitios
            )
        );
    }


    // ========================================================
    // GENERAR ID
    // ========================================================

    function generarId() {

        return (
            Date.now().toString(36) +
            Math.random()
                .toString(36)
                .substring(2, 9)
        );
    }


    // ========================================================
    // CREAR ICONO DEL MARCADOR
    // ========================================================

    function crearIconoSitio(
        categoria
    ) {

        const emoji =
            obtenerIconoCategoria(
                categoria
            );

        return L.divIcon({

            className:
                "marcador-sitio-personalizado",

            html:
                `<div style="
                    width:25px;
                    height:25px;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    font-size:20px;
                    line-height:25px;
                    cursor:pointer;
                ">${emoji}</div>`,

            iconSize:
                [
                    25,
                    25
                ],

            iconAnchor:
                [
                    12.5,
                    12.5
                ],

            popupAnchor:
                [
                    0,
                    -12.5
                ]
        });
    }


    // ========================================================
    // CREAR MARCADOR
    // ========================================================

    function crearMarcadorSitio(
        sitio
    ) {

        const marcador =
            L.marker(
                [
                    Number(sitio.lat),
                    Number(sitio.lng)
                ],
                {
                    icon:
                        crearIconoSitio(
                            sitio.categoria
                        )
                }
            );


        // Al hacer clic en un spot guardado,
        // se abre directamente el formulario de edición.
        marcador.on(
            "click",
            function (evento) {

                L.DomEvent.stopPropagation(
                    evento
                );

                abrirFormularioEditar(
                    sitio
                );
            }
        );


        marcador.addTo(
            mapa
        );


        marcadoresSitios[
            sitio.id
        ] = marcador;
    }


    // ========================================================
    // MOSTRAR MARCADORES
    // ========================================================

    function mostrarMarcadores() {

        Object.values(
            marcadoresSitios
        ).forEach(
            function (marcador) {

                mapa.removeLayer(
                    marcador
                );
            }
        );


        Object.keys(
            marcadoresSitios
        ).forEach(
            function (id) {

                delete marcadoresSitios[
                    id
                ];
            }
        );


        misSitios.forEach(
            function (sitio) {

                crearMarcadorSitio(
                    sitio
                );
            }
        );
    }


    // ========================================================
    // MOSTRAR LISTA
    // ========================================================

    function mostrarListaSitios() {

        listaSitios.innerHTML = "";


        contadorSitios.textContent =
            misSitios.length === 1
                ? "1 sitio"
                : `${misSitios.length} sitios`;


        if (
            misSitios.length === 0
        ) {

            listaSitios.innerHTML = `
                <p>
                    Todavía no tienes sitios guardados.
                </p>
            `;

            return;
        }


        misSitios.forEach(
            function (sitio) {

                const tarjeta =
                    document.createElement(
                        "div"
                    );


                tarjeta.className =
                    "sitio-card";


                const icono =
                    obtenerIconoCategoria(
                        sitio.categoria
                    );


                tarjeta.innerHTML = `

                    <div class="sitio-card-icono">
                        ${icono}
                    </div>

                    <div class="sitio-card-info">

                        <h3>
                            ${escaparHTML(
                                sitio.nombre
                            )}
                        </h3>

                        <p>
                            ${icono}
                            ${escaparHTML(
                                sitio.categoria
                            )}
                        </p>

                        ${
                            sitio.notas
                                ? `
                                    <p>
                                        ${escaparHTML(
                                            sitio.notas
                                        )}
                                    </p>
                                `
                                : ""
                        }

                    </div>

                    <div class="sitio-card-acciones">

                        <button
                            type="button"
                            data-accion="ver"
                            data-id="${sitio.id}"
                        >
                            👁️ Ver
                        </button>

                        <button
                            type="button"
                            data-accion="editar"
                            data-id="${sitio.id}"
                        >
                            ✏️ Editar
                        </button>

                        <button
                            type="button"
                            data-accion="eliminar"
                            data-id="${sitio.id}"
                        >
                            🗑️ Eliminar
                        </button>

                    </div>
                `;


                listaSitios.appendChild(
                    tarjeta
                );
            }
        );
    }


    // ========================================================
    // CREAR FORMULARIO
    // ========================================================

    function crearFormularioSitio(
        modo,
        sitio = null,
        nombreInicial = ""
    ) {

        const esEdicion =
            modo === "editar";


        const titulo =
            esEdicion
                ? "✏️ Editar ubicación"
                : "📍 Guardar ubicación";


        const textoBoton =
            esEdicion
                ? "💾 Guardar cambios"
                : "💾 Guardar sitio";


        const nombre =
            esEdicion
                ? sitio.nombre
                : nombreInicial;


        const categoriaActual =
            esEdicion
                ? sitio.categoria
                : "Otros";


        const notas =
            esEdicion
                ? sitio.notas || ""
                : "";


        const opcionesCategorias =
            categorias.map(
                function (categoria) {

                    const seleccionada =
                        categoria.nombre ===
                        categoriaActual
                            ? "selected"
                            : "";


                    return `
                        <option
                            value="${escaparHTML(
                                categoria.nombre
                            )}"
                            ${seleccionada}
                        >
                            ${categoria.icono}
                            ${escaparHTML(
                                categoria.nombre
                            )}
                        </option>
                    `;
                }
            ).join("");


        return `
            <div
                class="formulario-sitio"
                style="
                    min-width:260px;
                    max-width:330px;
                "
            >

                <h3
                    style="
                        margin:0 0 14px 0;
                        font-size:18px;
                    "
                >
                    ${titulo}
                </h3>


                <label
                    for="form-nombre-sitio"
                    style="
                        display:block;
                        margin-bottom:5px;
                        font-weight:bold;
                    "
                >
                    Nombre
                </label>

                <input
                    type="text"
                    id="form-nombre-sitio"
                    value="${escaparHTML(
                        nombre
                    )}"
                    placeholder="Nombre del lugar"
                    style="
                        width:100%;
                        box-sizing:border-box;
                        padding:8px;
                        margin-bottom:10px;
                    "
                >


                <label
                    for="form-categoria-sitio"
                    style="
                        display:block;
                        margin-bottom:5px;
                        font-weight:bold;
                    "
                >
                    Categoría
                </label>

                <select
                    id="form-categoria-sitio"
                    style="
                        width:100%;
                        box-sizing:border-box;
                        padding:8px;
                        margin-bottom:10px;
                    "
                >
                    ${opcionesCategorias}
                </select>


                <label
                    for="form-notas-sitio"
                    style="
                        display:block;
                        margin-bottom:5px;
                        font-weight:bold;
                    "
                >
                    Notas
                </label>

                <textarea
                    id="form-notas-sitio"
                    placeholder="Notas, información, horarios..."
                    rows="4"
                    style="
                        width:100%;
                        box-sizing:border-box;
                        padding:8px;
                        resize:vertical;
                        margin-bottom:12px;
                    "
                >${escaparHTML(
                    notas
                )}</textarea>


                <div
                    style="
                        display:flex;
                        gap:8px;
                    "
                >

                    <button
                        type="button"
                        id="form-guardar-sitio"
                        style="
                            flex:1;
                            padding:9px;
                            cursor:pointer;
                        "
                    >
                        ${textoBoton}
                    </button>

                    <button
                        type="button"
                        id="form-cancelar-sitio"
                        style="
                            padding:9px;
                            cursor:pointer;
                        "
                    >
                        Cancelar
                    </button>

                </div>

            </div>
        `;
    }


    // ========================================================
    // CONECTAR BOTONES DEL FORMULARIO
    // ========================================================

    function conectarFormulario(
        popup,
        modo,
        sitio,
        lat,
        lng
    ) {

        setTimeout(
            function () {

                const popupElement =
                    popup.getElement();


                if (
                    !popupElement
                ) {

                    return;
                }


                const campoNombre =
                    popupElement.querySelector(
                        "#form-nombre-sitio"
                    );


                const campoCategoria =
                    popupElement.querySelector(
                        "#form-categoria-sitio"
                    );


                const campoNotas =
                    popupElement.querySelector(
                        "#form-notas-sitio"
                    );


                const botonGuardar =
                    popupElement.querySelector(
                        "#form-guardar-sitio"
                    );


                const botonCancelar =
                    popupElement.querySelector(
                        "#form-cancelar-sitio"
                    );


                if (
                    !campoNombre ||
                    !campoCategoria ||
                    !campoNotas ||
                    !botonGuardar ||
                    !botonCancelar
                ) {

                    console.error(
                        "No se encontraron los elementos del formulario."
                    );

                    return;
                }


                campoNombre.focus();


                // ====================================================
                // EVITAR QUE LOS CLICS DEL FORMULARIO LLEGUEN AL MAPA
                // ====================================================

                L.DomEvent.disableClickPropagation(
                    popupElement
                );

                L.DomEvent.disableScrollPropagation(
                    popupElement
                );


                // ====================================================
                // CANCELAR
                // ====================================================

                L.DomEvent.on(
                    botonCancelar,
                    "click",
                    function (evento) {

                        L.DomEvent.stopPropagation(
                            evento
                        );

                        mapa.closePopup();
                    }
                );


                // ====================================================
                // GUARDAR
                // ====================================================

                L.DomEvent.on(
                    botonGuardar,
                    "click",
                    function (evento) {

                        L.DomEvent.stopPropagation(
                            evento
                        );


                        const nombre =
                            campoNombre.value.trim();


                        const categoria =
                            campoCategoria.value;


                        const notas =
                            campoNotas.value.trim();


                        if (
                            !nombre
                        ) {

                            alert(
                                "Escribe un nombre para el lugar."
                            );

                            campoNombre.focus();

                            return;
                        }


                        // =================================================
                        // NUEVO SITIO
                        // =================================================

                        if (
                            modo === "nuevo"
                        ) {

                            const nuevoSitio = {

                                id:
                                    generarId(),

                                nombre:
                                    nombre,

                                categoria:
                                    categoria,

                                notas:
                                    notas,

                                lat:
                                    Number(lat),

                                lng:
                                    Number(lng)
                            };


                            misSitios.push(
                                nuevoSitio
                            );


                            guardarSitios();

                            mostrarMarcadores();

                            mostrarListaSitios();


                            mapa.closePopup();


                            mapa.setView(
                                [
                                    nuevoSitio.lat,
                                    nuevoSitio.lng
                                ],
                                14
                            );


                            return;
                        }


                        // =================================================
                        // EDITAR SITIO
                        // =================================================

                        if (
                            modo === "editar" &&
                            sitio
                        ) {

                            sitio.nombre =
                                nombre;

                            sitio.categoria =
                                categoria;

                            sitio.notas =
                                notas;


                            guardarSitios();


                            // Actualizar todo el mapa
                            mostrarMarcadores();


                            // Actualizar lista
                            mostrarListaSitios();


                            // CERRAR EL FORMULARIO
                            mapa.closePopup();


                            // Mantener la cámara en el sitio
                            mapa.setView(
                                [
                                    Number(sitio.lat),
                                    Number(sitio.lng)
                                ],
                                14
                            );
                        }

                    }
                );


                // ====================================================
                // CTRL + ENTER
                // ====================================================

                L.DomEvent.on(
                    campoNotas,
                    "keydown",
                    function (evento) {

                        if (
                            evento.ctrlKey &&
                            evento.key === "Enter"
                        ) {

                            L.DomEvent.stopPropagation(
                                evento
                            );

                            botonGuardar.click();
                        }
                    }
                );

            },
            100
        );
    }


    // ========================================================
    // NUEVA UBICACIÓN
    // ========================================================

    function abrirFormularioGuardar(
        lat,
        lng,
        nombreInicial = ""
    ) {

        mapa.closePopup();


        const popup =
            L.popup({
                maxWidth: 360,
                closeOnClick: false
            });


        popup
            .setLatLng(
                [
                    lat,
                    lng
                ]
            )
            .setContent(
                crearFormularioSitio(
                    "nuevo",
                    null,
                    nombreInicial
                )
            )
            .openOn(
                mapa
            );


        conectarFormulario(
            popup,
            "nuevo",
            null,
            lat,
            lng
        );
    }


    // ========================================================
    // EDITAR UBICACIÓN
    // ========================================================

    function abrirFormularioEditar(
        sitio
    ) {

        mapa.closePopup();


        const popup =
            L.popup({
                maxWidth: 360,
                closeOnClick: false
            });


        popup
            .setLatLng(
                [
                    Number(sitio.lat),
                    Number(sitio.lng)
                ]
            )
            .setContent(
                crearFormularioSitio(
                    "editar",
                    sitio
                )
            )
            .openOn(
                mapa
            );


        conectarFormulario(
            popup,
            "editar",
            sitio,
            sitio.lat,
            sitio.lng
        );
    }


    // ========================================================
    // CLICK EN MAPA
    // ========================================================

    mapa.on(
        "click",
        function (evento) {

            abrirFormularioGuardar(
                evento.latlng.lat,
                evento.latlng.lng
            );
        }
    );


    // ========================================================
    // BUSCADOR
    // ========================================================

    let temporizadorBusqueda =
        null;


    function mostrarMensajeBusqueda(
        mensaje
    ) {

        resultadosBusqueda.innerHTML = `
            <div class="resultado-busqueda-mensaje">
                ${mensaje}
            </div>
        `;
    }


    function limpiarBusqueda() {

        resultadosBusqueda.innerHTML =
            "";
    }


    async function buscarLugar(
        texto
    ) {

        const consulta =
            texto.trim();


        if (
            !consulta
        ) {

            limpiarBusqueda();

            return;
        }


        mostrarMensajeBusqueda(
            "🔎 Buscando..."
        );


        try {

            const url =
                "https://nominatim.openstreetmap.org/search?" +
                new URLSearchParams({

                    q:
                        consulta,

                    format:
                        "json",

                    limit:
                        "8",

                    countrycodes:
                        "jp",

                    addressdetails:
                        "1",

                    "accept-language":
                        "es"

                });


            const respuesta =
                await fetch(
                    url
                );


            if (
                !respuesta.ok
            ) {

                throw new Error(
                    "HTTP " +
                    respuesta.status
                );
            }


            const resultados =
                await respuesta.json();


            if (
                !resultados.length
            ) {

                mostrarMensajeBusqueda(
                    "❌ No se encontraron resultados en Japón."
                );

                return;
            }


            resultadosBusqueda.innerHTML =
                "";


            resultados.forEach(
                function (resultado) {

                    const boton =
                        document.createElement(
                            "button"
                        );


                    boton.type =
                        "button";


                    boton.className =
                        "resultado-busqueda";


                    boton.innerHTML = `
                        📍
                        ${escaparHTML(
                            resultado.display_name
                        )}
                    `;


                    boton.addEventListener(
                        "click",
                        function (evento) {

                            evento.stopPropagation();


                            const lat =
                                Number(
                                    resultado.lat
                                );


                            const lng =
                                Number(
                                    resultado.lon
                                );


                            mapa.setView(
                                [
                                    lat,
                                    lng
                                ],
                                16
                            );


                            abrirFormularioGuardar(
                                lat,
                                lng,
                                resultado.name ||
                                resultado.display_name
                            );


                            resultadosBusqueda.innerHTML =
                                "";
                        }
                    );


                    resultadosBusqueda.appendChild(
                        boton
                    );
                }
            );


        } catch (error) {

            console.error(
                "Error buscando lugar:",
                error
            );


            mostrarMensajeBusqueda(
                "⚠️ No se ha podido realizar la búsqueda."
            );
        }
    }


    // ========================================================
    // EVENTOS BUSCADOR
    // ========================================================

    buscador.addEventListener(
        "input",
        function () {

            clearTimeout(
                temporizadorBusqueda
            );


            const texto =
                buscador.value.trim();


            if (
                !texto
            ) {

                limpiarBusqueda();

                return;
            }


            temporizadorBusqueda =
                setTimeout(
                    function () {

                        buscarLugar(
                            texto
                        );

                    },
                    500
                );
        }
    );


    buscador.addEventListener(
        "keydown",
        function (evento) {

            if (
                evento.key === "Enter"
            ) {

                evento.preventDefault();


                clearTimeout(
                    temporizadorBusqueda
                );


                buscarLugar(
                    buscador.value
                );
            }
        }
    );


    // ========================================================
    // BOTONES DE LA LISTA
    // ========================================================

    listaSitios.addEventListener(
        "click",
        function (evento) {

            const boton =
                evento.target.closest(
                    "button[data-accion]"
                );


            if (!boton) {
                return;
            }


            evento.stopPropagation();


            const accion =
                boton.dataset.accion;


            const id =
                boton.dataset.id;


            const sitio =
                misSitios.find(
                    function (elemento) {

                        return String(
                            elemento.id
                        ) === String(
                            id
                        );
                    }
                );


            if (!sitio) {
                return;
            }


            // ------------------------------------------------
            // VER / EDITAR
            // ------------------------------------------------

            if (
                accion === "ver" ||
                accion === "editar"
            ) {

                mapa.setView(
                    [
                        Number(sitio.lat),
                        Number(sitio.lng)
                    ],
                    14
                );


                abrirFormularioEditar(
                    sitio
                );
            }


            // ------------------------------------------------
            // ELIMINAR
            // ------------------------------------------------

            if (
                accion === "eliminar"
            ) {

                eliminarSitio(
                    sitio
                );
            }

        }
    );


    // ========================================================
    // ELIMINAR
    // ========================================================

    function eliminarSitio(
        sitio
    ) {

        const confirmar =
            confirm(
                `¿Eliminar "${sitio.nombre}"?`
            );


        if (
            !confirmar
        ) {

            return;
        }


        misSitios =
            misSitios.filter(
                function (elemento) {

                    return String(
                        elemento.id
                    ) !== String(
                        sitio.id
                    );
                }
            );


        guardarSitios();

        mostrarMarcadores();

        mostrarListaSitios();
    }


    // ========================================================
    // INICIO
    // ========================================================

    mostrarMarcadores();

    mostrarListaSitios();


    console.log(
        "Japan Sicko Trip: mapa iniciado correctamente."
    );

    console.log(
        "Leaflet:",
        L.version
    );

    console.log(
        "Sitios guardados:",
        misSitios.length
    );

    console.log(
        "Maptoolkit en inglés:",
        maplibreDisponible
    );


})();