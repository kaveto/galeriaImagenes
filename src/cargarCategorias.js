import dataCategorias from './datos/categorias';
const { categorias } = dataCategorias;
const contenedorCategorias = document.getElementById('categorias');

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
    contenedorCategorias.append(nuevaCategoria);

});
