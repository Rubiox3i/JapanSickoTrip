const artistas = {
    rock: [
        {
            nombre: "BABYMETAL",
            genero: "Kawaii Metal / Heavy Metal",
            descripcion: "Uno de los grupos japoneses de metal más conocidos internacionalmente. Mezclan heavy metal, coreografías e imaginería idol.",
            imagen: "https://www.impericon.com/cdn/shop/articles/20250401_babymetalpress_1_fcba25c1-b719-4326-934c-576b5934b2bf.jpg?v=1768914706&width=1500"
        },
        {
            nombre: "MAXIMUM THE HORMONE",
            genero: "Metal / Hardcore / Punk",
            descripcion: "Una de las bandas más salvajes y particulares de Japón, famosa por sus directos extremadamente intensos y caóticos.",
            imagen: "https://lp.p.pia.jp/shared/materials/56287484-5753-4915-adb6-5f8c6af3a722/origin.jpg"
        },
        {
            nombre: "MAN WITH A MISSION",
            genero: "Rock / Alternative Metal",
            descripcion: "Banda japonesa reconocible por sus cabezas de lobo, con una mezcla de rock, metal, rap y electrónica.",
            imagen: "https://ogre.natalie.mu/media/pp/mwam_wowow02/mwam_wowow02_ogp.jpg?imdensity=1&imwidth=1280"
        },
        {
            nombre: "ASIAN KUNG-FU GENERATION",
            genero: "Alternative Rock / J-Rock",
            descripcion: "Una de las bandas fundamentales del J-Rock moderno, muy conocida también por sus canciones para anime.",
            imagen: "https://ogre.natalie.mu/media/pp/akg08/photo07.jpg?imdensity=1&imwidth=1200"
        },
        {
            nombre: "HANABIE.",
            genero: "Harajuku-Core / Metalcore",
            descripcion: "Grupo femenino que combina metalcore y hardcore con estética japonesa y una energía espectacular en directo.",
            imagen: "https://ogre.natalie.mu/media/news/music/2023/0618/hanabie_art202306.jpg?imdensity=1&impolicy=hq&imwidth=730"
        }
    ],

    jpop: [
        {
            nombre: "YOASOBI",
            genero: "J-Pop / Electropop",
            descripcion: "Dúo formado por Ayase e ikura. Su concepto consiste en convertir historias y novelas en canciones.",
            imagen: "https://yoasobi.store/cdn/shop/files/yoasobi-social-sharing.png?v=1775851443"
        },
        {
            nombre: "Ado",
            genero: "J-Pop / Rock",
            descripcion: "Una de las voces japonesas más populares de la actualidad. Sus actuaciones utilizan una puesta en escena basada en siluetas e iluminación.",
            imagen: "https://contents.oricon.co.jp/upimg/news/2421000/2420495/20251124_212046_p_o_84301544.jpg"
        },
        {
            nombre: "Kenshi Yonezu",
            genero: "J-Pop / Rock / Alternative",
            descripcion: "Cantante, compositor y productor japonés. Antes de triunfar como Kenshi Yonezu también fue conocido como Hachi en Vocaloid.",
            imagen: "https://kgsn-sound.com/wp-content/uploads/2025/03/2023_08_0_600600_LOEWE_0.jpg"
        },
        {
            nombre: "LiSA",
            genero: "J-Pop / Rock / Anison",
            descripcion: "Una de las grandes voces del anime japonés, responsable de numerosos temas conocidos internacionalmente.",
            imagen: "https://www.sma.co.jp/images/15/9ee/0eafb84df6af4c7fe483deed78cd9.jpg"
        },
        {
            nombre: "RADWIMPS",
            genero: "J-Rock / J-Pop",
            descripcion: "Banda especialmente conocida fuera de Japón por sus bandas sonoras para las películas de Makoto Shinkai.",
            imagen: "https://kai-you.net/img_words/844388/0a4458e6b890806337dcaf236fb42535.jpg"
        },
        {
            nombre: "ano",
            genero: "Alternative J-Pop / Rock",
            descripcion: "Artista de estilo alternativo y muy particular, con una personalidad y estética fácilmente reconocibles.",
            imagen: "https://i.daily.jp/gossip/2023/12/13/Images/d_17124974.jpg"
        },
        {
            nombre: "ATARASHII GAKKO!",
            genero: "J-Pop / Dance / Alternative",
            descripcion: "Grupo femenino conocido por sus coreografías, energía y mezcla de pop japonés con influencias alternativas.",
            imagen: "https://renote.net/files/blobs/proxy/eyJfcmFpbHMiOnsiZGF0YSI6ODY2NTUwMSwicHVyIjoiYmxvYl9pZCJ9fQ%3D%3D--63d0de4f11459760d6eaafb9db91b7885ef756a7/f8e0691b9874fce03b45c0635b35ab50.jpg"
        },
        {
            nombre: "Ikimonogakari",
            genero: "J-Pop / Pop Rock",
            descripcion: "Grupo japonés de pop rock con una larga trayectoria y numerosos temas asociados al anime y la cultura japonesa.",
            imagen: "https://skream.jp/news/assets_c/2021/03/ikimonogakari_a-thumb-1200xauto-138833.jpg"
        },
        {
            nombre: "AiNA THE END",
            genero: "Alternative Pop / Rock",
            descripcion: "Cantante con una voz muy característica y antigua integrante de BiSH.",
            imagen: "https://lastfm.freetls.fastly.net/i/u/ar0/a4c18fed3b12a465f5651bd8bfd5c446.jpg"
        },
        {
            nombre: "Yōko Takahashi",
            genero: "J-Pop / Anison",
            descripcion: "Voz legendaria del anime y especialmente conocida por A Cruel Angel's Thesis de Evangelion.",
            imagen: "https://2022.soraon.jp/_src/51774/takahashiyoko_20210617215337397.jpg?v=1679967511303"
        },
        {
            nombre: "KOTOKO",
            genero: "J-Pop / Anison / Electronic",
            descripcion: "Cantante japonesa especialmente vinculada a anime, videojuegos y visual novels.",
            imagen: "https://i.scdn.co/image/ab6761610000e5eb739d8d4fd4cdd48a541a0b2d"
        },
        {
            nombre: "Togenashi Togeari",
            genero: "J-Rock / Anime",
            descripcion: "Banda surgida del anime Girls Band Cry, con una identidad musical y visual muy marcada.",
            imagen: "https://image.fnnews.com/resource/media/image/2024/12/13/202412131121208065_l.jpg"
        },
        {
            nombre: "Goose house",
            genero: "Pop / Acoustic",
            descripcion: "Grupo japonés conocido por sus armonías vocales, versiones y canciones pop de estilo acústico.",
            imagen: "https://lastfm.freetls.fastly.net/i/u/ar0/6d2389f6332d4c3ecc095d206c7fa2c2.jpg"
        },
        {
            nombre: "HoneyWorks feat. CHiCO",
            genero: "J-Pop / Rock / Anime",
            descripcion: "Proyecto musical muy relacionado con anime, historias románticas y personajes.",
            imagen: "https://ro69-bucket.s3.amazonaws.com/uploads/text_image/image/400122/default/resize_image.jpg"
        },
        {
            nombre: "Tao Tsuchiya",
            genero: "J-Pop / Actriz / Cantante",
            descripcion: "Actriz japonesa que también desarrolla una carrera musical y ha participado en distintos proyectos de entretenimiento.",
            imagen: "https://www.billboard-japan.com/scale/news/00000053/53452/800x_image.jpg"
        }
    ],

    idols: [
        {
            nombre: "AKB48",
            genero: "Idol / J-Pop",
            descripcion: "Uno de los grupos idol japoneses más importantes de la historia y referente absoluto del fenómeno idol japonés.",
            imagen: "https://girlsnews.tv/reimage/y2026/m05/w1000/img20260520akb06.jpg"
        },
        {
            nombre: "Houshou Marine",
            genero: "VTuber / Idol",
            descripcion: "Popular VTuber de Hololive conocida por sus canciones, actuaciones y enorme presencia dentro de la cultura VTuber.",
            imagen: "https://prcdn.freetls.fastly.net/release_image/96446/101/96446-101-3d816b49ff02238a2c79313cf9060448-1990x2475.jpg?auto=webp&fit=bounds&format=jpeg&height=1350&quality=85%2C65&width=1950"
        },
        {
            nombre: "Cho Tokimeki♡Sendenbu",
            genero: "Idol / J-Pop",
            descripcion: "Grupo idol femenino conocido por su pop extremadamente pegadizo y sus coreografías llenas de energía.",
            imagen: "https://a.storyblok.com/f/178900/960x640/22d8499d63/cho-tokimeki-sendenbu-artist-photo.jpg/m/filters%3Aquality%2895%29format%28webp%29"
        },
        {
            nombre: "CANDY TUNE",
            genero: "Idol / Kawaii Pop",
            descripcion: "Grupo idol de KAWAII LAB. con una estética colorida y un estilo pop muy marcado.",
            imagen: "https://prcdn.freetls.fastly.net/release_image/17258/690/17258-690-f6d14db422fc4a50736517805aa8d7eb-1280x853.jpg?auto=webp&fit=bounds&format=jpeg&height=1260&width=2400"
        },
        {
            nombre: "Phantom Siita",
            genero: "Idol / Horror / Retro",
            descripcion: "Grupo idol producido por Ado que combina estética retro japonesa con una imagen oscura y teatral.",
            imagen: "https://pbs.twimg.com/media/GWYaEQPaQAAAp-3.jpg"
        },
        {
            nombre: "REIRIE",
            genero: "Idol / Pop",
            descripcion: "Dúo japonés de pop con una estética muy cuidada y una fuerte presencia visual.",
            imagen: "https://pylonport.bandainamcomusiclive.co.jp/user_images/article/album/5/202512251430280.jpg"
        },
        {
            nombre: "AiScReam",
            genero: "Idol / Anime",
            descripcion: "Unidad musical relacionada con Love Live! y formada por personajes de la franquicia.",
            imagen: "https://pylonport.bandainamcomusiclive.co.jp/user_images/article/album/5/202508281822320.jpg"
        },
        {
            nombre: "Hōkago Tea Time",
            genero: "Anime / Banda ficticia",
            descripcion: "La banda ficticia de K-ON!, formada por las protagonistas del anime.",
            imagen: "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/4c/b5/dc/4cb5dc1b-ff8f-f3f6-a38c-4e9170d821b5/mzi.ghthbcgp.jpg/1200x1200bf-60.jpg"
        }
    ],

    vocaloid: [
        {
            nombre: "Hatsune Miku",
            genero: "Vocaloid / Música virtual",
            descripcion: "La cantante virtual más famosa del mundo y uno de los mayores iconos de la cultura Vocaloid japonesa.",
            imagen: "https://japan.videoland.com.tw/images/contents/202603111107290941.jpg"
        },
        {
            nombre: "DECO*27",
            genero: "Vocaloid / J-Pop / Rock",
            descripcion: "Uno de los productores de Vocaloid más importantes, conocido especialmente por sus numerosas canciones con Hatsune Miku.",
            imagen: "https://ogre.natalie.mu/media/pp/decomiku-live/146.jpg?imdensity=1&imwidth=1200"
        }
    ]
};


