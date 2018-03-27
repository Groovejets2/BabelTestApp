"use strict";

class Planet {

  constructor (mass, moons) {
    this.mass  = mass;
    this.moons = moons || 0;
  }

  reportMoons () {
    console.log(`I have ${this.moons} moons.`)
  }

}

// Yeah, Jupiter really does have (at least) 67 moons.
const jupiter = new Planet('Pretty Big', 67);
jupiter.reportMoons();