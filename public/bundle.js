'use strict';

//simulación base de datos donde extraeremos las fotos
var dataFotos = {
    fotos: {
        america: [
            {
                id: 1,
                nombre: 'Cataratas del Niagara, Canadá',
                descripcion:
                    'Ubicadas en la frontera entre Canadá y Estados Unidos. Está considerado el conjunto más ancho y voluminoso de Norteamérica, con una caída de más de 50 metros.',
                ruta: './img/america/1.jpg',
            },
            {
                id: 2,
                nombre: 'Estatua de la libertad, EEUU',
                descripcion:
                    'Ubicada en Nueva York, esta enorme escultura da la bienvenida a inmigrantes y visitantes por igual a las costas de Manhattan. Es uno de los símbolos más representativos de Estados Unidos.',
                ruta: './img/america/2.jpg',
            },
            {
                id: 3,
                nombre: 'Chichén Itzá, México',
                descripcion:
                    'Esta antigua ciudad maya alberga el famoso Templo de Kukulcán, elegido como una de las 7 Maravillas del mundo moderno. Además, dentro del complejo se encuentran dos hermosos cenotes: Xtoloc y el Cenote sagrado, utilizados para rituales de sacrificio a los dioses.',
                ruta: './img/america/3.jpg',
            },
            {
                id: 4,
                nombre: 'Cartagena de Indias, Colombia',
                descripcion:
                    'Ubicada a orillas del Caribe, está rodeada de imponentes murallas y fortificaciones. Declarada Patrimonio de la Humanidad por la UNESCO, Cartagena se destaca por su identidad colonial, calles adoquinadas y coloridas arquitecturas.',
                ruta: './img/america/4.jpg',
            },
            {
                id: 5,
                nombre: 'Cristo Redentor, Brazil',
                descripcion:
                    'Es uno de los monumentos más notables de Brasil. Esta impresionante estatua de Art Déco se encuentra en la cima del Corcovado y ofrece vistas panorámicas de Río de Janeiro. Es uno de los íconos más famosos del país y una visita obligada.',
                ruta: './img/america/5.jpg',
            },
            {
                id: 6,
                nombre: 'Glaciar Perito Moreno, Argentina',
                descripcion:
                    'En la Patagonia argentina, el Glaciar Perito Moreno es una escultura de hielo impresionante. Puedes caminar sobre las pasarelas para apreciarlo desde diferentes ángulos.',
                ruta: './img/america/6.jpg',
            },
            {
                id: 7,
                nombre: 'Ushuaia, Argentina',
                descripcion:
                    'Conocida como “el fin del mundo”, Ushuaia es la ciudad más austral del mundo y la puerta de entrada a la Antártida. Sus paisajes montañosos y su ambiente único la hacen inolvidable.',
                ruta: './img/america/7.jpg',
            },
            {
                id: 8,
                nombre: 'Bocas del Toro, Panamá',
                descripcion:
                    'Este archipiélago rodeado de islas, isletas y cayos es un paraíso para los amantes del buceo y el surf. En la Isla Colón, encontrarás opciones de alojamiento, mientras que en la Isla Bastimentos podrás avistar delfines. Bocas Town es el lugar ideal para la vida nocturna.',
                ruta: './img/america/8.jpg',
            },
            {
                id: 9,
                nombre: 'San Blas (Guna Yala), Panamá',
                descripcion:
                    'San Blas es un conjunto de islas paradisíacas en el Caribe. Aquí, podrás disfrutar de playas de arena blanca, aguas cristalinas y la cultura de la comunidad indígena Guna. Es un lugar perfecto para desconectar y relajarte.',
                ruta: './img/america/9.jpg',
            },
            {
                id: 10,
                nombre: 'Volcán Poás, Costa Rica',
                descripcion:
                    'Este volcán, rodeado de un bosque nuboso, ofrece uno de los cráteres más grandes e impresionantes del mundo. Su lago de color verde intenso es una vista cautivadora. Aunque es uno de los volcanes más activos del país, la visita es segura y emocionante.',
                ruta: './img/america/10.jpg',
            },
        ],
        europa: [
            {
                id: 11,
                nombre: 'Parque Nacional Timanfaya, España',
                descripcion:
                    'Localizado en la isla de Lanzarote, este parque nacional geológico tiene alrededor de 25 volcanes, algunos inactivos y otros de baja actividad. Puedes sentir el calor emanando desde las profundidades de la tierra y disfrutar de un paisaje volcánico impresionante.',
                ruta: './img/europa/1.jpg',
            },
            {
                id: 12,
                nombre: 'Lago de Pingvallavatn, Islandia',
                descripcion:
                    'El lago natural más grande de Islandia, sus aguas provienen del glaciar Langjokull y se unen a las aguas termales en Vellankatla. Ideal para el senderismo y el submarinismo.',
                ruta: './img/europa/2.jpg',
            },
            {
                id: 13,
                nombre: 'Castillos de Transilvania, Rumania',
                descripcion:
                    'La región de Transilvania es famosa por sus castillos medievales, como el Castillo de Bran (conocido como el Castillo de Drácula) y el Castillo de Peleș. Estos castillos tienen una atmósfera misteriosa y son un verdadero viaje al pasado.',
                ruta: './img/europa/3.jpg',
            },
            {
                id: 14,
                nombre: 'Cuevas de Skocjan, Eslovenia',
                descripcion:
                    'Estas cuevas subterráneas son Patrimonio de la Humanidad por la UNESCO. Con enormes salas, ríos subterráneos y formaciones rocosas impresionantes, son un lugar único para explorar.',
                ruta: './img/europa/4.jpg',
            },
            {
                id: 15,
                nombre: 'Monte Saint-Michel, Francia',
                descripcion:
                    'Este monte rocoso con una abadía en la cima es uno de los lugares más icónicos de Francia. Cuando la marea sube, el monte se convierte en una isla, lo que lo hace aún más mágico.',
                ruta: './img/europa/5.jpg',
            },
            {
                id: 16,
                nombre: 'Cinque Terre, Italia',
                descripcion:
                    'Cinque Terre es un grupo de cinco pintorescos pueblos costeros en la Riviera italiana. Sus casas de colores, viñedos en terrazas y vistas al mar son impresionantes.',
                ruta: './img/europa/6.jpg',
            },
            {
                id: 17,
                nombre: 'Santorini, Grecia',
                descripcion:
                    'Esta isla volcánica en el mar Egeo es famosa por sus casas blancas con techos azules, sus atardeceres espectaculares y sus playas de arena negra.',
                ruta: './img/europa/7.jpg',
            },
            {
                id: 18,
                nombre: 'Salzburgo, Austria',
                descripcion:
                    'La ciudad natal de Mozart es un lugar lleno de historia, música clásica y arquitectura barroca. Sus calles estrechas y su ambiente romántico son encantadores.',
                ruta: './img/europa/8.jpg',
            },
            {
                id: 19,
                nombre: 'Hallstatt, Austria',
                descripcion:
                    'Este pueblo alpino junto a un lago es uno de los lugares más fotografiados de Europa. Sus casas de madera, montañas y aguas cristalinas son impresionantes.',
                ruta: './img/europa/9.jpg',
            },
            {
                id: 20,
                nombre: 'Rovaniemi, Finlandia',
                descripcion:
                    'La ciudad de Santa Claus, ubicada en el Círculo Polar Ártico, es un lugar mágico para visitar en invierno. Puedes ver las Auroras Boreales y disfrutar de actividades invernales.',
                ruta: './img/europa/10.jpg',
            },
        ],

        africa: [
            {
                id: 21,
                nombre: 'Las Grandes Pirámides de Giza, Egipto',
                descripcion:
                    'Estas antiguas pirámides se construyeron hace 4.500 años como tumbas para los faraones egipcios. Siguen siendo una de las Siete Maravillas del Mundo Antiguo y un testimonio del ingenio humano.',
                ruta: './img/africa/1.jpg',
            },
            {
                id: 22,
                nombre: 'Cataratas Victoria, Zimbabue y Zambia',
                descripcion:
                    'Conocidas como «El humo que truena», las cataratas Victoria son uno de los saltos de agua más grandes del mundo. La fuerza y la belleza de esta maravilla natural son sobrecogedoras.',
                ruta: './img/africa/2.jpg',
            },
            {
                id: 23,
                nombre: 'Montaña de la Mesa, Sudáfrica',
                descripcion:
                    'Montaña de la Mesa, que se eleva sobre Ciudad del Cabo, ofrece unas vistas impresionantes de la ciudad y la costa circundante. Se puede subir a pie o en teleférico para vivir una experiencia inolvidable..',
                ruta: './img/africa/3.jpg',
            },
            {
                id: 24,
                nombre: 'Parque Nacional del Serengeti, Tanzania',
                descripcion:
                    'Famoso por su fauna y su migración anual, el Serengeti es una visita obligada para los amantes de los safaris. Sea testigo de la increíble diversidad de animales en su hábitat natural.',
                ruta: './img/africa/4.jpg',
            },
            {
                id: 25,
                nombre: 'Monte Kilimanjaro, Tanzania',
                descripcion:
                    'El Kilimanjaro, el pico más alto de África, atrae a excursionistas de todo el mundo. La cima nevada ofrece una aventura desafiante pero gratificante.',
                ruta: './img/africa/5.jpg',
            },
            {
                id: 26,
                nombre: 'Parque Nacional Kruger, Sudáfrica',
                descripcion:
                    'Otro fantástico destino de safari, el Parque Nacional Kruger es el hogar de los Cinco Grandes (león, leopardo, elefante, búfalo y rinoceronte) y ofrece emocionantes safaris.',
                ruta: './img/africa/6.jpg',
            },
            {
                id: 27,
                nombre: 'Delta del Okavango, Botsuana',
                descripcion:
                    'Este delta interior único es un exuberante oasis en el corazón del desierto del Kalahari. Explórelo en el tradicional mokoro (piragua) y observe hipopótamos, cocodrilos y una gran variedad de aves.',
                ruta: './img/africa/7.jpg',
            },
            {
                id: 28,
                nombre: 'Iglesias excavadas en la roca de Lalibela, Etiopía',
                descripcion:
                    'Esculpidas en roca sólida, estas iglesias medievales son Patrimonio de la Humanidad de la UNESCO. Su intrincada arquitectura y su significado religioso las hacen realmente notables.',
                ruta: './img/africa/8.jpg',
            },
            {
                id: 29,
                nombre: 'Cañón del río Fish, Namibia',
                descripcion:
                    'El cañón del río Fish, el segundo más grande del mundo, ofrece unas vistas impresionantes, rutas de senderismo y la oportunidad de conectar con la naturaleza.',
                ruta: './img/africa/9.jpg',
            },
            {
                id: 30,
                nombre: 'Rastreo de gorilas en el Parque Nacional de los Volcanes, Ruanda',
                descripcion:
                    'Para vivir una experiencia única en la vida, camine por los frondosos bosques de Ruanda para observar gorilas de montaña en su hábitat natural.',
                ruta: './img/africa/10.jpg',
            },
        ],
        asia: [
            {
                id: 31,
                nombre: 'Taj Mahal, India',
                descripcion:
                    'El Taj Mahal, ubicado en Agra, India, es un monumento de amor construido en mármol blanco. Su belleza majestuosa y su historia lo convierten en un lugar imperdible.',
                ruta: './img/asia/1.jpg',
            },
            {
                id: 32,
                nombre: 'Gran Muralla China',
                descripcion:
                    'La Gran Muralla China es un símbolo icónico del país y del mundo. Explora sus tramos menos turísticos, como Jinshanling o Simatai, para obtener vistas impresionantes.',
                ruta: './img/asia/2.jpg',
            },
            {
                id: 33,
                nombre: 'Borobudur, Indonesia',
                descripcion:
                    'Considerado el monumento budista más grande del mundo, Borobudur es un mandala esculpido en piedra. Visítalo temprano en la mañana para disfrutarlo en soledad.',
                ruta: './img/asia/3.jpg',
            },
            {
                id: 34,
                nombre: 'Bagan, Myanmar',
                descripcion:
                    'Bagan es famoso por sus templos y pagodas. Sobrevolar todo el conjunto en globo es una experiencia inolvidable.',
                ruta: './img/asia/4.jpg',
            },
            {
                id: 35,
                nombre: 'Shirakawa-go, Japón',
                descripcion:
                    'Este pueblo tradicional japonés en los Alpes es un viaje en el tiempo. En invierno, cuando la nieve cubre el paisaje, es aún más impresionante.',
                ruta: './img/asia/5.jpg',
            },
            {
                id: 36,
                nombre: 'Maldivas',
                descripcion:
                    'Las Maldivas son un paraíso de playas de arena blanca y aguas cristalinas. Ideal para relajarse y disfrutar del entorno natural.',
                ruta: './img/asia/6.jpg',
            },
            {
                id: 37,
                nombre: 'Buda de Aukana, Sri Lanka',
                descripcion:
                    'Esta antigua estatua de Buda tallada en una sola roca es impresionante. Se encuentra en el centro de Sri Lanka.',
                ruta: './img/asia/7.jpg',
            },
            {
                id: 38,
                nombre: 'Templos de Angkor, Camboya',
                descripcion:
                    'Los Templos de Angkor en Siem Reap son un complejo arqueológico con estructuras antiguas y exquisitas. El famoso templo de Angkor Wat es el más grande y emblemático.',
                ruta: './img/asia/8.jpg',
            },
            {
                id: 39,
                nombre: 'Petra, Jordania',
                descripcion:
                    'Aunque no está en Asia, Petra merece una mención. Esta ciudad tallada en la roca es un tesoro histórico y visualmente impactante.',
                ruta: './img/asia/9.jpg',
            },
            {
                id: 40,
                nombre: 'Monte Everest, Nepal/Tíbet',
                descripcion:
                    'La montaña más alta del mundo, el Monte Everest, es un desafío para los alpinistas y una maravilla natural que debes contemplar.',
                ruta: './img/asia/10.jpg',
            },
        ],
        oceania: [
            {
                id: 41,
                nombre: 'Bora-Bora, Polinesia Francesa',
                descripcion:
                    'Sus aguas cristalinas y paisajes de parque temático son reales y te dejarán sin aliento. Aunque los hoteles en Bora-Bora pueden ser caros, dormir en una cabaña encima del agua es una experiencia inolvidable.',
                ruta: './img/oceania/1.jpg',
            },
            {
                id: 42,
                nombre: 'Lago Pukaki y la Isla Sur, Nueva Zelanda',
                descripcion:
                    'El Lago Pukaki, con el Monte Cook de telón de fondo, es un lago alpino con aguas turquesas impresionantes. Las vistas al Monte Cook parecen sacadas de un fondo de pantalla de Windows.',
                ruta: './img/oceania/2.jpg',
            },
            {
                id: 43,
                nombre: 'Sydney y su Ópera, Australia',
                descripcion:
                    'La Ópera de Sydney es uno de los edificios más emblemáticos de Oceanía. Su arquitectura única y su ubicación frente al puerto hacen que sea un lugar imprescindible para visitar.',
                ruta: './img/oceania/3.jpg',
            },
            {
                id: 44,
                nombre: 'Fraser Island, Australia',
                descripcion:
                    'La isla más grande de arena del mundo, Fraser Island, es un paraíso natural con playas, lagos y bosques. Explora sus dunas de arena y disfruta de la fauna autóctona.',
                ruta: './img/oceania/4.jpg',
            },
            {
                id: 45,
                nombre: 'Milford Sound, Nueva Zelanda',
                descripcion:
                    'Este fiordo en la Isla Sur de Nueva Zelanda es un espectáculo natural impresionante. Sus acantilados, cascadas y aguas tranquilas son una maravilla para explorar.',
                ruta: './img/oceania/5.jpg',
            },
            {
                id: 46,
                nombre: 'Islas Fiji',
                descripcion:
                    'Este archipiélago en el Pacífico Sur es famoso por sus playas de arena blanca, aguas cristalinas y cálida hospitalidad. Sumérgete en la cultura local y disfruta de la belleza natural.',
                ruta: './img/oceania/6.jpg',
            },
            {
                id: 47,
                nombre: 'Rapa Nui, Isla de Pascua',
                descripcion:
                    'Con sus misteriosas estatuas de piedra (moáis), Rapa Nui es un lugar único en el mundo. Explora su historia y su entorno volcánico.',
                ruta: './img/oceania/7.jpg',
            },
            {
                id: 48,
                nombre: 'Isla de Lord Howe, Australia',
                descripcion:
                    'Esta pequeña isla en el Pacífico es Patrimonio de la Humanidad por la UNESCO. Sus playas, montañas y biodiversidad son impresionantes.',
                ruta: './img/oceania/8.jpg',
            },
            {
                id: 49,
                nombre: 'Islas Whitsunday, Australia',
                descripcion:
                    'Este grupo de islas en la Gran Barrera de Coral es un paraíso para los amantes del buceo y el snorkel. Explora sus aguas cristalinas y playas de arena blanca.',
                ruta: './img/oceania/9.jpg',
            },
            {
                id: 50,
                nombre: 'Tahití, Polinesia Francesa',
                descripcion:
                    'Con sus lagunas de color turquesa y montañas volcánicas, Tahití es un destino romántico y exótico. Disfruta de la cultura polinesia y relájate en sus playas.',
                ruta: './img/oceania/10.jpg',
            },
        ],
        antartida: [
            {
                id: 51,
                nombre: 'Isla Decepción',
                descripcion:
                    'Ubicada en el extremo norte de la Península Antártica, es un volcán activo cubierto de nieve, hielo y glaciares. Su famosa caldera “Whalers” ofrece vistas impresionantes y la oportunidad de ver actividad volcánica de cerca.',
                ruta: './img/antartida/1.jpg',
            },
            {
                id: 52,
                nombre: 'Estación Científica Palmer',
                descripcion:
                    'Operada por el Programa Antártico de los Estados Unidos, esta base de investigación en la bahía de la Isla Anvers lleva a cabo estudios en biología, geología y física atmosférica. Su ubicación remota la convierte en un lugar ideal para la investigación científica.',
                ruta: './img/antartida/2.jpg',
            },
            {
                id: 53,
                nombre: 'Cataratas de Sangre',
                descripcion:
                    'El glaciar Taylor desprende aguas de color óxido, creando las “Cataratas de Sangre”. Este fenómeno inusual en un ecosistema único ha fascinado a la comunidad científica.',
                ruta: './img/antartida/3.jpg',
            },
            {
                id: 54,
                nombre: 'Glaciar Pine Island',
                descripcion:
                    'Es el glaciar de la Antártida que más rápido se derrite. Su fusión contribuye significativamente al aumento del nivel del mar.',
                ruta: './img/antartida/4.jpg',
            },
            {
                id: 55,
                nombre: 'Estrecho de Le Maire',
                descripcion:
                    'Un atractivo turístico en la Antártida, conocido por su belleza y misterio.',
                ruta: './img/antartida/5.jpg',
            },
            {
                id: 56,
                nombre: 'Península Antártica',
                descripcion:
                    'La parte más accesible del continente, hogar de aves marinas, focas y pingüinos.',
                ruta: './img/antartida/6.jpg',
            },
            {
                id: 57,
                nombre: 'Cabo Evans',
                descripcion:
                    'Se encuentra sumamente apartado de los demás sitios turísticos de La Antártida. Si puedes llegar, encontrarás en Cabo Evans una enorme colección de banderines, trineos y arneses que dejaron los primeros excursionistas en sus intentos por conocer el Polo Sur.',
                ruta: './img/antartida/7.jpg',
            },
            {
                id: 58,
                nombre: 'Museo Histórico de Puerto Lockroy',
                descripcion:
                    'Fue construido por las fuerzas militares británicas durante la Segunda Guerra Mundial. En su interior encontrarás una tienda de compra con objetos de la época, además tendrás la oportunidad de enviar una postal a distancia gracias a su oficina de correos.',
                ruta: './img/antartida/8.jpg',
            },
            {
                id: 59,
                nombre: 'La Cabaña de Shackleton',
                descripcion:
                    'Es un refugio de madera donde se albergó el explorador irlandés Ernest Shackleton, uno de los primeros investigadores que realizó excursiones en La Antártida.',
                ruta: './img/antartida/9.jpg',
            },
        ],
    },
};

