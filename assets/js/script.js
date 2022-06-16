/* Cierre menu */
let closeMenu = document.getElementById("ul-menu")

console.log(closeMenu)
closeMenu.addEventListener('click' , ev =>{
    document.getElementById("menu-hamburguesa").checked = false
    
})