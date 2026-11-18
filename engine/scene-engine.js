import { HeroRenderer } from "../renderers/hero.renderer.js";
import { ChapterRenderer } from "../renderers/chapter.renderer.js";
import { TimelineRenderer } from "../renderers/timeline.renderer.js";

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

   const activeContainer =
    document.getElementById(
        "scene-active"
    );

    const incomingContainer =
    document.getElementById(
        "scene-incoming"
    );

activeContainer.innerHTML = "";
    
    let renderer = null;

switch(scene.type) {

    case "hero-scene":

        renderer =
            new HeroRenderer(
                scene
            );

        break;

    case "chapter-scene":

    case "timeline-scene":

    renderer =
        new TimelineRenderer(
            scene
        );

    break;

        renderer =
            new ChapterRenderer(
                scene
            );

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

if (
    scene.type ===
    "chapter-scene"
) {

    incomingContainer.innerHTML =
        "";

    incomingContainer.appendChild(
        element
    );

  incomingContainer
    .classList.add(
        "scene-visible"
    );

} else {

    activeContainer.innerHTML =
        "";

    activeContainer.appendChild(
        element
    );

}
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

this.renderScene(
    current
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