const { fotos } = dataFotos; // del objeto quiero extraer las fotos

var dataCategorias = {
    categorias: [
        { id: 'africa', nombre: 'Africa', numeroFotos: fotos['africa'].length, imagenPortada: './img/africa.jpg' },
        { id: 'america', nombre: 'America', numeroFotos: fotos['america'].length, imagenPortada: './img/america.jpg' },
        { id: 'antartida', nombre: 'Antartida', numeroFotos: fotos['antartida'].length, imagenPortada: './img/antartida.jpg' },
        { id: 'asia', nombre: 'Asia', numeroFotos: fotos['asia'].length, imagenPortada: './img/asia.jpg' },
        { id: 'europa', nombre: 'Europa', numeroFotos: fotos['europa'].length, imagenPortada: './img/europa.jpg' },
        { id: 'oceania', nombre: 'Oceania', numeroFotos: fotos['oceania'].length, imagenPortada: './img/oceania.jpg' },
    ],
};

const { categorias } = dataCategorias;
const contenedorCategorias$1 = document.getElementById('categorias');

categorias.forEach((categoria) =>
{
    //1. Crear el elemento. etiqueta a
    const nuevaCategoria = document.createElement('a');
    //creamos una platilla para poder agregar la imagen y el div dentro de la etiqueta del enlace a
    const plantilla = `<img class="categoria__img"
                         src="${categoria.imagenPortada}"
                         alt="" />
                    <div class="categoria__datos">
                        <p class="categoria__nombre">${categoria.nombre}</p>
                        <p class="categoria__numero-fotos">${categoria.numeroFotos} Fotos</p>
                    </div>`;
    nuevaCategoria.innerHTML = plantilla;
    //debemos agregarles los atributos a los elementos tales como href, class, etc.
    nuevaCategoria.classList.add('categoria');
    nuevaCategoria.href = '#';
    //dataset me permite agregar la categoria personalizada de data-categoria="america"
    nuevaCategoria.dataset.categoria = categoria.id;
    //pasos para agregarla al documento html para poder visualizar las imagenes con su información usando DOM
    contenedorCategorias$1.append(nuevaCategoria);

});

