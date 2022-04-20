let cube1 = document.getElementById("cube1");
cube1.onmousemove = function () {
    let x = event.clientX,
        y = event.clientY;
    cube1.style.transform = "rotateY(" + x + "deg)" + "rotateX(" + y + "deg)";
}

let cube2 = document.getElementById("cube2");
cube2.onmousemove = function () {
    let x = event.clientX,
        y = event.clientY;
    cube2.style.transform = "rotateY(" + x + "deg)" + "rotateX(" + y + "deg)";
}

let sidesOfCube1 = [...document.querySelector('.cube1').children]
let sidesOfCube2 = [...document.querySelector('.cube2').children]

let pinkBtn = document.getElementById('pink_btn')
let yellowBtn = document.getElementById('yellow_btn')
let greenBtn = document.getElementById('green_btn')


let greyBtn = document.getElementById('grey_btn')
let purpleBtn = document.getElementById('purple_btn')
let blueBtn = document.getElementById('blue_btn')

pinkBtn.addEventListener('click', () => sidesOfCube1.forEach(el => el.style.backgroundColor = '#f1b1e9'))
yellowBtn.addEventListener('click', () => sidesOfCube1.forEach(el => el.style.backgroundColor = '#eae9b0'))
greenBtn.addEventListener('click', () => sidesOfCube1.forEach(el => el.style.backgroundColor = '#bef3a8'))

greyBtn.addEventListener('click', () => sidesOfCube2.forEach(el => el.style.backgroundColor = '#c9cfc6'))
purpleBtn.addEventListener('click', () => sidesOfCube2.forEach(el => el.style.backgroundColor = '#b36ac7'))
blueBtn.addEventListener('click', () => sidesOfCube2.forEach(el => el.style.backgroundColor = '#a7d9f4'))