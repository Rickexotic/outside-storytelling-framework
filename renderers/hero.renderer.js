export class HeroRenderer {

  constructor(scene) {

    this.scene = scene;

    this.root = null;

  }

  render() {

    const section =
      document.createElement("section");

    section.className =
      "hero-scene";

    section.innerHTML = `
      <div class="hero-content">

        <h1 class="hero-title">
          ${this.scene.title}
        </h1>

      </div>
    `;

    this.root = section;

    return section;
  }

  enter() {

    console.log(
      "[HeroRenderer] enter"
    );

  }

  update(state) {

    console.log(
      "[HeroRenderer] update",
      state
    );

  }

  exit() {

    console.log(
      "[HeroRenderer] exit"
    );

  }

}

