const toggelMenu = document.getElementById('toggelMenu')
const navbar = document.getElementById('navbarNav')
const navLink = document.querySelectorAll('.navLink')


toggelMenu.addEventListener('click', () => {
    navbar.classList.toggle('show')
} )

// for(let i= 0; i < length; i++){
//     navLink[i].addEventListener('click', () =>{
//         navbar.classList.toggle('show') 
//     })
// }