export class TimelineRenderer {

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
            "timeline-scene";

        const events =
            this.scene.events || [];

        section.innerHTML = `

            <div class="timeline-content">

                <div class="timeline-label">

                    HISTORIA

                </div>

                <h2 class="timeline-title">

                    ${this.scene.title || ""}

                </h2>

                <div class="timeline-items">

                    ${events.map(event => `

                        <div class="timeline-item">

                            <div class="timeline-year">

                                ${event.year}

                            </div>

                            <div class="timeline-event">

                                ${event.title}

                            </div>

                        </div>

                    `).join("")}

                </div>

            </div>

        `;

        this.root = section;

        return section;

    }

    enter() {

        console.log(
            "[TimelineRenderer] enter"
        );

    }

    update() {}

    exit() {}

    destroy() {}

}
