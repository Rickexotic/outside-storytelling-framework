export class ChapterRenderer {

    constructor(scene) {

        this.scene = scene;

        this.root = null;

    }

    render() {

        const section =
            document.createElement(
                "section"
            );

        section.className =
            "chapter-scene";

        section.innerHTML = `
            <div class="chapter-content">

                <div class="chapter-label">

                    CAPÍTULO

                </div>

                <h2 class="chapter-title">

                    ${this.scene.title || ""}

                </h2>

            </div>
        `;

        this.root =
            section;

        return section;

    }

    enter() {

        console.log(
            "[ChapterRenderer] enter"
        );

    }

    update(state) {

        console.log(
            "[ChapterRenderer] update",
            state
        );

    }

    exit() {}

    destroy() {}

}
