export class HeroRenderer {

  constructor(scene) {

    this.scene = scene;

    this.root = null;

  }

  resolveHeadline() {

    const headline =
        this.scene.headline;

    if (!headline) {

        return "";

    }

    const width =
        window.innerWidth;

    if (
        width <= 768 &&
        headline.mobile
    ) {

        return headline.mobile;

    }

    if (
        width <= 1024 &&
        headline.tablet
    ) {

        return headline.tablet;

    }

    return (
        headline.desktop ||
        headline.tablet ||
        headline.mobile ||
        ""
    );

}

  render() {

    const section =
      document.createElement("section");

    section.className =
      "hero-scene";

   const headline =
    this.resolveHeadline();

section.innerHTML = `
    <div class="hero-content">

        <h1 class="hero-title">
            ${headline}
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

