let click = new Audio('media/click.mp3');


$("main-box")
	.mouseenter(function() {
		click.play();
	});

// boxes = document.getElementsByClassName('body')
// boxes = Array.from(boxes)
// boxes.forEach((box)=>{
//     box.addEventListener('mouseover', ()=>{
//         click.play()
//     })
// })
