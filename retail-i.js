

var app = document.getElementById('animate');

var typewriter = new Typewriter(animate, {
    loop: true
});

typewriter.typeString('Discover the power of in-store shopper analytics')
    .pauseFor(900)
    .deleteAll()
    .typeString('Join the retail revolution...')
    .pauseFor(900)
    .deleteAll()
    .pauseFor(50)
    .start();
