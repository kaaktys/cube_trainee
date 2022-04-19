let cube = document.getElementById("cube");
document.onmousemove = function () {
    var x = event.clientX,
        y = event.clientY;
    cube.style.transform = "rotateY(" + x + "deg)" + "rotateX(" + y + "deg)";
}

let sidesOfCube = document.querySelectorAll('.side')


let pinkBtn = document.getElementById('pink_btn')
let yellowBtn = document.getElementById('yellow_btn')
let greenBtn = document.getElementById('green_btn')

pinkBtn.addEventListener('click', () => sidesOfCube.forEach(el => el.style.backgroundColor = 'pink'))
yellowBtn.addEventListener('click', () => sidesOfCube.forEach(el => el.style.backgroundColor = 'yellow'))
greenBtn.addEventListener('click', () => sidesOfCube.forEach(el => el.style.backgroundColor = 'green'))