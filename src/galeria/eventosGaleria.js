import cerrarGaleria from "./cerrarGaleria";
import slideClick from "./slideClick";
import carousel from "./carousel";
import { cargarAnteriorSiguiente } from "./cargarImagen";

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