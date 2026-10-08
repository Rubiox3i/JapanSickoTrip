const productos = [

    // =========================================================
    // ANIME / MANGA
    // =========================================================

    {
        id: "needy-girl-overdose",
        nombre: "NEEDY GIRL OVERDOSE",
        categoria: "🎌 Anime / Manga",
        descripcion: "Figura, juego y cualquier merchandising o accesorio interesante de NEEDY GIRL OVERDOSE.",
        prioridad: 5,
        demanda: 5,
        rareza: 4,
        precio: "💴💴 – 💴💴💴💴",
        precioTexto: "Buscar especialmente segunda mano y ediciones especiales.",
        categorias: ["anime", "coleccionismo", "gangas"],
        etiquetas: ["🎮 Juego", "🧸 Figura", "🎁 Merch", "🔥 Prioridad alta"],
        tiendas: [
            "Lashinbang",
            "K-BOOKS",
            "Mandarake",
            "Animate"
        ],
        ciudad: "Tokio",
        web: "https://ec.needygirl.shop/"
    },

    {
        id: "girls-band-cry",
        nombre: "Girls Band Cry",
        categoria: "🎌 Anime / Manga",
        descripcion: "Camisetas, Blu-ray, DVD, accesorios, acrílicos, badges y cualquier merchandising interesante.",
        prioridad: 5,
        demanda: 5,
        rareza: 4,
        precio: "💴💴 – 💴💴💴",
        precioTexto: "El merchandising de segunda mano puede ser especialmente interesante.",
        categorias: ["anime", "musica", "coleccionismo", "gangas"],
        etiquetas: ["👕 Camisetas", "📀 Blu-ray", "📀 DVD", "🎁 Merch", "🎵 Música"],
        tiendas: [
            "Lashinbang",
            "K-BOOKS",
            "Animate",
            "Mandarake"
        ],
        ciudad: "Tokio / Osaka"
    },

    {
        id: "hatsune-miku-merch",
        nombre: "Hatsune Miku — Merch",
        categoria: "🎌 Anime / Manga",
        descripcion: "Merchandising de Hatsune Miku: figuras, accesorios, artículos de conciertos, Magical Mirai y objetos difíciles de encontrar.",
        prioridad: 5,
        demanda: 5,
        rareza: 4,
        precio: "💴💴 – 💴💴💴💴",
        precioTexto: "Priorizar segunda mano, eventos y merchandising antiguo.",
        categorias: ["anime", "musica", "coleccionismo"],
        etiquetas: ["🤖 Vocaloid", "🎁 Merch", "🎤 Magical Mirai", "🧸 Figuras"],
        tiendas: [
            "Mandarake",
            "Lashinbang",
            "K-BOOKS",
            "Animate"
        ],
        ciudad: "Tokio"
    },

    {
        id: "evangelion-merch",
        nombre: "Evangelion — Merch",
        categoria: "🎌 Anime / Manga",
        descripcion: "Merchandising de Evangelion, especialmente objetos antiguos, exclusivos y piezas difíciles de encontrar.",
        prioridad: 5,
        demanda: 5,
        rareza: 5,
        precio: "💴💴 – 💴💴💴💴💴",
        precioTexto: "Aquí merece especialmente la pena rebuscar en tiendas vintage.",
        categorias: ["anime", "coleccionismo", "gangas"],
        etiquetas: ["🧬 Evangelion", "🏆 Coleccionismo", "📦 Vintage", "🔥 Raro"],
        tiendas: [
            "Mandarake",
            "Lashinbang",
            "K-BOOKS",
            "Surugaya"
        ],
        ciudad: "Tokio"
    },

    {
        id: "evangelion-3-0-plus-1-0",
        nombre: "Evangelion: 3.0+1.0 — Blu-ray",
        categoria: "📼 Formato físico",
        descripcion: "Evangelion: 3.0+1.0 Thrice Upon a Time en Blu-ray, buscando especialmente edición japonesa.",
        prioridad: 5,
        demanda: 4,
        rareza: 3,
        precio: "💴💴",
        precioTexto: "Comparar nuevo y segunda mano.",
        categorias: ["anime", "fisico", "coleccionismo"],
        etiquetas: ["📀 Blu-ray", "🧬 Evangelion", "🇯🇵 Edición japonesa"],
        tiendas: [
            "Book Off",
            "Lashinbang",
            "Surugaya",
            "Mandarake"
        ],
        ciudad: "Tokio"
    },

    {
        id: "kon-merch",
        nombre: "K-ON!",
        categoria: "🎌 Anime / Manga",
        descripcion: "LP, DVD, merchandising y cualquier objeto interesante de K-ON!, especialmente material antiguo.",
        prioridad: 5,
        demanda: 5,
        rareza: 5,
        precio: "💴💴 – 💴💴💴💴",
        precioTexto: "Especial atención a merchandising antiguo y música.",
        categorias: ["anime", "musica", "fisico", "coleccionismo"],
        etiquetas: ["🎸 K-ON!", "💿 LP", "📀 DVD", "🎁 Merch"],
        tiendas: [
            "Mandarake",
            "Lashinbang",
            "Book Off",
            "Surugaya"
        ],
        ciudad: "Tokio"
    },

    {
        id: "marmalade-boy",
        nombre: "Marmalade Boy — TODO",
        categoria: "🎌 Anime / Manga",
        descripcion: "Objetivo abierto: manga, VHS, CDs, figuras, merchandising, libros, revistas y cualquier pieza interesante.",
        prioridad: 5,
        demanda: 3,
        rareza: 5,
        precio: "💴💴 – 💴💴💴💴💴",
        precioTexto: "Una de las mejores candidatas para buscar en tiendas vintage.",
        categorias: ["anime", "fisico", "coleccionismo", "gangas"],
        etiquetas: ["🍊 Vintage", "📼 VHS", "📚 Manga", "🏆 TODO"],
        tiendas: [
            "Mandarake",
            "Lashinbang",
            "Book Off",
            "K-BOOKS"
        ],
        ciudad: "Tokio"
    },

    {
        id: "boticaria",
        nombre: "La boticaria",
        categoria: "🎌 Anime / Manga",
        descripcion: "Manga y merchandising de Kusuriya no Hitorigoto.",
        prioridad: 4,
        demanda: 5,
        rareza: 2,
        precio: "💴",
        precioTexto: "Fácil de encontrar nuevo; buscar segunda mano para ahorrar.",
        categorias: ["anime", "gangas"],
        etiquetas: ["📚 Manga", "🎁 Merch"],
        tiendas: [
            "Book Off",
            "Lashinbang",
            "K-BOOKS",
            "Animate"
        ],
        ciudad: "Tokio / Kioto / Osaka"
    },

    {
        id: "ghost-in-the-shell",
        nombre: "Ghost in the Shell",
        categoria: "🎌 Anime / Manga",
        descripcion: "VHS de Ghost in the Shell y merchandising relacionado con el nuevo anime.",
        prioridad: 5,
        demanda: 4,
        rareza: 5,
        precio: "💴💴 – 💴💴💴💴",
        precioTexto: "El VHS es objetivo de coleccionismo; el merch nuevo dependerá de disponibilidad.",
        categorias: ["anime", "fisico", "coleccionismo", "gangas"],
        etiquetas: ["📼 VHS", "🤖 Cyberpunk", "🎁 Merch", "🏆 Vintage"],
        tiendas: [
            "Mandarake",
            "Book Off",
            "Lashinbang",
            "Surugaya"
        ],
        ciudad: "Tokio"
    },

    {
        id: "ranma",
        nombre: "Ranma ½",
        categoria: "🎌 Anime / Manga",
        descripcion: "Manga, VHS, figuras, merchandising antiguo y cualquier objeto interesante.",
        prioridad: 5,
        demanda: 5,
        rareza: 5,
        precio: "💴💴 – 💴💴💴💴",
        precioTexto: "Excelente objetivo para segunda mano y mercados vintage.",
        categorias: ["anime", "fisico", "coleccionismo", "gangas"],
        etiquetas: ["📚 Manga", "📼 VHS", "🏆 Vintage", "🎁 Merch"],
        tiendas: [
            "Mandarake",
            "Lashinbang",
            "Book Off",
            "K-BOOKS"
        ],
        ciudad: "Tokio"
    },

    {
        id: "frieren",
        nombre: "Frieren",
        categoria: "🎌 Anime / Manga",
        descripcion: "Manga y merchandising de Sousou no Frieren.",
        prioridad: 4,
        demanda: 5,
        rareza: 2,
        precio: "💴 – 💴💴",
        precioTexto: "Muy fácil de encontrar actualmente; comparar nuevo y segunda mano.",
        categorias: ["anime"],
        etiquetas: ["📚 Manga", "🎁 Merch", "🧝 Frieren"],
        tiendas: [
            "Book Off",
            "Lashinbang",
            "K-BOOKS",
            "Animate"
        ],
        ciudad: "Tokio / Kioto / Osaka"
    },

    {
        id: "smoking-behind",
        nombre: "Smoking Behind the Supermarket with You",
        categoria: "🎌 Anime / Manga",
        descripcion: "Figuras, manga y merchandising.",
        prioridad: 4,
        demanda: 4,
        rareza: 3,
        precio: "💴 – 💴💴💴",
        precioTexto: "Buscar manga y merchandising de segunda mano.",
        categorias: ["anime", "coleccionismo"],
        etiquetas: ["📚 Manga", "🧸 Figuras", "🎁 Merch"],
        tiendas: [
            "Book Off",
            "Lashinbang",
            "K-BOOKS"
        ],
        ciudad: "Tokio"
    },

    {
        id: "fragrant-flower",
        nombre: "The Fragrant Flower Blooms with Dignity",
        categoria: "🎌 Anime / Manga",
        descripcion: "Figuras y manga de Kaoru Hana wa Rin to Saku.",
        prioridad: 4,
        demanda: 4,
        rareza: 3,
        precio: "💴 – 💴💴💴",
        precioTexto: "Buscar especialmente figuras y merchandising exclusivo.",
        categorias: ["anime", "coleccionismo"],
        etiquetas: ["📚 Manga", "🧸 Figuras", "🎁 Merch"],
        tiendas: [
            "Animate",
            "K-BOOKS",
            "Lashinbang",
            "Book Off"
        ],
        ciudad: "Tokio"
    },

    {
        id: "chainsaw-man",
        nombre: "Chainsaw Man",
        categoria: "🎌 Anime / Manga",
        descripcion: "Merchandising, accesorios y Blu-ray de la película Reze.",
        prioridad: 5,
        demanda: 5,
        rareza: 3,
        precio: "💴 – 💴💴💴",
        precioTexto: "Mucho merchandising disponible; buscar ediciones especiales.",
        categorias: ["anime", "fisico", "coleccionismo"],
        etiquetas: ["🪚 Chainsaw Man", "🎁 Merch", "📀 Blu-ray", "🎬 Reze"],
        tiendas: [
            "Animate",
            "Lashinbang",
            "K-BOOKS",
            "Mandarake"
        ],
        ciudad: "Tokio"
    },

    {
        id: "dress-up-darling",
        nombre: "My Dress-Up Darling",
        categoria: "🎌 Anime / Manga",
        descripcion: "Merchandising, manga, figuras y accesorios.",
        prioridad: 4,
        demanda: 5,
        rareza: 3,
        precio: "💴 – 💴💴💴",
        precioTexto: "Buscar especialmente figuras y merchandising exclusivo japonés.",
        categorias: ["anime", "coleccionismo"],
        etiquetas: ["📚 Manga", "🧸 Figuras", "🎁 Merch", "👗 Accesorios"],
        tiendas: [
            "K-BOOKS",
            "Lashinbang",
            "Animate",
            "Mandarake"
        ],
        ciudad: "Tokio"
    },

    // =========================================================
    // MÚSICA
    // =========================================================

    {
        id: "miki-matsubara-lp",
        nombre: "Miki Matsubara — LP",
        categoria: "💿 Música",
        descripcion: "Buscar vinilos originales japoneses de Miki Matsubara.",
        prioridad: 5,
        demanda: 5,
        rareza: 4,
        precio: "💴💴 – 💴💴💴💴",
        precioTexto: "Comparar tiendas de segunda mano y vinilos especializados.",
        categorias: ["musica", "fisico", "coleccionismo"],
        etiquetas: ["💿 LP", "🌃 City Pop", "🇯🇵 Japonés", "🏆 Coleccionismo"],
        tiendas: [
            "Disk Union",
            "Book Off",
            "Mandarake",
            "Flea Markets"
        ],
        ciudad: "Tokio"
    },

    {
        id: "shonen-knife-lp",
        nombre: "Shonen Knife — LP",
        categoria: "💿 Música",
        descripcion: "LPs de Shonen Knife, especialmente ediciones japonesas antiguas.",
        prioridad: 4,
        demanda: 4,
        rareza: 4,
        precio: "💴💴 – 💴💴💴",
        precioTexto: "Buscar originales japoneses y primeras ediciones.",
        categorias: ["musica", "fisico", "coleccionismo"],
        etiquetas: ["💿 LP", "🎸 Rock", "🇯🇵 Japón"],
        tiendas: [
            "Disk Union",
            "Book Off",
            "Flea Markets"
        ],
        ciudad: "Tokio"
    },

    {
        id: "hatsune-miku-musica",
        nombre: "Hatsune Miku — LP / CD / Cassette",
        categoria: "💿 Música",
        descripcion: "LP, CD y cassette de Hatsune Miku y Vocaloid. Prioridad a ediciones japonesas especiales.",
        prioridad: 5,
        demanda: 5,
        rareza: 4,
        precio: "💴 – 💴💴💴💴",
        precioTexto: "Buscar tanto lanzamientos oficiales como ediciones de eventos.",
        categorias: ["musica", "fisico", "coleccionismo", "anime"],
        etiquetas: ["🤖 Vocaloid", "💿 LP", "💿 CD", "📼 Cassette"],
        tiendas: [
            "Disk Union",
            "Mandarake",
            "Lashinbang",
            "Book Off"
        ],
        ciudad: "Tokio"
    },

    {
        id: "anime-lps-antiguos",
        nombre: "LPs de animes antiguos",
        categoria: "💿 Música",
        descripcion: "Buscar bandas sonoras, openings, endings y álbumes de anime antiguo en vinilo.",
        prioridad: 5,
        demanda: 4,
        rareza: 5,
        precio: "💴 – 💴💴💴💴💴",
        precioTexto: "Objetivo perfecto para tiendas de segunda mano y flea markets.",
        categorias: ["musica", "fisico", "coleccionismo", "gangas"],
        etiquetas: ["💿 LP", "📺 Anime antiguo", "🏆 Vintage", "🔎 Rebusca"],
        tiendas: [
            "Disk Union",
            "Book Off",
            "Flea Markets",
            "Mandarake"
        ],
        ciudad: "Tokio"
    },

    {
        id: "ado-lp-merch",
        nombre: "Ado — LP y Merch",
        categoria: "💿 Música",
        descripcion: "LPs, CDs, ediciones especiales y merchandising de Ado.",
        prioridad: 5,
        demanda: 5,
        rareza: 3,
        precio: "💴💴 – 💴💴💴",
        precioTexto: "Buscar ediciones japonesas y merchandising de conciertos.",
        categorias: ["musica", "fisico", "coleccionismo"],
        etiquetas: ["🎤 Ado", "💿 LP", "💿 CD", "🎁 Merch"],
        tiendas: [
            "Animate",
            "Tower Records",
            "Disk Union",
            "Book Off"
        ],
        ciudad: "Tokio"
    },

    // =========================================================
    // RETRO NINTENDO
    // =========================================================

    {
        id: "nintendo-ds",
        nombre: "Nintendo DS",
        categoria: "🎮 Retro Nintendo",
        descripcion: "Nintendo DS japonesa. Buscar el mejor estado posible al mejor precio.",
        prioridad: 5,
        demanda: 5,
        rareza: 2,
        precio: "💴 – 💴💴",
        precioTexto: "Comparar especialmente Book Off, Hard Off, Surugaya y Super Potato.",
        categorias: ["retro", "nintendo", "gangas", "coleccionismo"],
        etiquetas: ["🎮 Consola", "🔴 Nintendo", "🔥 Alta demanda"],
        tiendas: [
            "Book Off",
            "Hard Off",
            "Surugaya",
            "Super Potato",
            "BEEP"
        ],
        ciudad: "Tokio"
    },

    {
        id: "famicom-disk-system",
        nombre: "Famicom Disk System",
        categoria: "🎮 Retro Nintendo",
        descripcion: "Famicom Disk System japonés. Buscar consola completa y, si aparece, juegos interesantes.",
        prioridad: 5,
        demanda: 4,
        rareza: 5,
        precio: "💴💴 – 💴💴💴💴",
        precioTexto: "Revisar estado del Disk Drive y correas antes de comprar.",
        categorias: ["retro", "nintendo", "coleccionismo"],
        etiquetas: ["💾 FDS", "🔴 Nintendo", "🏆 Raro", "🇯🇵 Japón"],
        tiendas: [
            "BEEP",
            "Super Potato",
            "Surugaya",
            "Mandarake"
        ],
        ciudad: "Tokio"
    },

    {
        id: "gameboy-color",
        nombre: "Game Boy Color",
        categoria: "🎮 Retro Nintendo",
        descripcion: "Game Boy Color japonesa, preferiblemente en buen estado y con buen precio.",
        prioridad: 5,
        demanda: 5,
        rareza: 3,
        precio: "💴 – 💴💴💴",
        precioTexto: "Buscar colores especiales y unidades completas.",
        categorias: ["retro", "nintendo", "gangas", "coleccionismo"],
        etiquetas: ["🎮 Consola", "🟣 Game Boy", "🏆 Coleccionismo"],
        tiendas: [
            "Book Off",
            "Hard Off",
            "Super Potato",
            "Surugaya",
            "BEEP"
        ],
        ciudad: "Tokio"
    },

    {
        id: "gameboy-camera",
        nombre: "Game Boy Camera",
        categoria: "🎮 Retro Nintendo",
        descripcion: "Game Boy Camera japonesa. Buscar colores y versiones interesantes.",
        prioridad: 5,
        demanda: 5,
        rareza: 4,
        precio: "💴💴 – 💴💴💴",
        precioTexto: "Comprobar lente, contactos y funcionamiento.",
        categorias: ["retro", "nintendo", "coleccionismo"],
        etiquetas: ["📷 Cámara", "🎮 Game Boy", "🔥 Demanda alta"],
        tiendas: [
            "BEEP",
            "Super Potato",
            "Hard Off",
            "Surugaya"
        ],
        ciudad: "Tokio"
    },

    {
        id: "gameboy-printer",
        nombre: "Game Boy Printer",
        categoria: "🎮 Retro Nintendo",
        descripcion: "Game Boy Printer japonesa, preferiblemente funcionando y con accesorios.",
        prioridad: 5,
        demanda: 5,
        rareza: 5,
        precio: "💴💴 – 💴💴💴💴",
        precioTexto: "Comprobar batería, alimentación, rodillo y estado de la impresora.",
        categorias: ["retro", "nintendo", "coleccionismo"],
        etiquetas: ["🖨️ Printer", "🎮 Game Boy", "🏆 Raro"],
        tiendas: [
            "BEEP",
            "Hard Off",
            "Super Potato",
            "Surugaya"
        ],
        ciudad: "Tokio"
    },

    {
        id: "pokemon-pinball-rumble",
        nombre: "Pokémon Pinball — Rumble / Game Boy Color",
        categoria: "🎮 Retro Nintendo",
        descripcion: "Pokémon Pinball para Game Boy Color, buscando específicamente la versión japonesa con Rumble.",
        prioridad: 5,
        demanda: 5,
        rareza: 4,
        precio: "💴💴",
        precioTexto: "Buscar cartucho en buen estado y comprobar que sea la versión con Rumble.",
        categorias: ["retro", "nintendo", "coleccionismo", "gangas"],
        etiquetas: ["⚡ Pokémon", "🎮 GBC", "💥 Rumble"],
        tiendas: [
            "Book Off",
            "Super Potato",
            "Surugaya",
            "BEEP"
        ],
        ciudad: "Tokio"
    },

    {
        id: "terranigma",
        nombre: "Terranigma",
        categoria: "🎮 Retro Nintendo",
        descripcion: "Terranigma para Super Famicom. Objetivo prioritario de colección.",
        prioridad: 5,
        demanda: 5,
        rareza: 5,
        precio: "💴💴💴 – 💴💴💴💴💴",
        precioTexto: "Comparar varias tiendas antes de comprar. Caja y manual aumentan mucho el valor.",
        categorias: ["retro", "nintendo", "coleccionismo"],
        etiquetas: ["⭐ RPG", "🎮 Super Famicom", "🔥 Muy buscado", "🏆 Raro"],
        tiendas: [
            "BEEP",
            "Surugaya",
            "TRADER",
            "Super Potato",
            "Mandarake"
        ],
        ciudad: "Tokio"
    },

    {
        id: "secret-of-evermore",
        nombre: "Secret of Evermore",
        categoria: "🎮 Retro Nintendo",
        descripcion: "Secret of Evermore para Super Nintendo/Super Famicom, según disponibilidad y edición japonesa.",
        prioridad: 4,
        demanda: 3,
        rareza: 4,
        precio: "💴💴 – 💴💴💴",
        precioTexto: "Buscar principalmente en segunda mano.",
        categorias: ["retro", "nintendo", "gangas"],
        etiquetas: ["⭐ RPG", "🎮 SNES", "🏆 Coleccionismo"],
        tiendas: [
            "Book Off",
            "Surugaya",
            "Super Potato",
            "TRADER"
        ],
        ciudad: "Tokio"
    },

    {
        id: "illusion-of-time",
        nombre: "Illusion of Time / Gaia",
        categoria: "🎮 Retro Nintendo",
        descripcion: "Illusion of Time / Soul Blazer-Gaia relacionado según versión. Buscar la edición japonesa equivalente.",
        prioridad: 4,
        demanda: 4,
        rareza: 4,
        precio: "💴💴 – 💴💴💴",
        precioTexto: "Comprobar exactamente qué edición japonesa corresponde.",
        categorias: ["retro", "nintendo", "coleccionismo"],
        etiquetas: ["⭐ RPG", "🎮 Super Famicom", "🏆 Retro"],
        tiendas: [
            "BEEP",
            "Surugaya",
            "TRADER",
            "Super Potato"
        ],
        ciudad: "Tokio"
    },

    {
        id: "pokemon-red-green",
        nombre: "Pokémon Rojo / Verde",
        categoria: "🎮 Retro Nintendo",
        descripcion: "Pokémon Red y Green japoneses. Idealmente conseguir ambos.",
        prioridad: 5,
        demanda: 5,
        rareza: 3,
        precio: "💴 – 💴💴",
        precioTexto: "Muy fáciles de encontrar; buscar unidades baratas y en buen estado.",
        categorias: ["retro", "nintendo", "gangas", "coleccionismo"],
        etiquetas: ["⚡ Pokémon", "🔴 Red", "🟢 Green", "🎮 Game Boy"],
        tiendas: [
            "Book Off",
            "Hard Off",
            "Super Potato",
            "Surugaya"
        ],
        ciudad: "Tokio"
    },

    {
        id: "final-fantasy-vii-international",
        nombre: "Final Fantasy VII International",
        categoria: "🎮 Retro",
        descripcion: "Final Fantasy VII International japonés para PlayStation.",
        prioridad: 5,
        demanda: 4,
        rareza: 3,
        precio: "💴 – 💴💴",
        precioTexto: "Buscar versión japonesa completa con caja y manual.",
        categorias: ["retro", "fisico", "coleccionismo", "gangas"],
        etiquetas: ["⚔️ Final Fantasy", "🎮 PS1", "🇯🇵 International"],
        tiendas: [
            "Book Off",
            "Surugaya",
            "TRADER",
            "Super Potato"
        ],
        ciudad: "Tokio"
    },

    {
        id: "final-fantasy-famicom",
        nombre: "Final Fantasy I – III — Famicom",
        categoria: "🎮 Retro Nintendo",
        descripcion: "Final Fantasy I, II y III originales japoneses para Famicom.",
        prioridad: 5,
        demanda: 5,
        rareza: 4,
        precio: "💴 – 💴💴💴",
        precioTexto: "Los cartuchos suelen ser fáciles de encontrar; cajas/manuales son más interesantes.",
        categorias: ["retro", "nintendo", "coleccionismo", "gangas"],
        etiquetas: ["⚔️ Final Fantasy", "🕹️ Famicom", "🏆 Vintage"],
        tiendas: [
            "Super Potato",
            "BEEP",
            "Surugaya",
            "TRADER"
        ],
        ciudad: "Tokio"
    },

    {
        id: "nintendo-wii",
        nombre: "Nintendo Wii",
        categoria: "🎮 Retro Nintendo",
        descripcion: "Nintendo Wii japonesa, preferiblemente completa y a buen precio.",
        prioridad: 4,
        demanda: 4,
        rareza: 2,
        precio: "💴",
        precioTexto: "Muy buena candidata para buscar en Book Off y Hard Off.",
        categorias: ["retro", "nintendo", "gangas"],
        etiquetas: ["🎮 Consola", "🔴 Nintendo", "💴 Barata"],
        tiendas: [
            "Book Off",
            "Hard Off",
            "Super Potato",
            "Surugaya"
        ],
        ciudad: "Tokio"
    },

    {
        id: "wii-zelda",
        nombre: "Nintendo Wii — juegos de Zelda",
        categoria: "🎮 Retro Nintendo",
        descripcion: "Juegos de Zelda para Wii, incluyendo las versiones japonesas que merezca la pena conseguir.",
        prioridad: 5,
        demanda: 5,
        rareza: 3,
        precio: "💴 – 💴💴",
        precioTexto: "Buscar lotes y copias completas.",
        categorias: ["retro", "nintendo", "gangas", "coleccionismo"],
        etiquetas: ["🗡️ Zelda", "🎮 Wii", "🔴 Nintendo"],
        tiendas: [
            "Book Off",
            "Hard Off",
            "Surugaya",
            "Super Potato"
        ],
        ciudad: "Tokio"
    },

    {
        id: "ds-zelda",
        nombre: "Nintendo DS — juegos de Zelda",
        categoria: "🎮 Retro Nintendo",
        descripcion: "Juegos de Zelda para Nintendo DS, especialmente Phantom Hourglass y Spirit Tracks.",
        prioridad: 5,
        demanda: 5,
        rareza: 3,
        precio: "💴 – 💴💴",
        precioTexto: "Buscar versiones completas con caja y manual.",
        categorias: ["retro", "nintendo", "gangas", "coleccionismo"],
        etiquetas: ["🗡️ Zelda", "🎮 DS", "🔴 Nintendo"],
        tiendas: [
            "Book Off",
            "Hard Off",
            "Super Potato",
            "Surugaya"
        ],
        ciudad: "Tokio"
    },

    {
        id: "gamecube",
        nombre: "Nintendo GameCube",
        categoria: "🎮 Retro Nintendo",
        descripcion: "Nintendo GameCube japonesa, con especial interés por modelos y colores interesantes.",
        prioridad: 5,
        demanda: 5,
        rareza: 3,
        precio: "💴💴 – 💴💴💴",
        precioTexto: "Comparar consola suelta frente a completa.",
        categorias: ["retro", "nintendo", "coleccionismo"],
        etiquetas: ["🎮 Consola", "🔴 Nintendo", "🏆 Retro"],
        tiendas: [
            "Book Off",
            "Hard Off",
            "Super Potato",
            "BEEP"
        ],
        ciudad: "Tokio"
    },

    {
        id: "wonderswan-final-fantasy",
        nombre: "WonderSwan Color — Final Fantasy Edition",
        categoria: "🎮 Retro",
        descripcion: "WonderSwan Color edición especial de Final Fantasy. Objetivo de coleccionismo.",
        prioridad: 5,
        demanda: 4,
        rareza: 5,
        precio: "💴💴💴 – 💴💴💴💴💴",
        precioTexto: "Comparar estado, caja, manuales y accesorios.",
        categorias: ["retro", "coleccionismo", "gangas"],
        etiquetas: ["⚔️ Final Fantasy", "🎮 WonderSwan", "🏆 Raro", "🇯🇵 Japón"],
        tiendas: [
            "BEEP",
            "Super Potato",
            "Mandarake",
            "Surugaya"
        ],
        ciudad: "Tokio"
    },

    // =========================================================
    // TCG
    // =========================================================

    {
        id: "tcg-pokemon",
        nombre: "Cartas Pokémon TCG",
        categoria: "🃏 TCG",
        descripcion: "Cartas Pokémon japonesas: sobres, cartas individuales, cartas antiguas y piezas interesantes.",
        prioridad: 5,
        demanda: 5,
        rareza: 4,
        precio: "💴 – 💴💴💴💴",
        precioTexto: "Comparar tiendas especializadas y segunda mano.",
        categorias: ["tcg", "coleccionismo", "gangas"],
        etiquetas: ["⚡ Pokémon", "🃏 TCG", "🔥 Alta demanda"],
        tiendas: [
            "Card Shop",
            "Lashinbang",
            "K-BOOKS",
            "Mandarake"
        ],
        ciudad: "Tokio"
    },

    {
        id: "tcg-dragon-ball",
        nombre: "Cartas Dragon Ball",
        categoria: "🃏 TCG",
        descripcion: "Cartas japonesas de Dragon Ball y piezas antiguas o especiales.",
        prioridad: 4,
        demanda: 5,
        rareza: 4,
        precio: "💴 – 💴💴💴",
        precioTexto: "Buscar especialmente cartas japonesas antiguas.",
        categorias: ["tcg", "coleccionismo", "gangas"],
        etiquetas: ["🐉 Dragon Ball", "🃏 TCG", "🏆 Vintage"],
        tiendas: [
            "Mandarake",
            "K-BOOKS",
            "Lashinbang"
        ],
        ciudad: "Tokio"
    },

    {
        id: "tcg-evangelion",
        nombre: "Cartas Evangelion",
        categoria: "🃏 TCG",
        descripcion: "Trading cards y cartas coleccionables de Evangelion.",
        prioridad: 4,
        demanda: 4,
        rareza: 5,
        precio: "💴 – 💴💴💴💴",
        precioTexto: "Especial interés por cartas antiguas y promociones.",
        categorias: ["tcg", "anime", "coleccionismo"],
        etiquetas: ["🧬 Evangelion", "🃏 TCG", "🏆 Raro"],
        tiendas: [
            "Mandarake",
            "Lashinbang",
            "K-BOOKS"
        ],
        ciudad: "Tokio"
    },

    {
        id: "tcg-girls-band-cry",
        nombre: "Cartas Girls Band Cry",
        categoria: "🃏 TCG",
        descripcion: "Cartas y trading goods de Girls Band Cry.",
        prioridad: 4,
        demanda: 4,
        rareza: 4,
        precio: "💴 – 💴💴💴",
        precioTexto: "Buscar merchandising de eventos y colaboraciones.",
        categorias: ["tcg", "anime", "musica", "coleccionismo"],
        etiquetas: ["🎸 Girls Band Cry", "🃏 Cartas", "🎁 Merch"],
        tiendas: [
            "K-BOOKS",
            "Lashinbang",
            "Animate"
        ],
        ciudad: "Tokio"
    },

    // =========================================================
    // VHS / LASERDISC / FÍSICO
    // =========================================================

    {
        id: "vhs",
        nombre: "VHS japoneses",
        categoria: "📼 Formato físico",
        descripcion: "VHS de anime, películas japonesas, música y material antiguo.",
        prioridad: 5,
        demanda: 3,
        rareza: 5,
        precio: "💴 – 💴💴💴",
        precioTexto: "Los flea markets y Mandarake pueden ser especialmente interesantes.",
        categorias: ["fisico", "anime", "coleccionismo", "gangas"],
        etiquetas: ["📼 VHS", "📺 Anime antiguo", "🏆 Vintage"],
        tiendas: [
            "Mandarake",
            "Book Off",
            "Flea Markets",
            "Lashinbang"
        ],
        ciudad: "Tokio"
    },

    {
        id: "laserdisc",
        nombre: "LaserDisc multiformato",
        categoria: "📼 Formato físico",
        descripcion: "LaserDisc japonés y reproductores compatibles. Buscar películas, anime, música y ediciones especiales.",
        prioridad: 5,
        demanda: 3,
        rareza: 5,
        precio: "💴 – 💴💴💴💴",
        precioTexto: "Priorizar títulos interesantes antes que comprar muchos discos comunes.",
        categorias: ["fisico", "anime", "coleccionismo", "gangas"],
        etiquetas: ["💿 LaserDisc", "📺 Anime", "🏆 Vintage", "🎬 Películas"],
        tiendas: [
            "Mandarake",
            "Book Off",
            "Flea Markets",
            "Surugaya"
        ],
        ciudad: "Tokio"
    },

    // =========================================================
    // ROPA / CULTURA
    // =========================================================

    {
        id: "japanese-football-shirt",
        nombre: "Camiseta de fútbol japonesa",
        categoria: "⚽ Japón",
        descripcion: "Camiseta oficial de fútbol japonesa, preferiblemente selección de Japón.",
        prioridad: 5,
        demanda: 5,
        rareza: 3,
        precio: "💴💴 – 💴💴💴",
        precioTexto: "Buscar tanto camisetas nuevas como vintage.",
        categorias: ["coleccionismo", "gangas"],
        etiquetas: ["🇯🇵 Japón", "⚽ Fútbol", "👕 Camiseta"],
        tiendas: [
            "2nd STREET",
            "Book Off",
            "Kamo",
            "Flea Markets"
        ],
        ciudad: "Tokio"
    },

    // =========================================================
    // GACHAPON
    // =========================================================

    {
        id: "gachapon",
        nombre: "Gachapons — mejores máquinas y tiendas",
        categoria: "🎰 Gachapon",
        descripcion: "Buscar los mayores centros de gachapon de Japón, especialmente los que tengan anime, videojuegos y colecciones difíciles.",
        prioridad: 5,
        demanda: 5,
        rareza: 3,
        precio: "💴 – 💴💴",
        precioTexto: "Normalmente barato por unidad; el peligro es acabar comprando demasiados.",
        categorias: ["anime", "coleccionismo", "gangas"],
        etiquetas: ["🎰 Gachapon", "🎌 Anime", "🧸 Figuras", "🏆 Grandes centros"],
        tiendas: [
            "Gashapon Department",
            "Animate",
            "Akihabara",
            "Ikebukuro"
        ],
        ciudad: "Tokio"
    }

];


