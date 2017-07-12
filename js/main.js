var slide = document.getElementsByClassName('slide');
var previous = document.getElementsByClassName('previous');
var next = document.getElementsByClassName('next');
slider();



function slider(){
var slideChange = 0;
for (var i=0; i<slide.length; i++){
  slide[i].style.display = 'none';
}
slideChange++;
if (slideChange>slide.length) {
  slideChange=1;
}
slide[slideChange-1].style.display='block';
setInterval(slider, 2000);
}
/*setInterval(function(){
  slide[i];}, 3000);*/
