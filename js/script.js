const button = document.getElementById("arrowTop")

button.addEventListener("click", function(){
    window.scrollTo(pageYOffset, 0)
})

window.addEventListener("scroll", function(){
    if (pageYOffset > 250){
        button.hidden = false
    }
    else {
        button.hidden = true
    }
})