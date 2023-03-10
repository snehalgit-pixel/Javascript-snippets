/* Demonstrating classes*/
export class Animal {
    constructor(family, legs) {
        this.family = 'Cat Family';
        this.legs = 4;
    }
    makeNoise(sound) {
        console.log("Sound->" + sound);

    }
}

/* This will be imported in the practice19.js file
Object of this class is in practice19.js
*/