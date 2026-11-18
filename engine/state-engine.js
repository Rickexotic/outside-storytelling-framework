export class StateEngine {

constructor() {

    this.states = [];

    this.currentIndex = 0;

    this.renderer = null;

}
 start(scene) {

    this.states =
        scene.states || [];

    this.currentIndex = 0;

    this.renderer =
        scene.renderer || null;

    const currentState =
        this.getCurrentState();

    if (
        this.renderer &&
        currentState
    ) {

        this.renderer.update(
            currentState
        );

    }

    return currentState;

}
 nextState() {

    if (
        this.currentIndex <
        this.states.length - 1
    ) {

        this.currentIndex++;

    }

    const state =
        this.getCurrentState();

    if (
        this.renderer &&
        state
    ) {

        this.renderer.update(
            state
        );

    }

    return state;

}
previousState() {

    if (
        this.currentIndex > 0
    ) {

        this.currentIndex--;

    }

    const state =
        this.getCurrentState();

    if (
        this.renderer &&
        state
    ) {

        this.renderer.update(
            state
        );

    }

    return state;

}
  getCurrentState() {

    return this.states[this.currentIndex];

  }

}
