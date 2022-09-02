export default class WishList {
    constructor() {
        this.list = [];
        this.nextId = 0;
    }
    add(make, model, year) {
        let car = new Car (this.nextId++, make, model, year);
        this.list.push (car);
        console.log (this.list);
    }
    remove (id) {
        let idx = this.list.findIndex ((car) => car.id === id)
        this.list.splice (idx, 1)
    }
}

import Car from './car.js';