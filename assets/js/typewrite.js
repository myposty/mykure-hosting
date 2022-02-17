var app = document.getElementById('app');
var desc = document.getElementById('desc');
var typewriter = new Typewriter(app,{
  loop: true,
  delay: 75,
});


typewriter
  .pauseFor(500)
  .typeString('Mykure Hosting')
  .pauseFor(3000)
  .deleteChars(14)
  .typeString('Tu mejor opcion en alojamiento web en Paraguay')
  .pauseFor(3000)
  .start()
