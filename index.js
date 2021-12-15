
var butlen=document.querySelectorAll('button').length

function chckevent(butinner){
  switch (butinner) {
    case 'w':
      var tom1= new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case 'a':
      var audio= new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

    case 's':
      var audio= new Audio('sounds/tom-3.mp3');
      audio.play();
      break;

    case 'd':
      var audio= new Audio('sounds/tom-4.mp3');
      audio.play();
      break;

    case 'j':
      var audio= new Audio('sounds/crash.mp3');
      audio.play();
      break;

    case 'k':
      var audio= new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

    case 'l':
      var audio= new Audio('sounds/snare.mp3');
      audio.play();
      break;

    default:
      console.log('no but clicked');

  }
}

for ( var i = 0; i < butlen; i++){

  document.querySelectorAll('button')[i].addEventListener('click', function(){
    var butinner1=this.innerHTML;
    chckevent(butinner1);
    butanim(butinner1);
    //console.log()

  })
}


document.addEventListener('keydown',function(event){chckevent(event.key);butanim(event.key);});

function butanim(currentKey){
  var actbut= document.querySelector('.'+currentKey);
  actbut.classList.add("pressed");

  setTimeout(function(){actbut.classList.remove("pressed");},100);
}
