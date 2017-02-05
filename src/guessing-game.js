class GuessingGame {
    constructor() {
      this._min = 0;
      this._max = 0;
      this._guess = null;
    }

    setRange(min, max) {
      this._min = min;
      this._max = max;
      if (min == max) {
        console.log("Min and Max values are equial!")
      }
    }

    guess() {
      this._guess = this._min + Math.round((this._max - this._min)/2);
      return this._guess;
    }

    lower() {
      if (this._guess==this._min) {
        throw new Error("Cheating! The Number is lower than the range!");
      }
      this._max = this._guess;
    }

    greater() {
      if (this._guess==this._min) {
        throw new Error("Cheating! The Number is greater than the range!");
      }
      this._min = this._guess;
    }
}

module.exports = GuessingGame;

// check if number > range
