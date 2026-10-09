"use strict";

const templos = [
  { nombre:"Honmyō-ji", japones:"本妙寺", ciudad:"Kumamoto", region:"Kyushu", tipo:"Budista", imprescindible:false, descripcion:"Templo vinculado a Katō Kiyomasa, figura importante de la historia de Kumamoto.", foto:"Honmyoji Temple Jochibyo.jpg" },
  { nombre:"Aso-jinja", japones:"阿蘇神社", ciudad:"Aso, Kumamoto", region:"Kyushu", tipo:"Sintoísta", imprescindible:true, descripcion:"Histórico santuario sintoísta situado en la región del monte Aso.", foto:"Aso Shrine Main Hall.jpg" },
  { nombre:"Katō-jinja", japones:"加藤神社", ciudad:"Kumamoto", region:"Kyushu", tipo:"Sintoísta", imprescindible:false, descripcion:"Santuario dedicado a Katō Kiyomasa, junto al castillo de Kumamoto.", foto:"Kato-jinjya Shrine (Kumamoto) 1.jpg" },
  { nombre:"Yūtoku Inari-jinja", japones:"祐徳稲荷神社", ciudad:"Kashima, Saga", region:"Kyushu", tipo:"Sintoísta", imprescindible:true, descripcion:"Santuario dedicado a Inari, conocido por su arquitectura construida sobre la ladera.", foto:"Yutoku inari Shrine.jpg" },
  { nombre:"Takeo-jinja", japones:"武雄神社", ciudad:"Takeo, Saga", region:"Kyushu", tipo:"Sintoísta", imprescindible:false, descripcion:"Santuario conocido por su antiguo árbol sagrado y su entorno boscoso.", foto:"Takeo Shrine Torii and bridge.jpg" },
  { nombre:"Tōchō-ji", japones:"東長寺", ciudad:"Fukuoka", region:"Kyushu", tipo:"Budista", imprescindible:true, descripcion:"Templo histórico de Fukuoka, conocido por su gran Buda y su pagoda.", foto:"Tochoji Temple, Fukuoka, Japan, November 25, 2025.jpg" },
  { nombre:"Dazaifu Tenmangū", japones:"太宰府天満宮", ciudad:"Dazaifu, Fukuoka", region:"Kyushu", tipo:"Sintoísta", imprescindible:true, descripcion:"Famoso santuario dedicado a Sugawara no Michizane, muy visitado por estudiantes.", foto:"DazaifuTenmangu.jpg" },
  { nombre:"Sumiyoshi Taisha", japones:"住吉大社", ciudad:"Osaka", region:"Kansai", tipo:"Sintoísta", imprescindible:true, descripcion:"Importante santuario de Osaka, conocido por su arquitectura tradicional y su puente arqueado.", foto:"Sumiyoshi Taisha-37.jpg" },
  { nombre:"Namba Yasaka-jinja", japones:"難波八阪神社", ciudad:"Osaka", region:"Kansai", tipo:"Sintoísta", imprescindible:true, descripcion:"Santuario famoso por su enorme escenario con forma de cabeza de león.", foto:"Namba-Yasaka-Shrine-entrance seeing lion head.jpg" },
  { nombre:"Sensō-ji", japones:"浅草寺", ciudad:"Asakusa, Tokio", region:"Kanto", tipo:"Budista", imprescindible:true, descripcion:"Uno de los templos más conocidos de Tokio, con la puerta Kaminarimon y la calle Nakamise.", foto:"Sensoji Temple in Tokyo.jpg" },
  { nombre:"Zōjō-ji", japones:"増上寺", ciudad:"Minato, Tokio", region:"Kanto", tipo:"Budista", imprescindible:true, descripcion:"Templo histórico de Tokio con vistas conocidas de la Tokyo Tower.", foto:"Zojoji Temple (53080632587).jpg" },
  { nombre:"Meiji Jingū", japones:"明治神宮", ciudad:"Shibuya, Tokio", region:"Kanto", tipo:"Sintoísta", imprescindible:true, descripcion:"Santuario rodeado de bosque urbano, cerca de Harajuku y del parque Yoyogi.", foto:"Meiji Jingu Shrine Tokyo Japan.jpg" },
  { nombre:"Hokkaidō Jingū", japones:"北海道神宮", ciudad:"Sapporo", region:"Hokkaido", tipo:"Sintoísta", imprescindible:true, descripcion:"Importante santuario de Hokkaido, rodeado de vegetación y especialmente atractivo en primavera.", foto:"Hokkaido Jingu.JPG" },
  { nombre:"Sapporo Fushimi Inari", japones:"札幌伏見稲荷神社", ciudad:"Sapporo", region:"Hokkaido", tipo:"Sintoísta", imprescindible:true, descripcion:"Santuario conocido por su camino de puertas torii rojas entre los árboles.", foto:"Sapporo Fushimi Inari jinja.jpg" },
  { nombre:"Sapporo Gokoku-jinja", japones:"札幌護國神社", ciudad:"Sapporo", region:"Hokkaido", tipo:"Sintoísta", imprescindible:false, descripcion:"Santuario tranquilo situado junto al parque Nakajima.", foto:"Sapporo Gokoku Shrine.JPG" }
];

