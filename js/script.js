const toggleBtn = document.getElementById("menuToggle")
const navLinks = document.getElementById("navLinks")

toggleBtn.addEventListener("click", function(){
    navLinks.classList.toggle("show")
})