// =========================================================
// CONFIGURACIÓN
// =========================================================

const STORAGE_FAVORITOS =
    "japanSickoComprasFavoritos";

const STORAGE_COMPRADOS =
    "japanSickoComprasComprados";


let favoritos = JSON.parse(
    localStorage.getItem(STORAGE_FAVORITOS) || "[]"
);


let comprados = JSON.parse(
    localStorage.getItem(STORAGE_COMPRADOS) || "[]"
);


let filtroActual = "todos";

let textoBusqueda = "";

let ordenActual = "prioridad";


const contenido =
    document.getElementById("contenido-compras");

const contador =
    document.getElementById("contador");

const buscador =
    document.getElementById("buscador");

const ordenar =
    document.getElementById("ordenar");

const totalProductos =
    document.getElementById("total-productos");

const totalFavoritos =
    document.getElementById("total-favoritos");

const totalComprados =
    document.getElementById("total-comprados");


// =========================================================
// ESTADO
// =========================================================

function guardarEstado() {

    localStorage.setItem(
        STORAGE_FAVORITOS,
        JSON.stringify(favoritos)
    );

    localStorage.setItem(
        STORAGE_COMPRADOS,
        JSON.stringify(comprados)
    );

}


function esFavorito(id) {

    return favoritos.includes(id);

}


