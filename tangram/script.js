const position_triangle1 = { x: 0, y: 0 }
const position_triangle2 = { x: 0, y: 0 }
const position_triangle3 = { x: 0, y: 0 }
const position_triangle4 = { x: 0, y: 0 }
const position_triangle5 = { x: 0, y: 0 }
const position_square_r = { x: 0, y: 0 }
const position_parallelogram = { x: 0, y: 0 }


interact('.square_r').draggable({
    listeners: {
      start (event) {
        console.log(event.type, event.target)
      },
      move (event) {
          position_square_r.x += event.dx
          position_square_r.y += event.dy
  
        event.target.style.transform =
          `translate(${position_square_r.x}px, ${position_square_r.y}px) rotate(45deg)`
      },
    }
  })


interact('.triangle1').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
        position_triangle1.x += event.dx
        position_triangle1.y += event.dy

      event.target.style.transform =
        `translate(${position_triangle1.x}px, ${position_triangle1.y}px)`        
    },
  }
})

interact('.triangle2').draggable({
    listeners: {
      start (event) {
        console.log(event.type, event.target)
      },
      move (event) {
          position_triangle2.x += event.dx
          position_triangle2.y += event.dy
  
        event.target.style.transform =
          `translate(${position_triangle2.x}px, ${position_triangle2.y}px)`
      },
    }
  })

interact('.triangle3').draggable({
    listeners: {
      start (event) {
        console.log(event.type, event.target)
      },
      move (event) {
          position_triangle3.x += event.dx
          position_triangle3.y += event.dy
  
        event.target.style.transform =
          `translate(${position_triangle3.x}px, ${position_triangle3.y}px)`
      },
    }
  })

  interact('.triangle4').draggable({
    listeners: {
      start (event) {
        console.log(event.type, event.target)
      },
      move (event) {
          position_triangle4.x += event.dx
          position_triangle4.y += event.dy
  
        event.target.style.transform =
          `translate(${position_triangle4.x}px, ${position_triangle4.y}px)`
      },
    }
  })

  interact('.triangle5').draggable({
    listeners: {
      start (event) {
        console.log(event.type, event.target)
      },
      move (event) {
          position_triangle5.x += event.dx
          position_triangle5.y += event.dy
  
        event.target.style.transform =
          `translate(${position_triangle5.x}px, ${position_triangle5.y}px)`
      },
    }
  })

  interact('.parallelogram').draggable({
    listeners: {
      start (event) {
        console.log(event.type, event.target)
      },
      move (event) {
          position_parallelogram.x += event.dx
          position_parallelogram.y += event.dy
  
        event.target.style.transform =
          `translate(${position_parallelogram.x}px, ${position_parallelogram.y}px) skewY(-45deg)`
      },
    }
  })

  document.addEventListener('touchmove', function(e) {
    e.preventDefault();
  }, { passive: false });