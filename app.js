// aqui se hace el efecto
// iconos de font awesome 
// imagenes gratuitas con color de undraw
// Imagenes gratuitas pexels
// fuente de googlo fonts solo se copia la liga sobre el head
///. z index sire para darle el nivel en el overlap a las cosas, que tan profundo quieres que este

////https://youtu.be/FazgJVnrVuI?t=3160


// Nuestro objetivo como 2pixe es ayudar a las pequenas y medianas empresas a digitalizarse
// tener presencia en el mundo digital y asi puedan llegar a competir 

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});