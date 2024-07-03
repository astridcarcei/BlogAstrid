// Variables y constantes del DOM

//Menu principal
//Cuando hago click en Header-boton
//Le toggle la clase isActive a  Header-ul 
const headerNav = document.querySelector(`.Header-nav`)
const btn= document.querySelector(`.Header-boton`)
const menu = headerNav.querySelector(`.Header-ul`)
const section = document.querySelector(`.Section`)

console.log (btn)
console.log(menu)


// funciones Handler
let menuActive = () => menu.classList.toggle(`isActive`)
let menuInactive = () => menu.classList.remove(`isActive`)
let menuWindows = (e) => {
    const btnIn = btn.contains(e.target)
    const menuIn = menu.contains(e.target)

    if (!btnIn && !menuIn) {
      menuInactive()
    }
  }


// Eventos
// Evento menuActive y menuInactive
btn.addEventListener(`mouseup` , menuActive)
window.addEventListener(`mousedown`, menuWindows)  
window.addEventListener(`scroll` ,  menuInactive)




  