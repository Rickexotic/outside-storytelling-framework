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

        id: "typing"

    });

}, 1000);

setTimeout(() => {

    stateEngine.nextState();

}, 1000);

setTimeout(() => {

    stateEngine.nextState();

}, 5000);
        
        window.sceneEngine =
            sceneEngine;

        window.stateEngine =
            stateEngine;

        /*
        SPRINT 2.2
        Simulación manual de estados
        */

        setTimeout(() => {

            const scene =
                sceneEngine.getCurrentScene?.();

            if (!scene?.renderer) {
                return;
            }

            scene.renderer.update({
                id: "typing"
            });

        }, 1000);

        setTimeout(() => {

            const scene =
                sceneEngine.getCurrentScene?.();

            if (!scene?.renderer) {
                return;
            }

            scene.renderer.update({
                id: "complete"
            });

        }, 5000);

    })

    .catch(error => {

        console.error(
            "Error cargando presentación:",
            error
        );

    });
