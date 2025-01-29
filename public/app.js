const mediaScreen = window.matchMedia('(max-width: 684px)')
const seeCase = document.querySelector(".see-case")
const seeCaseMobile = document.querySelector(".see-case-mobile ")
const desktopMenu = document.querySelector(".nav-items")
const iconMenu = document.getElementById("iconMenu")
const menuMobile = document.querySelector(".sidebarMenu")
const closeMenu = document.getElementById("closeMenu")
function mediaQuery(e) {
    if (e.matches) {
        seeCase.classList.add("hidden")
        seeCase.classList.remove('visible')
        seeCaseMobile.classList.remove("hidden")
        seeCaseMobile.classList.add("visible")
        // 
        desktopMenu.classList.add("hidden")
        desktopMenu.classList.remove("visible")
        // 
        iconMenu.classList.remove("hidden")
        iconMenu.classList.add("visible")


    } else {
        seeCase.classList.remove("hidden")
        seeCase.classList.add("visible")
        seeCaseMobile.classList.remove("visible")
        seeCaseMobile.classList.add("hidden")
        // 
        desktopMenu.classList.remove("hidden")
        desktopMenu.classList.add("visible")
        // 
        iconMenu.classList.add('hidden')
        iconMenu.classList.remove("visible")
    }

}
iconMenu.addEventListener("click", () => {
    if (menuMobile.classList.contains("hidden")) {
        menuMobile.classList.remove("hidden")
        menuMobile.classList.add("visible")



    } else {
        menuMobile.classList.add("hidden");
        menuMobile.classList.remove("visible");


    }


})
closeMenu.addEventListener("click", () => {
    menuMobile.classList.remove("visible")
    menuMobile.classList.add("hidden")
})
mediaScreen.addEventListener("change", mediaQuery)
mediaQuery(mediaScreen)
