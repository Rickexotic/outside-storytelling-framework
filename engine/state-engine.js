export class StateEngine {

  constructor() {
    this.states = [];
    this.currentIndex = 0;
  }

  start(scene) {

    this.states = scene.states || [];

    this.currentIndex = 0;

    return this.getCurrentState();

  }

  nextState() {

    if (this.currentIndex < this.states.length - 1) {

      this.currentIndex++;

    }

    return this.getCurrentState();

  }

  previousState() {

    if (this.currentIndex > 0) {

      this.currentIndex--;

    }

    return this.getCurrentState();

  }

  getCurrentState() {

    return this.states[this.currentIndex];

  }

}