const grid = document.getElementById("templos-grid");
const buscador = document.getElementById("buscador");
const contador = document.getElementById("contador");
const sinResultados = document.getElementById("sin-resultados");
const claveFavoritos = "japanSickoTemplosFavoritas";

let regionSeleccionada = "Todas";
let tipoSeleccionado = "Todos";
let soloImprescindibles = false;
let soloFavoritos = false;

function cargarFavoritos() {
  try {
    const valor = JSON.parse(localStorage.getItem(claveFavoritos) || "[]");
    return Array.isArray(valor) ? valor.filter(item => typeof item === "string") : [];
  } catch {
    return [];
  }
}

let favoritos = cargarFavoritos();

function escaparHTML(valor) {
  return String(valor).replace(/[&<>"']/g, caracter => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  })[caracter]);
}

function normalizar(valor) {
  return String(valor).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("es");
}

function urlImagen(archivo) {
  return "https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(archivo) + "?width=640";
}

function urlMapa(templo) {
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(`${templo.nombre} ${templo.ciudad} Japón`);
}

function urlFotos(templo) {
  return "https://commons.wikimedia.org/w/index.php?search=" + encodeURIComponent(`${templo.nombre} ${templo.ciudad}`) + "&title=Special:MediaSearch&type=image";
}

function crearTarjeta(templo) {
  const esFavorito = favoritos.includes(templo.nombre);
  return `
    <article class="templo-card">
      <div class="templo-imagen">
        <img src="${urlImagen(templo.foto)}" alt="${escaparHTML(templo.nombre)} en ${escaparHTML(templo.ciudad)}" loading="lazy" decoding="async" fetchpriority="low">
        <span class="etiqueta-tipo">${escaparHTML(templo.tipo === "Budista" ? "TEMPLO BUDISTA" : "SANTUARIO SINTOÍSTA")}</span>
        <button class="boton-favorito${esFavorito ? " activo" : ""}" type="button" data-favorito="${escaparHTML(templo.nombre)}" aria-pressed="${esFavorito}" aria-label="${esFavorito ? "Quitar de favoritos" : "Añadir a favoritos"}: ${escaparHTML(templo.nombre)}" title="${esFavorito ? "Quitar de favoritos" : "Añadir a favoritos"}">${esFavorito ? "♥" : "♡"}</button>
      </div>
      <div class="templo-info">
        <h3>${escaparHTML(templo.nombre)}</h3>
        <p class="templo-ubicacion">⌖ ${escaparHTML(templo.ciudad)} <span>· ${escaparHTML(templo.region)}</span></p>
        <p class="templo-descripcion">${escaparHTML(templo.descripcion)}</p>
        <div class="etiquetas">
          <span class="etiqueta">${escaparHTML(templo.japones)}</span>
          ${templo.imprescindible ? '<span class="etiqueta imprescindible">★ IMPRESCINDIBLE</span>' : ""}
        </div>
        <div class="templo-acciones">
          <a class="mapa" href="${urlMapa(templo)}" target="_blank" rel="noopener noreferrer">⌖ Ver en Maps</a>
          <a class="fotos" href="${urlFotos(templo)}" target="_blank" rel="noopener noreferrer">▧ Ver fotografías</a>
        </div>
      </div>
    </article>`;
}

function prepararImagenes() {
  grid.querySelectorAll(".templo-imagen img").forEach(imagen => {
    imagen.addEventListener("error", () => {
      const caja = imagen.closest(".templo-imagen");
      if (!caja || caja.dataset.fallback) return;
      caja.dataset.fallback = "true";
      const nombre = imagen.alt.split(" en ")[0];
      imagen.remove();
      const aviso = document.createElement("div");
      aviso.className = "imagen-fallback";
      aviso.innerHTML = `<span class="simbolo" aria-hidden="true">⛩</span><p>Fotografía no disponible</p><a href="${urlFotos({nombre, ciudad:"Japón"})}" target="_blank" rel="noopener noreferrer">Buscar fotos de este lugar</a>`;
      caja.append(aviso);
    }, { once:true });
  });
}

function obtenerResultados() {
  const consulta = normalizar(buscador.value.trim());
  return templos.filter(templo => {
    const texto = normalizar([templo.nombre, templo.japones, templo.ciudad, templo.region, templo.tipo, templo.descripcion].join(" "));
    return textMatches(texto, consulta) &&
      (regionSeleccionada === "Todas" || templo.region === regionSeleccionada) &&
      (tipoSeleccionado === "Todos" || templo.tipo === tipoSeleccionado) &&
      (!soloImprescindibles || templo.imprescindible) &&
      (!soloFavoritos || favoritos.includes(templo.nombre));
  });
}

function textMatches(texto, consulta) {
  return consulta === "" || texto.includes(consulta);
}

function renderizarTemplos() {
  const resultados = obtenerResultados();
  grid.innerHTML = resultados.map(crearTarjeta).join("");
  contador.textContent = `${resultados.length} ${resultados.length === 1 ? "lugar" : "lugares"} en la guía`;
  sinResultados.hidden = resultados.length > 0;
  grid.hidden = resultados.length === 0;
  prepararImagenes();
}

function activarGrupo(contenedor, atributo, valor, asignar) {
  contenedor.addEventListener("click", evento => {
    const boton = evento.target.closest(`[${atributo}]`);
    if (!boton) return;
    asignar(boton.dataset[valor]);
    contenedor.querySelectorAll(`[${atributo}]`).forEach(item => {
      const activo = item === boton;
      item.classList.toggle("activo", activo);
      item.setAttribute("aria-pressed", String(activo));
    });
    renderizarTemplos();
  });
}

activarGrupo(document.getElementById("filtros-region"), "data-region", "region", valor => { regionSeleccionada = valor; });
activarGrupo(document.getElementById("filtros-tipo"), "data-tipo", "tipo", valor => { tipoSeleccionado = valor; });

document.getElementById("solo-imprescindibles").addEventListener("click", evento => {
  soloImprescindibles = !soloImprescindibles;
  evento.currentTarget.classList.toggle("activo", soloImprescindibles);
  evento.currentTarget.setAttribute("aria-pressed", String(soloImprescindibles));
  renderizarTemplos();
});

document.getElementById("solo-favoritos").addEventListener("click", evento => {
  soloFavoritos = !soloFavoritos;
  evento.currentTarget.classList.toggle("activo", soloFavoritos);
  evento.currentTarget.setAttribute("aria-pressed", String(soloFavoritos));
  renderizarTemplos();
});

buscador.addEventListener("input", renderizarTemplos);
grid.addEventListener("click", evento => {
  const boton = evento.target.closest("[data-favorito]");
  if (!boton) return;
  const nombre = boton.dataset.favorito;
  favoritos = favoritos.includes(nombre) ? favoritos.filter(item => item !== nombre) : [...favoritos, nombre];
  try { localStorage.setItem(claveFavoritos, JSON.stringify(favoritos)); } catch { /* La lista sigue activa hasta cerrar la página. */ }
  renderizarTemplos();
});

renderizarTemplos();
