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

    this.root = section;

    return section;

}
enter() {

    console.log(
        "[HeroRenderer] enter"
    );

    const searchText =
        document.getElementById(
            "search-text"
        );

    if (!searchText) {

        return;

    }

    const text =
        this.resolveHeadline();

    let index = 0;

    const timer =
        setInterval(() => {

            searchText.textContent =
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

