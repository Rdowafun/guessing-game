class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.middle = 0;
    }

    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
        this.middle = Math.round((this.max - this.min) / 2) + this.min;
        return this.middle
    }

    lower() {
        this.max = this.guess()
        return this.max
    }

    greater() {
        this.min = this.guess()
        return this.min
    }
}

module.exports = GuessingGame;