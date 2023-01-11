for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
    var wor=this.innerHTML;
    makeSound(wor);
    buttonAnimation(wor);
    }); 
}
document.addEventListener("keypress",function(event){
makeSound(event.key);
buttonAnimation(event.key);
});
function makeSound(wor){
    if(wor==='w')
    {
     var audio = new Audio('sounds/crash.mp3');
     audio.play();
    }
    if(wor==='a')
    {
     var audio = new Audio('sounds/kick-bass.mp3');
     audio.play();
    }
    if(wor==='s')
    {
     var audio = new Audio('sounds/snare.mp3');
     audio.play();
    }
    if(wor=='d')
    {
     var audio = new Audio('sounds/tom-1.mp3');
     audio.play();
    }
    else if(wor=='j')
    {
     var audio = new Audio('sounds/tom-2.mp3');
     audio.play();
    }
    else if(wor=='k')
    {
     var audio = new Audio('sounds/tom-3.mp3');
     audio.play();
    }
    else if(wor=='l')
    {
     var audio = new Audio('sounds/tom-4.mp3');
     audio.play();
    }
}
function buttonAnimation(currentKey){
var buttonpressed = document.querySelector("."+currentKey);
buttonpressed.classList.add("pressed");
setTimeout(function(){
    buttonpressed.classList.remove("pressed");
},100);
}