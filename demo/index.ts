import { newPyraminx, newCube, scenes } from "../src/";

const scenesContainer = document.querySelector("#scenesContainer") as HTMLDivElement;

createPyraminx();

for (let i = 2; i < 7; i++) {
    createCube(i);
}

function createDiv(): HTMLDivElement {
    let div = document.createElement("div");
    div.style.width = "320px";
    div.style.height = "320px";
    div.style.minWidth = "320px";
    div.style.minHeight = "320px";
    div.style.borderRadius = "8px";
    div.style.boxShadow = "rgb(255 255 255 / 20%) 0 4px 12px";

    scenesContainer.appendChild(div);

    return div;
}

function createCube(layers: number) {
    let div = createDiv();
    const scene = newCube(div, layers);
    scene.enableKey = (_) => true;
    return scene;
}

function createPyraminx() {
    let div = createDiv();
    const scene = newPyraminx(div);
    scene.enableKey = (_) => true;
    return scene;
}
