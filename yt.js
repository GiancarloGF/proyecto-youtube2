const contenedor=document.querySelector('#contenedor');


document.querySelector('#boton-menu').addEventListener('click',()=>{
    contenedor.classList.toggle('active');
})



// window.addEventListener('resize',()=>{
//     if (window.innerWidth<=768) {
//         contenedor.classList.remove('active');
//     } else {
//         contenedor.classList.add('active');
//     }
// })
// Este evento trae un problema; en el supuesto de que por defecto
// el sitio se ve en una pantalla pequeña, jamas de encogera(no habra evento)
// entonces no desaparecera el menu.

const comprobarAncho=()=>{
    if (window.innerWidth<=768) {
                contenedor.classList.remove('active');
    } else {
               contenedor.classList.add('active');
        }
}

comprobarAncho();

window.addEventListener('resize',()=>{
    comprobarAncho();
})