function estaComprado(id) {

    return comprados.includes(id);

}


function alternarFavorito(id) {

    if (esFavorito(id)) {

        favoritos =
            favoritos.filter(
                item => item !== id
            );

    } else {

        favoritos.push(id);

    }

    guardarEstado();

    renderizar();

}


function alternarComprado(id) {

    if (estaComprado(id)) {

        comprados =
            comprados.filter(
                item => item !== id
            );

    } else {

        comprados.push(id);

    }

    guardarEstado();

    renderizar();

}


// =========================================================
// FILTROS Y ORDENACIÓN
// =========================================================

function obtenerProductos() {

    let resultado =
        [...productos];


    if (filtroActual === "favoritos") {

        resultado =
            resultado.filter(
                producto =>
                    esFavorito(producto.id)
            );

    }

    else if (filtroActual === "comprados") {

        resultado =
            resultado.filter(
                producto =>
                    estaComprado(producto.id)
            );

    }

    else if (filtroActual === "prioridad") {

        resultado =
            resultado.filter(
                producto =>
                    producto.prioridad >= 5
            );

    }

    else if (filtroActual === "gangas") {

        resultado =
            resultado.filter(
                producto =>
                    producto.categorias.includes(
                        "gangas"
                    )
            );

    }

    else if (filtroActual !== "todos") {

        resultado =
            resultado.filter(
                producto =>
                    producto.categorias.includes(
                        filtroActual
                    )
            );

    }


    if (textoBusqueda.trim() !== "") {

        const texto =
            textoBusqueda
                .toLowerCase()
                .normalize("NFD")
                .replace(
                    /[\u0300-\u036f]/g,
                    ""
                );


        resultado =
            resultado.filter(
                producto => {

                    const contenidoProducto =
                        [
                            producto.nombre,
                            producto.descripcion,
                            producto.categoria,
                            producto.ciudad,
                            producto.tiendas.join(" "),
                            producto.etiquetas.join(" ")
                        ]
                            .join(" ")
                            .toLowerCase()
                            .normalize("NFD")
                            .replace(
                                /[\u0300-\u036f]/g,
                                ""
                            );


                    return contenidoProducto.includes(
                        texto
                    );

                }
            );

    }


    resultado.sort(
        (a, b) => {

            if (ordenActual === "nombre") {

                return a.nombre.localeCompare(
                    b.nombre,
                    "es"
                );

            }


            if (ordenActual === "categoria") {

                return a.categoria.localeCompare(
                    b.categoria,
                    "es"
                );

            }


            if (ordenActual === "demanda") {

                return b.demanda - a.demanda;

            }


            if (ordenActual === "rareza") {

                return b.rareza - a.rareza;

            }


            return b.prioridad - a.prioridad;

        }
    );


    return resultado;

}


