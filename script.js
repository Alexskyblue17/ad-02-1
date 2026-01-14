const holaMundo1 = document.getElementById("cambio");
const holaMundo2 = document.getElementById("naranjoso");
const holaMundo3 = document.getElementById("presionar");


holaMundo1.textContent = "adios";
holaMundo2.style.color = "orange";
holaMundo3.addEventListener("click", (event) =>{
    console.log(event);    
    holaMundo3.style.color = "beige";
})

