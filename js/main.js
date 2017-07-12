var slide = document.getElementsByClassName("slide");
//var allSlides = document.getElementsByClassName('allSlides');
//var previous = document.getElementsByClassName('previous');
//var next = document.getElementsByClassName('next');
var interval =  setInterval(carousel, 2000);
var base=0;

function carousel(){
for (var i=0; i<slide.length; i++){
  slide[i].style.display = 'none';
  }
  base++;
    if (base>slide.length){
      base=1;
  }
  slide[base-1].style.display='block';
}

carousel();
