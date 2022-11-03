const button = document.querySelector(".btn");
const body = document.querySelector("body");
const contact = document.querySelector(".contact-form");
const closeBtn = document.querySelector(".close");

button.addEventListener("click", function(){
    contact.style.transition = "transform 0.4s ease-in-out";
    contact.style.display = "flex";
});

closeBtn.addEventListener("click", function(){
    contact.style.transition = "transform 0.4s ease-in-out";
    contact.style.display="none";
});


//buttons
// const prevBtn = document.querySelector("#arrow-left");
// const nextBtn = document.querySelector("#arrow-right");
var images =[]
var i=0;
var time = 3000;

images[0] ="./images/img.jpg";
images[1] ="./images/img1.jpg";
images[2] ="./images/img2.jpg";

function changeImage(){
    document.slide.src = images[i]
    if(i < images.length-1){
        i++;
    }else{
        i=0;
    }
    setTimeout("changeImage()", time);
}

window.onload =changeImage;

