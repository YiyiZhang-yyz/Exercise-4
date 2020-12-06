AOS.init();

const $icon = document.querySelector('.navbar-toggler-icon')
const $nav = document.getElementById('menu')

let menuToggle = false

$icon.addEventListener('click', function(){
    
    if (menuToggle === false){
        $nav.style.display ="block"
        menuToggle = true}
        else if(menuToggle === true){
        $nav.style.display ="none"
        menuToggle = false
        }
})

window.addEventListener('resize', function(){

    if (window.innerWidth >= 768){
    $nav.style.display ="none"
    menuToggle = false
    }
})