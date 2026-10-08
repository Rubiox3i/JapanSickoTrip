const zonas = [
    {
        nombre: "Kumamoto",
        emoji: "🏯",
        lat: 32.8031,
        lng: 130.7079,
        region: "Kyushu",
        compra: "Pendiente de decidir",
        notas: "Zona que quiero visitar."
    },
    {
        nombre: "Saga",
        emoji: "⛩️",
        lat: 33.2635,
        lng: 130.3009,
        region: "Kyushu",
        compra: "Pendiente de decidir",
        notas: "Zona que quiero visitar."
    },
    {
        nombre: "Osaka",
        emoji: "🏙️",
        lat: 34.6937,
        lng: 135.5023,
        region: "Kansai",
        compra: "Pendiente de decidir",
        notas: "Zona que quiero visitar."
    },
    {
        nombre: "Tokyo",
        emoji: "🗼",
        lat: 35.6762,
        lng: 139.6503,
        region: "Kanto",
        compra: "Pendiente de decidir",
        notas: "Zona que quiero visitar."
    },
    {
        nombre: "Sapporo",
        emoji: "❄️",
        lat: 43.0618,
        lng: 141.3545,
        region: "Hokkaido",
        compra: "Pendiente de decidir",
        notas: "Zona que quiero visitar."
    }
];


/* CREAR MAPA */

const map = L.map("map");


/* MAPA */

L.tileLayer(
    "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 17,
        attribution:
            "Map data © OpenStreetMap contributors, SRTM | Map style © OpenTopoMap"
    }
).addTo(map);


/* MARCADORES */

const marcadores = {};

zonas.forEach(zona => {

    const marcador = L.marker([zona.lat, zona.lng])
        .addTo(map);

    marcador.bindPopup(`
        <div>
            <div class="popup-titulo">
                ${zona.emoji} ${zona.nombre}
            </div>

            <div class="popup-linea">
                <strong>Región:</strong> ${zona.region}
            </div>

            <div class="popup-compra">
                <strong>🛍️ ¿Comprar algo exclusivo?</strong>
                ${zona.compra}
            </div>

            <div class="popup-linea">
                <strong>📝 Notas:</strong><br>
                ${zona.notas}
            </div>
        </div>
    `);

    marcadores[zona.nombre] = marcador;
});


/* MOSTRAR TODAS LAS ZONAS */

const puntos = zonas.map(zona => [
    zona.lat,
    zona.lng
]);

map.fitBounds(puntos, {
    padding: [40, 40]
});


/* CREAR TARJETAS DE LAS ZONAS */

const listaZonas = document.getElementById("lista-zonas");

zonas.forEach(zona => {

    const tarjeta = document.createElement("div");

    tarjeta.className = "zona-card";

    tarjeta.innerHTML = `
        <h3>${zona.emoji} ${zona.nombre}</h3>
        <p>📍 ${zona.region}</p>
        <p>🛍️ ${zona.compra}</p>
    `;

    tarjeta.addEventListener("click", () => {

        map.setView(
            [zona.lat, zona.lng],
            10,
            {
                animate: true
            }
        );

        marcadores[zona.nombre].openPopup();
    });

    listaZonas.appendChild(tarjeta);
});


/* MENÚ PRINCIPAL */

const botonesMenu = document.querySelectorAll(".menu-item");
const secciones = document.querySelectorAll(".seccion");

botonesMenu.forEach(boton => {

    boton.addEventListener("click", () => {

        const nombreSeccion = boton.dataset.seccion;

        /* QUITAR ACTIVO DE TODOS LOS BOTONES */

        botonesMenu.forEach(item => {
            item.classList.remove("activo");
        });

        /* ACTIVAR BOTÓN PULSADO */

        boton.classList.add("activo");

        /* OCULTAR TODAS LAS SECCIONES */

        secciones.forEach(seccion => {
            seccion.classList.remove("activa");
        });

        /* MOSTRAR LA SECCIÓN SELECCIONADA */

        const seccionSeleccionada = document.getElementById(
            `seccion-${nombreSeccion}`
        );

        if (seccionSeleccionada) {
            seccionSeleccionada.classList.add("activa");
        }

        /* CORREGIR EL TAMAÑO DEL MAPA AL VOLVER A ÉL */

        if (nombreSeccion === "mapa") {

            setTimeout(() => {
                map.invalidateSize();
            }, 100);
        }
    });
});