const slideClick = (e) =>
{
    let ruta, nombre, descripcion;
    const id = parseInt(e.target.dataset.idFoto);
    const galeria = document.getElementById('galeria');
    const categoriaActiva = galeria.dataset.categoria;
    dataFotos.fotos[categoriaActiva].forEach((foto) =>
    {
        if (foto.id === id)
        {
            ruta = foto.ruta;
            nombre = foto.nombre;
            descripcion = foto.descripcion;
        }
    });
    cargarImagen(id, nombre, ruta, descripcion);
};

const galeria$4 = document.getElementById('galeria');
const cargarImagen = (id, nombre, ruta, descripcion) =>
{
    galeria$4.querySelector('.galeria__imagen').src = ruta;
    galeria$4.querySelector('.galeria__imagen').dataset.id = id;
    galeria$4.querySelector('.galeria__titulo').innerText = nombre;
    galeria$4.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;

    const categoriaActual = galeria$4.dataset.categoria;
    const fotos = dataFotos.fotos[categoriaActual];
    let indexImagenActual;

    fotos.forEach((foto, index) =>
    {
        if (foto.id === id)
        {
            indexImagenActual = index;
        }
    });

    if (galeria$4.querySelectorAll('.galeria__carousel-slide').length > 0)
    {
        //eliminar la clase active de cualquier slide que tengamos.
        galeria$4.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active');
        //marcamos la imagen de interes del carousel como activa.
        galeria$4.querySelectorAll('.galeria__carousel-slide')[indexImagenActual].classList.add('galeria__carousel-slide--active');
    }



};

