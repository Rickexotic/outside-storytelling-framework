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

    stateEngine.nextState();

}, 1000);

setTimeout(() => {

    stateEngine.nextState();

}, 4500);

setTimeout(() => {

    stateEngine.nextState();

}, 7500);

      

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
