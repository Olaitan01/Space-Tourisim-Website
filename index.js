const harmburger=document.querySelector(".harmburger-menu")
const menu=document.querySelector(".menu-list")
const menuIcon = document.querySelector(".menuIcon")
const closeIcon= document.querySelector(".closeIcon")
const body= document.querySelector("body")

harmburger.addEventListener("click",()=>{
    if(harmburger.classList.toggle("active")){
    menu.classList.toggle("active")
    menuIcon.style.display= "none";
    closeIcon.style.display="block"
    
    
    }else{
        menu.classList.toggle("active")
        menuIcon.style.display="block"
        closeIcon.style.display="none"
    }
})

document.querySelector(".item").forEach.addEventListener("click",()=>{
    menu.classList.remove("active")
})