const cargarAnteriorSiguiente = (direccion) =>
{
    const categoriaActual = galeria$4.dataset.categoria;
    const fotos = dataFotos.fotos[categoriaActual];
    const idImagenActual = parseInt(galeria$4.querySelector('.galeria__imagen').dataset.id);
    let indexImagenActual;
    fotos.forEach((foto, index) =>
    {
        if (foto.id === idImagenActual)
        {
            indexImagenActual = index;
        }
    });

    if (direccion === 'siguiente')
    {
        if (fotos[indexImagenActual + 1])//si existe, entonces..
        {
            //destructuramos los valores
            const { id, nombre, ruta, descripcion } = fotos[indexImagenActual + 1];
            cargarImagen(id, nombre, ruta, descripcion);
        }
    } else if (direccion === 'anterior')
    {
        if (fotos[indexImagenActual - 1])//si existe, entonces..
        {
            //destructuramos los valores
            const { id, nombre, ruta, descripcion } = fotos[indexImagenActual - 1];
            cargarImagen(id, nombre, ruta, descripcion);
        }
    }
};

/**
 * Archivo que se encarga del evento de las categorias.
 */

const contenedorCategorias = document.getElementById('categorias');
const galeria$3 = document.getElementById('galeria');
let categoriaActiva;

// Agregamos el event listener a las categorias.
contenedorCategorias.addEventListener('click', (e) =>
{
    //para prevenir que nos mande a la parte superior de la pagina o se recargue al darle click a la imagenusamos la sgte linea de codigo
    e.preventDefault();
    // Comprobamos que lo que se le hace click contenga el data-categoria.
    if (e.target.closest('a'))
    {
        categoriaActiva = e.target.closest('a').dataset.categoria;
        galeria$3.dataset.categoria = categoriaActiva;
        //categoria activa, guarda la categoria a la que le dimos un click
        const fotos = dataFotos.fotos[categoriaActiva];
        const carousel = galeria$3.querySelector('.galeria__carousel-slides');
        // Reiniciamos el carousel
        carousel.innerHTML = '';
        // Agregamos un overflow hidden al body.
        document.body.style.overflow = 'hidden';
        // Agregamos la clase active a la galeria.
        galeria$3.classList.add('galeria--active');
        // Tomamos la informacion de la primera imagen de la categoria y la cargamos en el DOM.
        const { id, nombre, ruta, descripcion } = fotos[0];
        cargarImagen(id, nombre, ruta, descripcion);


        // Por cada foto agregamos un slide al carousel.
        for (let i = 0; i < fotos.length; i++)
        {
            const slide = `
				<a href="#" class="galeria__carousel-slide">
					<img class="galeria__carousel-image" src="${fotos[i].ruta}" alt="" data-id-foto="${fotos[i].id}" />
				</a>
			`;

            carousel.innerHTML += slide;
        }

        // Agregamos la clase active al primer elemento.
        galeria$3.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active');
    }
});

