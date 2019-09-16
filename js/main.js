const btnDepartamentos = document.getElementById('btn-departamentos'),
      btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
      grid = document.getElementById('grid'),
      contenedorEnlacesNav = document.querySelector('#menu .container-enlaces-nav'),
      contenedorSubcategorias = document.querySelector('#grid .container-subcategorias'),
      esDipostivoMovil = () => window.innerWidth <= 767

/* --------------------- */
/* EventListeners para dispositivo movil */
/* --------------------- */

document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
    e.preventDefault()
    if(contenedorEnlacesNav.classList.contains('activo')) {
        contenedorEnlacesNav.classList.remove('activo')
        document.querySelector('body').style.overflow = 'visible'
    } else {
        contenedorEnlacesNav.classList.add('activo')
        document.querySelector('body').style.overflow = 'hidden'
    }
})

document.querySelectorAll('.formComment').forEach((elemento) => {
    elemento.addEventListener('submit', (e) => {
        console.log(formComment.dataset.comment)
        document.querySelectorAll('.commentDisplay').forEach((input) => {
        })
    })
})