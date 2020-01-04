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
    let sunSize = 50;
    let zoomJupiter = 2
    let zoomOther = zoomJupiter * 2;

    createCanvas(windowWidth, windowHeight - 4, WEBGL);


    sun = new Planet(24, 0, null, loadImage('planets/sun1.jpg'), sunLight);

    // PLANETS
    mercury = new Planet(1.149, (sunSize + 38.7), sun, loadImage('planets/mercury.jpg'));
    venus = new Planet(2.847, (sunSize + 72.3), sun, loadImage('planets/venus.jpg'));
    earth = new Planet(10, (sunSize + 100), sun, loadImage('planets/earth.jpg'));
    mars = new Planet(1.596, (sunSize + 152), sun, loadImage('planets/mars.jpg'));
    jupiter = new Planet(33.63, (sunSize + 520/zoomJupiter), sun, loadImage('planets/jupiter.jpg'));
    saturn = new Planet(28.35, (sunSize + 958/zoomJupiter), sun, loadImage('planets/saturn.jpg'));
    uranus = new Planet(12.03, (sunSize + 1920/zoomOther), sun, loadImage('planets/uranus.jpg'));
    neptune = new Planet(11.64, (sunSize + 3005/zoomOther), sun, loadImage('planets/neptune.jpg')); 


    // MOONS
    earthMoon =  new Planet(0.8172, 25, earth, loadImage('planets/moon.jpg'));
    marsDeimos = new Planet(0.42, 30, mars, loadImage('planets/deimos.jpg'));
    marsPhobos = new Planet(0.48, 22, mars, loadImage('planets/phobos.jpg'));
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