// =========================================================
// UTILIDADES
// =========================================================

function estrellas(valor) {

    return "⭐".repeat(valor);

}


// =========================================================
// TARJETAS
// =========================================================

function crearTarjeta(producto) {

    const favorito =
        esFavorito(producto.id);


    const comprado =
        estaComprado(producto.id);


    /*
     * La imagen se obtiene automáticamente
     * utilizando el ID del producto.
     *
     * Ejemplo:
     * needy-girl-overdose
     * ↓
     * ./img/needy-girl-overdose.jpg
     */

    const rutaImagen =
        `./img/${producto.id}.jpg`;


    return `

        <article
            class="producto-card ${comprado ? "comprado" : ""}"
        >

            <div class="producto-imagen">

                <img
                    src="${rutaImagen}"
                    alt="Foto de ${producto.nombre}"
                    loading="lazy"
                    onerror="
                        this.style.display='none';
                        this.parentElement.innerHTML =
                        '<div class=&quot;imagen-fallback&quot;><span>🛍️</span><small>Foto no disponible</small></div>';
                    "
                >

            </div>


            <div class="producto-contenido">

                <div class="producto-categoria">
                    ${producto.categoria}
                </div>


                <h3>
                    ${producto.nombre}
                </h3>


                <p class="producto-descripcion">
                    ${producto.descripcion}
                </p>


                <div class="etiquetas">

                    ${producto.etiquetas
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


                <div class="valoraciones">

                    <div class="valoracion">

                        <span class="valoracion-label">
                            ⭐ Prioridad
                        </span>

                        <span class="valoracion-valor">
                            ${estrellas(producto.prioridad)}
                        </span>

                    </div>


                    <div class="valoracion">

                        <span class="valoracion-label">
                            🔥 Demanda
                        </span>

                        <span class="valoracion-valor">
                            ${estrellas(producto.demanda)}
                        </span>

                    </div>


                    <div class="valoracion">

                        <span class="valoracion-label">
                            💎 Rareza
                        </span>

                        <span class="valoracion-valor">
                            ${estrellas(producto.rareza)}
                        </span>

                    </div>


                    <div class="valoracion">

                        <span class="valoracion-label">
                            📍 Zona
                        </span>

                        <span class="valoracion-valor">
                            ${producto.ciudad}
                        </span>

                    </div>

                </div>


                <div class="info-precio">

                    <strong>
                        💴 PRECIO ESPERADO
                    </strong>

                    <span>
                        ${producto.precio}
                    </span>

                    <br>

                    <span>
                        ${producto.precioTexto}
                    </span>

                </div>


                <div class="tiendas-recomendadas">

                    <strong>
                        🏪 DÓNDE BUSCAR
                    </strong>


                    <div class="tiendas-lista">

                        ${producto.tiendas
                            .map(
                                tienda => `
                                    <span class="tienda-chip">
                                        ${tienda}
                                    </span>
                                `
                            )
                            .join("")
                        }

                    </div>

                </div>


                <div class="estado ${comprado ? "comprado" : ""}">

                    <strong>
                        ${
                            comprado
                                ? "✅ COMPRADO"
                                : "🛒 PENDIENTE"
                        }
                    </strong>

                    <span>
                        ${
                            comprado
                                ? "Ya lo tienes marcado como conseguido."
                                : "Todavía tienes que encontrarlo."
                        }
                    </span>

                </div>


                <div class="botones">

                    <button
                        type="button"
                        class="compra-btn favorito ${
                            favorito ? "activo" : ""
                        }"
                        data-favorito="${producto.id}"
                        aria-pressed="${favorito}"
                    >

                        ${
                            favorito
                                ? "❤️ Quiero comprar"
                                : "☆ Quiero comprar"
                        }

                    </button>


                    <button
                        type="button"
                        class="compra-btn comprado-btn ${
                            comprado ? "activo" : ""
                        }"
                        data-comprado="${producto.id}"
                        aria-pressed="${comprado}"
                    >

                        ${
                            comprado
                                ? "✅ Comprado"
                                : "☐ Marcar comprado"
                        }

                    </button>


                    ${
                        producto.web
                            ? `
                                <a
                                    class="compra-btn"
                                    href="${producto.web}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    🌐 Ver referencia
                                </a>
                            `
                            : `
                                <span></span>
                            `
                    }

                </div>

            </div>

        </article>

    `;

}


