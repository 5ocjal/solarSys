class Planet {
    constructor(planetSize, distanceFromSun, parent, texture, emission) {
        this.planetSize = planetSize;
        this.distanceFromSun = distanceFromSun;
        this.orbitLenght = distanceFromSun * 2 * PI;
        this.angle = random(2 * PI);
        this.texture = texture;
        this.emission = emission;
        this.children = [];
        this.parent = parent;

        if (parent) {
            parent.children.push(this);
        }
    }

    update() {
        if (this.orbitLenght > 0) {
            let speed = pow((width - this.distanceFromSun) / width, 0.5);
            this.angle += (speed / this.orbitLenght) * (2 * PI);
        }
        for (let planet of this.children) {
            planet.update();
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
            texture(this.texture);
            sphere(this.planetSize);
            for (let body of this.children) {
                body.draw();
            }
        }
        pop();
    }
}
