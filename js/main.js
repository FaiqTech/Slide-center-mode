var slides = document.querySelectorAll(".slide");

var next = document.querySelector(".btn-next");
var prev = document.querySelector(".btn-prev");

var currentIndex = -1; //hal-hazirki indeks

var maxNumber = slides.length; // sekillerin sayi

slidesMove(slides)    //ilk once sekillin axrincisi gorsenir
                     // ve bu funksiyani cagririg ki
                    // sifirlansin ve birinci sekilden basdasin slider
 
next.addEventListener("click", function(){
     if(currentIndex===maxNumber-1){// sekilin indeksi sona catanda indeks sifirlanirki 1ci sekil gorsensin
        currentIndex=0
     }else{ //ekse halda if serti odenmiyende indeks artsin
        currentIndex++;
     }
     slidesMove(slides)
})


prev.addEventListener("click", function() {
    if (currentIndex === 0) {
        currentIndex = maxNumber - 1;
    } else {
        currentIndex--;
    }
    slidesMove(slides)
})



function slidesMove(slides){
    slides.forEach((slide,index) => {
        // slide.style.transform = `translateX(${(index - currentIndex ) * 110}%)`; // photo divine style veririk transletXnen yerlerini deyisdirik
        const move = (index - currentIndex + maxNumber) % maxNumber;
        const opacity = move === 1 ? 1 : 0.4;
        const scale = move === 1 ? 1 : 0.95;
        slide.style.transform = `translateX(${move * 100}%) scale(${scale})`;
        slide.style.opacity = opacity;
    })




}
