let click = new Audio('media/click.mp3');

boxes = document.getElementsByClassName('body')
boxes = Array.from(boxes)
boxes.forEach((box)=>{
    box.addEventListener('mouseover', ()=>{
        click.play()
    })
})
