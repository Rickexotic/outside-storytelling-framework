export class HeroRenderer {

 constructor(scene) {

    this.scene = scene;

    this.root = null;

    this.searchText = null;

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

    const isSearchMode =
        this.scene.layout?.desktop ===
        "search";

    if (isSearchMode) {

        section.innerHTML = `
            <div class="hero-content">

                <div class="search-hero">

                    <div class="search-bar">

                        <span
                            id="search-text"
                            class="search-text">
                        </span>

                        <span
                            class="search-cursor">
                            |
                        </span>

                    </div>

                </div>

            </div>
        `;

    } else {

        section.innerHTML = `
            <div class="hero-content">

                <h1 class="hero-title">
                    ${headline}
                </h1>

            </div>
        `;

    }

  this.searchText =
    section.querySelector(
        "#search-text"
    );
  
    this.root = section;

    return section;

}
enter() {

    console.log(
        "[HeroRenderer] enter"
    );

    this.update({
        id: "complete"
    });

}
update(state) {

    console.log(
        "[HeroRenderer] update",
        state
    );

    console.log(
        "[HeroRenderer] searchText",
        this.searchText
    );

    if (!this.searchText) {

        return;

    }

    const text =
        this.resolveHeadline();

    switch(state.id) {

        case "empty":

            this.searchText.textContent =
                "";

            break;

        case "typing":

            this.typeText(text);

            break;

        case "complete":

            this.searchText.textContent =
                text;

            break;
      case "collapse":

    this.searchText.textContent =
        text;

    if (this.root) {

        this.root.classList.add(
            "hero-collapsed"
        );

    }

    break;

    }

}

typeText(text) {

    this.searchText.textContent =
        "";

    let index = 0;

    const timer =
        setInterval(() => {

            this.searchText.textContent =
                text.slice(
                    0,
                    index
                );

            index++;

            if (
                index >
                text.length
            ) {

                clearInterval(
                    timer
                );

            }

        }, 30);

}


}

