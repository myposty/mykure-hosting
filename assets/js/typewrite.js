var app = document.getElementById('app');
var desc = document.getElementById('desc');
var typewriter = new Typewriter(app,{
  loop: true,
  delay: 75,
});

var descripcion = new Typewriter(desc,{
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


  descripcion
  .typeString('Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorem reprehenderit mollitia ipsa, quasi dolor nemo. Dolorum repellendus, atque doloremque, tempore excepturi impedit nulla id veniam voluptate iure aliquid modi nisi deserunt illo numquam consequuntur exercitationem obcaecati incidunt delectus velit optio facilis fugit? Facilis enim exercitationem reiciendis aspernatur quae in soluta. Accusamus neque blanditiis magni ducimus! Ullam ad quo temporibus quam! Molestiae, delectus, ullam iusto possimus assumenda repellendus commodi quis veniam eveniet nihil, architecto distinctio a veritatis provident sed sunt eum nostrum eos quod ipsa hic tempora in aspernatur! Eligendi placeat ut, nisi pariatur molestiae totam debitis illo vel distinctio.')
  .pauseFor(60000)
  .start()