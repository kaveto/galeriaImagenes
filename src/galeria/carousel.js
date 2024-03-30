const galeria = document.getElementById('galeria');
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

        const slides = galeria.querySelectorAll('.galeria__carousel-slide');
        slides.forEach((slide) =>
        {
            observer.unobserve(slide);
        });

    }, opciones);

    const slides = galeria.querySelectorAll('.galeria__carousel-slide');
    slides.forEach((slide) =>
    {
        observer.observe(slide);
    });
};

export default carousel;