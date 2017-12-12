var slide = document.getElementsByClassName("slide"), interval =  setInterval(carousel, 3000), base = 0;
function carousel() {
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

var next = document.getElementsByClassName('next');
document.addEventListener('click', function(){
carousel(next)
});
var previous = document.getElementsByClassName('previous');
document.addEventListener('click', function(){
  carousel(-1)
});
