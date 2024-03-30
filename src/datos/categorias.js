import data from './fotos';
const { fotos } = data; // del objeto quiero extraer las fotos

export default {
    categorias: [
        { id: 'africa', nombre: 'Africa', numeroFotos: fotos['africa'].length, imagenPortada: './img/africa.jpg' },
        { id: 'america', nombre: 'America', numeroFotos: fotos['america'].length, imagenPortada: './img/america.jpg' },
        { id: 'antartida', nombre: 'Antartida', numeroFotos: fotos['antartida'].length, imagenPortada: './img/antartida.jpg' },
        { id: 'asia', nombre: 'Asia', numeroFotos: fotos['asia'].length, imagenPortada: './img/asia.jpg' },
        { id: 'europa', nombre: 'Europa', numeroFotos: fotos['europa'].length, imagenPortada: './img/europa.jpg' },
        { id: 'oceania', nombre: 'Oceania', numeroFotos: fotos['oceania'].length, imagenPortada: './img/oceania.jpg' },
    ],
};