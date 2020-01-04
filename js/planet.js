class Planet {
    constructor(planetSize, orbitSpeed, distanceFromSun, parent, color, emission, hasRings) {
        this.planetSize = planetSize;
        this.orbitSpeed = orbitSpeed;
        this.distanceFromSun = distanceFromSun;
        this.orbitLenght = distanceFromSun * 2 * PI;
        this.angle = random(2 * PI);
        this.color = color;
        this.emission = emission;
        this.hasRings = hasRings;
        this.children = [];
        this.parent = parent;

        if (parent) {
            parent.children.push(this);
        }
    }

    orbitMove() {
        if (this.orbitLenght > 0) {
            this.angle += this.orbitSpeed;
        }
        for (let planet of this.children) {
            planet.orbitMove();
        }

    }

    draw() {
        push();
        {
            push();
            {
                let orbitColor = color(30);
                strokeWeight(0.8);
                stroke(orbitColor);
                noFill();
                ellipse(0, 0, this.distanceFromSun * 2);
            }
            pop();

            if (this.emission) {
                fill(this.emission);
                scale(100);
                pointLight(this.emission, drag.x, drag.y, 0);
                scale(0.01);
            }

            rotate(-this.angle);
            translate(this.distanceFromSun, 0);
            if (this.emission) {
                ambientLight(this.emission);
            }
            ambientMaterial(255);
            fill(this.color);
            sphere(this.planetSize);
            for (let planet of this.children) {
                planet.draw();
            }
        }
        pop();
    }
}
