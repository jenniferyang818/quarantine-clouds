new TypeIt("#subtitle", {
    speed: 100,
    startDelay: 200, 
    waitUntilVisible: true
  })
    .type("was hot", {delay: 300})
    .delete(3)
    .type('VERY hot.')
    .go();