const categorias = {
    rock: {
        titulo: "🎸 Heavy / Rock"
    },

    jpop: {
        titulo: "🎵 J-Pop"
    },

    idols: {
        titulo: "🎤 Idols"
    },

    vocaloid: {
        titulo: "🤖 Vocaloid"
    }
};


const STORAGE_KEY =
    "japanSickoConciertosFavoritos";


let favoritos = JSON.parse(
    localStorage.getItem(STORAGE_KEY) || "[]"
);


let filtroActual = "todos";


const contenido =
    document.getElementById(
        "contenido-conciertos"
    );


const contador =
    document.getElementById(
        "contador"
    );


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

        favoritos =
            favoritos.filter(
                item => item !== nombre
            );

    } else {

        favoritos.push(nombre);

    }

    guardarFavoritos();

    renderizar();

}


function crearTarjeta(artista, numero) {

    const favorito =
        esFavorito(artista.nombre);


    return `
        <article
            class="artista-card"
            data-artista="${artista.nombre}"
        >

            <div class="artista-imagen">

                <img
                    src="${artista.imagen}"
                    alt="Foto de ${artista.nombre}"
                    loading="lazy"
                    decoding="async"
                    onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=&quot;imagen-fallback&quot;><span>🎵</span><small>Imagen no disponible</small></div>';"
                >

            </div>


            <div class="artista-contenido">

                <div class="artista-numero">
                    #${numero}
                </div>


                <h3>
                    ${artista.nombre}
                </h3>


                <div class="artista-genero">
                    ${artista.genero}
                </div>


                <p>
                    ${artista.descripcion}
                </p>


                <button
                    type="button"
                    class="favorito-btn ${favorito ? "activo" : ""}"
                    data-favorito="${artista.nombre}"
                    aria-pressed="${favorito}"
                >
                    ${
                        favorito
                            ? "⭐ Quiero verlo"
                            : "☆ Quiero verlo"
                    }
                </button>

            </div>

        </article>
    `;
}