const galeria$2 = document.getElementById('galeria');
const cerrarGaleria = () =>
{
    galeria$2.classList.remove('galeria--active');
    document.body.style.overflow = 'auto';
};

const galeria$1 = document.getElementById('galeria');
const carousel = (direccion) =>
{
    //objeto de opciones
    const opciones = {
        root: document.querySelector('.galeria__carousel'),
        rootMargin: '0px',
        threshold: 0.9,
    };

    //observador de las opciones
    const observer = new IntersectionObserver((entradas) =>
    {
        const slidesVisibles = entradas.filter((entrada) =>
        {
            if (entrada.isIntersecting === true)
            {
                return entrada;
            }
        });

        if (direccion === 'atras')
        {
            const primerSlideVisible = slidesVisibles[0];
            const indexPrimerSlideVisible = entradas.indexOf(primerSlideVisible);
            if (indexPrimerSlideVisible >= 1)
            {
                entradas[indexPrimerSlideVisible - 1].target.scrollIntoView({
                    behavior: 'smooth', //trancisiona suavemente
                    inline: 'start', //pone la imagen al principio
                });
            }

        } else if (direccion === 'adelante')
        {
            //con esto obtnemos el último index y coloca la imagen ultima y la coloca la principio del carrusel
            const ultimaSlideVisible = slidesVisibles[slidesVisibles.length - 1];
            const indexUltimoSlideVisible = entradas.indexOf(ultimaSlideVisible);
            if (entradas.length - 1 > indexUltimoSlideVisible)
            {
                entradas[indexUltimoSlideVisible + 1].target.scrollIntoView({
                    behavior: 'smooth', //trancisiona suavemente
                    inline: 'start', //pone la imagen al principio
                });
            }


        }

        const slides = galeria$1.querySelectorAll('.galeria__carousel-slide');
        slides.forEach((slide) =>
        {
            observer.unobserve(slide);
        });

    }, opciones);

    const slides = galeria$1.querySelectorAll('.galeria__carousel-slide');
    slides.forEach((slide) =>
    {
        observer.observe(slide);
    });
};

