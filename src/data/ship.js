export default class Ship {
    #timesHit;
    #size;
    constructor(integer) {
        this.#size = integer;
        this.#timesHit = 0;
    }

    hit() {
        this.#timesHit++;
        return this;
    }

    isSunk() {
        if(this.#timesHit >= this.#size) return true;
        else return false;
    }
}
