const botonMenu = document.querySelector('.mostrar-menu');
const listaNavegacion = document.querySelector('.opc_nav');
const btCambiarTema = document.querySelector('.botonTema');
const main = document.querySelector('main');

//agregando evento a botonMenu
botonMenu.addEventListener('click', () => {
    listaNavegacion.classList.toggle('mostrar');
});
 

