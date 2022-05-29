window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);

  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('isplaying');
  this.setTimeout(function() {
    key.classList.remove('isplaying');
  },500);
});



window.addEventListener('keydown', function(e){
  console.log(e.keyCode);
});