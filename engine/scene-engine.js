export class SceneEngine {

  constructor({
    stateEngine,
    transitionEngine
  }) {

    this.stateEngine = stateEngine;

    this.transitionEngine =
      transitionEngine;

    this.presentation = null;

    this.scenes = [];

    this.currentSceneIndex = 0;

  }

  load(presentation) {

    this.presentation = presentation;

    this.scenes =
      presentation.scenes || [];

  }

  start() {

    const scene =
      this.scenes[this.currentSceneIndex];

    console.log(
      "[Scene Start]",
      scene.id
    );

    this.stateEngine.start(scene);

  }

  nextScene() {

    if (
      this.currentSceneIndex >=
      this.scenes.length - 1
    ) return;

    const previous =
      this.scenes[this.currentSceneIndex];

    this.currentSceneIndex++;

    const current =
      this.scenes[this.currentSceneIndex];

    this.transitionEngine.run(
      previous.id,
      current.id,
      "scene-change"
    );

    this.stateEngine.start(current);

  }

}
