const button = document.querySelector(".show-cat");
const cat = document.querySelector(".cat");

button.addEventListener("click", function (){ 
    cat.classList.add("show");
})