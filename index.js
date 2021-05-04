var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    //this.style.color="white";
    // console.log(this.innerHTML);
    var buttonInnerHTML = this.innerHTML;
    makeSoundd(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);




    //alert("I got Click!");

    //What to do when click detect.

  });
}
document.addEventListener("keypress",function(event){
  makeSoundd(event.key);
  buttonAnimation(event.key);
});

function makeSoundd(key){
  switch (key) {

    case "w":
      var audio = new Audio("tom-1.mp3");
      audio.play();
      console.log(key);
      break;
    case "a":
      var audio = new Audio("tom-2.mp3");
      audio.play();
      console.log(key);
      break;
    case "s":
      var audio = new Audio("tom-3.mp3");
      audio.play();
      console.log(key);
      break;
    case "j":
      var audio = new Audio("snare.mp3");
      audio.play();
      console.log(key);
      break;
    case "k":
      var audio = new Audio("crash.mp3");
      audio.play();
      console.log(key);
      break;
    case "l":
      var audio = new Audio("kick-bass.mp3");
      audio.play();
      console.log(key);
      break;
    case "d":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();
      console.log(key);
      break;
    default:
    console.log(key);

}
}
document.addEventListener("keypress",function(event){
console.log("key is pressed!");
});


function buttonAnimation(currentKey){

var active=document.querySelector("."+currentKey);

active.classList.add("pressed");

setTimeout(function(){
  active.classList.remove("pressed");
},100);

}
