const info = document.querySelector('.information');
const contact = document.querySelector('.contact');
const logo = document.querySelector('.logo');
const navigation = document.querySelector('.navigation');
const text = document.querySelector('.text');
const txt = document.querySelector('.txt-rotate');
const exit = document.querySelector('.exit');

//Sekcja header image
$(window).scroll(function() {
    var scrolPosition = $(this).scrollTop();
    $('header').css({
       'background-size' : 100 + scrolPosition + '%',
    })
    if($(window).width() < 960){
        $('header').css({
            'background-size' : 'auto',
         })
    }
    
  })
  


//Koniec sekcji header image

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
var i = this.loopNum % this.toRotate.length;
var fullTxt = this.toRotate[i];
if (this.isDeleting) {
this.txt = fullTxt.substring(0, this.txt.length - 1);
} else {
this.txt = fullTxt.substring(0, this.txt.length + 1);
}
this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
var that = this;
var delta = 150 - Math.random() * 100;
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
var elements = document.getElementsByClassName('txt-rotate');
for (var i=0; i<elements.length; i++) {
var toRotate = elements[i].getAttribute('data-rotate');
var period = elements[i].getAttribute('data-period');
if (toRotate) {
new TxtRotate(elements[i], JSON.parse(toRotate), period);
}
}
var css = document.createElement("style");
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

//Sekcja cursor
(function(){
var msg = "{}";
var size = 24;
var circleY = 1; var circleX = 1;
var letter_spacing = 4;
var diameter = 20;
var rotation = 0.2;
var speed = 0.5;
if (!window.addEventListener && !window.attachEvent || !document.createElement) return;
msg = msg.split('');
var n = msg.length - 1, a = Math.round(size * diameter * 0.20), currStep = 20,
ymouse = a * circleY + 20, xmouse = a * circleX + 20, y = [], x = [], Y = [], X = [],
o = document.createElement('div'), oi = document.createElement('div'),
b = document.compatMode && document.compatMode != "BackCompat"? document.documentElement : document.body,
mouse = function(e){
e = e || window.event;
ymouse = !isNaN(e.pageY)? e.pageY : e.clientY;
xmouse = !isNaN(e.pageX)? e.pageX : e.clientX; 
},
makecircle = function(){
if(init.nopy){
o.style.top = (b || document.body).scrollTop + 'px';
o.style.left = (b || document.body).scrollLeft + 'px';
};
currStep -= rotation;
for (var d, i = n; i > -1; --i){ 
d = document.getElementById('iemsg' + i).style;
d.top = Math.round(y[i] + a * Math.sin((currStep + i) / letter_spacing) * circleY - 15) + 'px';
d.left = Math.round(x[i] + a * Math.cos((currStep + i) / letter_spacing) * circleX) + 'px';
};
},

drag = function(){ 
y[0] = Y[0] += (ymouse - Y[0]) * speed;
x[0] = X[0] += (xmouse - 20 - X[0]) * speed;
for (var i = n; i > 0; --i){
y[i] = Y[i] += (y[i-1] - Y[i]) * speed;
x[i] = X[i] += (x[i-1] - X[i]) * speed;
};
makecircle();
},
init = function(){ 
if(!isNaN(window.pageYOffset)){
ymouse += window.pageYOffset;
xmouse += window.pageXOffset;
} else init.nopy = true;
for (var d, i = n; i > -1; --i){
d = document.createElement('div'); d.id = 'iemsg' + i;
d.style.height = d.style.width = a + 'px';
d.appendChild(document.createTextNode(msg[i]));
oi.appendChild(d); y[i] = x[i] = Y[i] = X[i] = 0;
};
o.appendChild(oi); document.body.appendChild(o);
setInterval(drag, 25);
},
ascroll = function(){
ymouse += window.pageYOffset;
xmouse += window.pageXOffset;
window.removeEventListener('scroll', ascroll, false);
};
o.id = 'outerCircleText'; o.style.fontSize = size + 'px';
if (window.addEventListener){
window.addEventListener('load', init, false);
document.addEventListener('mouseover', mouse, false);
document.addEventListener('mousemove', mouse, false);
if (/Apple/.test(navigator.vendor))
window.addEventListener('scroll', ascroll, false);
}
else if (window.attachEvent){
window.attachEvent('onload', init);
document.attachEvent('onmousemove', mouse);
};
})();
//Koniec sekcji cursor