import { SceneEngine } from "./engine/scene-engine.js";
import { StateEngine } from "./engine/state-engine.js";
import { TransitionEngine } from "./engine/transition-engine.js";

const stateEngine =
    new StateEngine();

const transitionEngine =
    new TransitionEngine();

const sceneEngine =
    new SceneEngine({

        stateEngine,
        transitionEngine

    });

fetch("./data/presentation.json")

    .then(response => response.json())

    .then(presentation => {

        sceneEngine.load(
            presentation
        );

        sceneEngine.start();
        setTimeout(() => {

    const scene =
        sceneEngine.getCurrentScene();

    scene.renderer.update({

        id: "collapse"

    });

}, 4000);

setTimeout(() => {

    sceneEngine.nextScene();

}, 5500);

        window.sceneEngine =
            sceneEngine;

        window.stateEngine =
            stateEngine;

        console.log(
            "Framework iniciado"
        );

    })

    .catch(error => {

        console.error(
            "Error cargando presentación:",
            error
        );

    });
