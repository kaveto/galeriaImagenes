import data from './../datos/fotos';
import slideClick from './slideClick';

const galeria = document.getElementById('galeria');
const cargarImagen = (id, nombre, ruta, descripcion) =>
{
    galeria.querySelector('.galeria__imagen').src = ruta;
    galeria.querySelector('.galeria__imagen').dataset.id = id;
    galeria.querySelector('.galeria__titulo').innerText = nombre;
    galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;

    const categoriaActual = galeria.dataset.categoria;
    const fotos = data.fotos[categoriaActual];
    let indexImagenActual;

    fotos.forEach((foto, index) =>
    {
        if (foto.id === id)
        {
            indexImagenActual = index;
        }
    });

    if (galeria.querySelectorAll('.galeria__carousel-slide').length > 0)
    {
        //eliminar la clase active de cualquier slide que tengamos.
        galeria.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active');
        //marcamos la imagen de interes del carousel como activa.
        galeria.querySelectorAll('.galeria__carousel-slide')[indexImagenActual].classList.add('galeria__carousel-slide--active');
    }



}

const cargarAnteriorSiguiente = (direccion) =>
{
    const categoriaActual = galeria.dataset.categoria;
    const fotos = data.fotos[categoriaActual];
    const idImagenActual = parseInt(galeria.querySelector('.galeria__imagen').dataset.id);
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
}

export { cargarImagen, cargarAnteriorSiguiente };