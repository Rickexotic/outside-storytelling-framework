import { HeroRenderer } from "../renderers/hero.renderer.js";

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

    this.renderScene(scene);

}

  renderScene(scene) {

    const container =
        document.getElementById(
            "scene-container"
        );

    container.innerHTML = "";

    let renderer = null;

    switch(scene.type) {

        case "hero-scene":

            renderer =
                new HeroRenderer(scene);

            break;

        default:

            console.warn(
                "Renderer no implementado:",
                scene.type
            );

            return;

    }
    
const element =
    renderer.render();

container.appendChild(
    element
);

/*
Guardamos el renderer
en la escena activa
*/

scene.renderer =
    renderer;

this.stateEngine.renderer =
    renderer;

renderer.enter();
}
nextScene() {

    if (
        this.currentSceneIndex >=
        this.scenes.length - 1
    ) {
        return;
    }

    const previous =
        this.scenes[
            this.currentSceneIndex
        ];

    this.currentSceneIndex++;

    const current =
        this.scenes[
            this.currentSceneIndex
        ];

    this.transitionEngine.run(
        previous.id,
        current.id,
        "scene-change"
    );

    this.stateEngine.start(
        current
    );

}

getCurrentScene() {

    return this.scenes[
        this.currentSceneIndex
    ];

}

}
