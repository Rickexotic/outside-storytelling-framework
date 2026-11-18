import { SceneEngine }
from "./engine/scene-engine.js";

import { StateEngine }
from "./engine/state-engine.js";

import { TransitionEngine }
from "./engine/transition-engine.js";

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
  .then(res => res.json())
  .then(presentation => {

    sceneEngine.load(
      presentation
    );

    sceneEngine.start();

    window.sceneEngine =
      sceneEngine;

  });
