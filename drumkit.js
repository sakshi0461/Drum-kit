
window.addEventListener("keydown",function(event){
const number=document.querySelector(`audio[data-key="${event.keyCode}"]`);
const key=document.querySelector(`.key[data-key="${event.keyCode}"]`);
setTimeout(function(){
    number.play();

    setTimeout(function(){
        number.pause();
        number.currentTime = 0;
    },200);
},0);
key.classList.add('automatic');
setTimeout(function(){
	key.classList.remove('automatic');
},200);
console.log(number);
});