function obtenerArtistas() {

    const resultado = [];


    for (
        const [categoria, lista]
        of Object.entries(artistas)
    ) {

        for (const artista of lista) {

            if (filtroActual === "todos") {

                resultado.push({
                    artista,
                    categoria
                });


            } else if (
                filtroActual === categoria
            ) {

                resultado.push({
                    artista,
                    categoria
                });


            } else if (
                filtroActual === "favoritos" &&
                esFavorito(artista.nombre)
            ) {

                resultado.push({
                    artista,
                    categoria
                });

            }

        }

    }


    return resultado;

}


function renderizar() {

    const visibles =
        obtenerArtistas();


    contador.textContent =
        visibles.length === 1
            ? "1 artista"
            : `${visibles.length} artistas en tu lista`;


    if (visibles.length === 0) {

        contenido.innerHTML = `
            <div class="sin-resultados">

                <div>
                    ⭐
                </div>

                <h3>
                    Aún no tienes artistas marcados
                </h3>

                <p>
                    Pulsa «Quiero verlo» en los artistas que quieras ver en Japón.
                </p>

            </div>
        `;


        conectarFavoritos();

        return;
    }


    contenido.innerHTML = "";


    if (filtroActual === "todos") {

        for (
            const [categoriaKey, lista]
            of Object.entries(artistas)
        ) {

            const categoria =
                categorias[categoriaKey];


            const seccion =
                document.createElement(
                    "section"
                );


            seccion.className =
                "categoria-seccion";


            seccion.innerHTML = `
                <div class="categoria-titulo">

                    <h2>
                        ${categoria.titulo}
                    </h2>

                    <span>
                        ${lista.length} artistas
                    </span>

                </div>


                <div class="artistas-grid">

                    ${lista
                        .map(
                            (artista, index) =>
                                crearTarjeta(
                                    artista,
                                    index + 1
                                )
                        )
                        .join("")}

                </div>
            `;


            contenido.appendChild(
                seccion
            );

        }


    } else {

        const lista =
            visibles.map(
                item => item.artista
            );


        const titulo =
            filtroActual === "favoritos"
                ? "⭐ Quiero ver"
                : categorias[filtroActual].titulo;


        const seccion =
            document.createElement(
                "section"
            );


        seccion.className =
            "categoria-seccion";


        seccion.innerHTML = `
            <div class="categoria-titulo">

                <h2>
                    ${titulo}
                </h2>

            </div>


            <div class="artistas-grid">

                ${lista
                    .map(
                        (artista, index) =>
                            crearTarjeta(
                                artista,
                                index + 1
                            )
                    )
                    .join("")}

            </div>
        `;


        contenido.appendChild(
            seccion
        );

    }


    conectarFavoritos();

}


function conectarFavoritos() {

    document
        .querySelectorAll(
            "[data-favorito]"
        )
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
    .querySelectorAll(
        "[data-filtro]"
    )
    .forEach(boton => {

        boton.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        "[data-filtro]"
                    )
                    .forEach(item =>
                        item.classList.remove(
                            "activo"
                        )
                    );


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
