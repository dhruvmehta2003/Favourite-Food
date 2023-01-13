const pizzaImage = document.getElementById("pizza-image");

pizzaImage.addEventListener("mouseover", function(){
    pizzaImage.style.filter = "brightness(50%)";
});

pizzaImage.addEventListener("mouseout", function(){
    pizzaImage.style.filter = "brightness(100%)";
});
