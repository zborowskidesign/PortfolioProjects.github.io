const info = document.querySelector('.information');
const contact = document.querySelector('.contact');
const logo = document.querySelector('.logo');
const navigation = document.querySelector('.navigation');
const text = document.querySelector('.text');
const txt = document.querySelector('.txt-rotate');
const exit = document.querySelector('.exit');

//Sekcja header image

$(window).scroll(function() {
    let scrolPosition = $(this).scrollTop();
    $('header').css({
       'background-size' : 100 + scrolPosition + '%',
    })
    if($(window).width() < 960){
        $('header').css({
            'background-size' : 'auto',
         })
    }
    
  })
  

//Sekcja kontakt

info.addEventListener('click',function(){
contact.style.display = 'block';
logo.style.display = 'none';
navigation.style.display = 'none';
text.style.display = 'none';
txt.style.display = 'none';
})
exit.addEventListener('click',function(){
contact.style.display = 'none';
logo.style.display = 'block';
navigation.style.display = 'inline-block';
text.style.display = 'block';
txt.style.display = 'block';
})
//Koniec sekcji kontakt
 
//Sekcja wjeżdżający element

$(document).on('scroll',function(){
const windowHeight = $(window).height()
const scrollValue = $(this).scrollTop()
console.log(scrollValue)
const $txtOne = $('.purpose');
const $txtTwo = $('.hobby');
const txtFromTop = $txtOne.offset().top
const txtTwoFromTop = $txtTwo.offset().top
const txtOneHeight = $txtOne.outerHeight()
const txtTwoHeight = $txtTwo.outerHeight()
const $card = $('.card-container');
const cardFromTop = $card.offset().top
const cardHeight = $card.outerHeight()
  
if(scrollValue > txtFromTop + txtOneHeight - windowHeight){
$txtOne.addClass('active');
}
if(scrollValue > txtTwoFromTop + txtTwoHeight - windowHeight){
$txtTwo.addClass('active');
}
if(scrollValue > cardFromTop + cardHeight - windowHeight){
$card.addClass('opactive');
}
})

//Koniec sekcji wjeżdżający element

//Sekcja typing
var TxtRotate = function(el, toRotate, period) {
this.toRotate = toRotate;
this.el = el;
this.loopNum = 0;
this.period = parseInt(period, 500) || 1000;
this.txt = '';
this.tick();
this.isDeleting = false;
};
  
TxtRotate.prototype.tick = function() {
let i = this.loopNum % this.toRotate.length;
let fullTxt = this.toRotate[i];
if (this.isDeleting) {
this.txt = fullTxt.substring(0, this.txt.length - 1);
} else {
this.txt = fullTxt.substring(0, this.txt.length + 1);
}
this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
let that = this;
let delta = 150 - Math.random() * 100;
if (this.isDeleting) { delta /= 2; }
if (!this.isDeleting && this.txt === fullTxt) {
delta = this.period;
this.isDeleting = true;
} else if (this.isDeleting && this.txt === '') {
this.isDeleting = false;
this.loopNum++;
delta = 1000;
}
setTimeout(function() {
that.tick();
}, delta);
};
  
window.onload = function() {
let elements = document.getElementsByClassName('txt-rotate');
for (var i=0; i<elements.length; i++) {
let toRotate = elements[i].getAttribute('data-rotate');
let period = elements[i].getAttribute('data-period');
if (toRotate) {
new TxtRotate(elements[i], JSON.parse(toRotate), period);
}
}
let css = document.createElement("style");
css.type = "text/css";
css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #F26921 }";
document.body.appendChild(css);
};
//Koniec sekcji typing
  
//Sekcja card-me
/*const iconTv = document.querySelector('.fa-tv');
const bg = document.querySelector('.card-me');
const windowWidth = window.innerWidth / 5;
const windowHeight = window.innerHeight / 5 ;
bg.addEventListener('mousemove', (e) => {
const mouseX = e.clientX / windowWidth;
const mouseY = e.clientY / windowHeight;
bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});
*/
//Sekcja flip background
$(document).ready(function(){
    $('.container div').mouseover(
        function(){
            $(this).addClass('flip')
        }
    )
})

