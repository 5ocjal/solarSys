let zoom = 1;
let drag;
let prevMouse;
let sun;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight - 4);
}


function setup() {
    drag = createVector(0, 0);
    let sunLight = color(240, 229, 182);

    createCanvas(windowWidth, windowHeight - 4, WEBGL);


    sun = new Planet(24, 0, null, loadImage('planets/sun1.jpg'), sunLight);
    mercury = new Planet(5, 60, sun, loadImage('planets/mercury.jpg'));
    venus = new Planet(8, 120, sun, loadImage('planets/venus.jpg'));
    earth = new Planet(9, 190, sun, loadImage('planets/earth1.jpg'));
    earthMoon =  new Planet(2, 25, earth, loadImage('planets/moon.jpg'));
    mars = new Planet(7, 260, sun, loadImage('planets/mars.jpg'));
    marsPhobos = new Planet(3, 22, mars, loadImage('planets/phobos.jpg'));
    marsDeimos = new Planet(2, 30, mars, loadImage('planets/deimos.jpg'));
}

function draw() {
    background(16);
    noStroke();
    ambientMaterial(255);
    ambientLight(42);
    orbitControl();
    rotateX(PI / 2);

    sun.update();
    sun.draw();
}

function mousePressed() {
    prevMouse = createVector(mouseX, mouseY);
}


function mouseWheel(event) {
    zoom += event.delta * 0.0005;
}