const galeria = document.getElementById('galeria');
galeria.addEventListener('click', (e) =>
{
    const boton = e.target.closest('button');
    //dataset atributo personalizado tipo data y que lleva tambien la palabra acción
    //con el signo de interrogación se pregunta si tiene el atributo y sino lo tiene no pasa nada
    //- - - Cerrar Galeria - - -
    if (boton?.dataset?.accion === 'cerrar-galeria') 
    {
        cerrarGaleria();
    }
    //- - - Carousel Slide Click - - -
    if (e.target?.dataset?.idFoto)
    {
        slideClick(e);
    }
    //- - - Siguiente Imagen - - -
    if (boton?.dataset.accion === 'siguiente-imagen')
    {
        cargarAnteriorSiguiente('siguiente');
    }
    //- - - Anterior Imagen - - -
    if (boton?.dataset.accion === 'anterior-imagen')
    {
        cargarAnteriorSiguiente('anterior');
    }

    //- - - Carousel Adelante - - -
    //permite arrastrar a la primera posición la imagen que está de ultimo y no se ve completa
    if (boton?.dataset.accion === 'siguiente-slide')
    {
        carousel('adelante');
    }
    //- - - Carousel Atras - - -
    //visualizará una a una hacia atrás
    if (boton?.dataset.accion === 'anterior-slide')
    {
        carousel('atras');
    }
});