// =========================================================
// RESUMEN
// =========================================================

function actualizarResumen() {

    totalProductos.textContent =
        productos.length;


    totalFavoritos.textContent =
        favoritos.length;


    totalComprados.textContent =
        comprados.length;

}


// =========================================================
// RENDERIZADO
// =========================================================

function renderizar() {

    const visibles =
        obtenerProductos();


    actualizarResumen();


    contador.textContent =
        visibles.length === 1
            ? "1 objetivo de compra"
            : `${visibles.length} objetivos de compra`;


    if (visibles.length === 0) {

        contenido.innerHTML = `

            <div class="sin-resultados">

                <div>
                    🔎
                </div>

                <h3>
                    No hay resultados
                </h3>

                <p>
                    Prueba con otro filtro o término de búsqueda.
                </p>

            </div>

        `;

        conectarBotones();

        return;

    }


    const grupos = {};


    visibles.forEach(
        producto => {

            if (!grupos[producto.categoria]) {

                grupos[producto.categoria] = [];

            }


            grupos[producto.categoria].push(
                producto
            );

        }
    );


    contenido.innerHTML =
        Object.entries(grupos)
            .map(
                ([categoria, lista]) => `

                    <section class="seccion">

                        <div class="seccion-titulo">

                            <h2>
                                ${categoria}
                            </h2>

                            <span>
                                ${lista.length}
                                ${
                                    lista.length === 1
                                        ? "objetivo"
                                        : "objetivos"
                                }
                            </span>

                        </div>


                        <div class="productos-grid">

                            ${lista
                                .map(
                                    producto =>
                                        crearTarjeta(
                                            producto
                                        )
                                )
                                .join("")
                            }

                        </div>

                    </section>

                `
            )
            .join("");


    conectarBotones();

}


