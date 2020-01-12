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
    let colors = {
        sun: color(250, 205, 30),
        mercury: color(89, 49, 27),
        venus: color(214, 171, 148),
        earth: color(124, 160, 217),
        mars: color(148, 45, 35),
        jupiter: color(245, 216, 181),
        saturn: color(173, 130, 78),
        uranus: color(124, 214, 217),
        neptune: color(11, 95, 227),

        moons: color(169, 174, 184),
    };

    createCanvas(windowWidth, windowHeight - 4, WEBGL);


    sun = new Planet(sunSize, 0, 0, null, colors.sun, sunLight);


    // TERRESTRIAL PLANETS
    mercury = new Planet(5, 0.04, (sunSize + 38.7), sun, colors.mercury);
    venus = new Planet(11, 0.032, (sunSize + 72.3), sun, colors.venus);
    earth = new Planet(12, 0.02, (sunSize + 92.2), sun, colors.earth);
    mars = new Planet(9, 0.01, (sunSize + 152), sun, colors.mars);

    // OUTER PLANETS
    jupiter = new Planet(23, 0.024, (sunSize + 520 / zoomJupiter), sun, colors.jupiter);
    saturn = new Planet(28.35, 0.023, (sunSize + 958 / zoomJupiter), sun, colors.saturn);
    uranus = new Planet(12.03, 0.017, (sunSize + 1920 / zoomOther), sun, colors.uranus);
    neptune = new Planet(11.64, 0.009, (sunSize + 3005 / zoomOther), sun, colors.neptune);


    // // MOONS
    earthMoon = new Planet(3, 0.02, 25, earth, colors.moons);
    marsDeimons = new Planet(2, 0.04, 24, mars, colors.moons);
    marsPhobos = new Planet(1.5, 0.03, 28, mars, colors.moons);
}

function draw() {
    background(16);
    noStroke();
    ambientMaterial(255);
    ambientLight(42);
    orbitControl();
    rotateX(PI / 2);

    sun.orbitMove();
    sun.draw();
}

function mousePressed() {
    prevMouse = createVector(mouseX, mouseY);
}


function mouseWheel(event) {
    zoom += event.delta * 0.0005;
}

function terrestrialPlanets() {
    console.log('terrestrialPlanet');
}

function asteroidBelt() {
    console.log('hideAsteroidBelt');
}

function outerPlanets() {
    console.log('outerPlanets');
    
}