// =========================================================
// BOTONES DE FAVORITOS Y COMPRADOS
// =========================================================

function conectarBotones() {

    document
        .querySelectorAll(
            "[data-favorito]"
        )
        .forEach(
            boton => {

                boton.addEventListener(
                    "click",
                    () => {

                        alternarFavorito(
                            boton.dataset.favorito
                        );

                    }
                );

            }
        );


    document
        .querySelectorAll(
            "[data-comprado]"
        )
        .forEach(
            boton => {

                boton.addEventListener(
                    "click",
                    () => {

                        alternarComprado(
                            boton.dataset.comprado
                        );

                    }
                );

            }
        );

}


// =========================================================
// FILTROS
// =========================================================

document
    .querySelectorAll(
        "[data-filtro]"
    )
    .forEach(
        boton => {

            boton.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            "[data-filtro]"
                        )
                        .forEach(
                            item =>
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

        }
    );


// =========================================================
// BUSCADOR
// =========================================================

buscador.addEventListener(
    "input",
    () => {

        textoBusqueda =
            buscador.value;


        renderizar();

    }
);


// =========================================================
// ORDENACIÓN
// =========================================================

ordenar.addEventListener(
    "change",
    () => {

        ordenActual =
            ordenar.value;


        renderizar();

    }
);


// =========================================================
// INICIO
// =========================================================

renderizar();