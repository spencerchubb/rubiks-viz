import { newScene, scenes } from "../src/";

const scenesContainer = document.querySelector("#scenesContainer") as HTMLDivElement;

const scene = createCube(3);
scene.keysEnabled = true;

for (let i = 1; i < 10; i++) {
    createCube(i);
}

function createCube(layers: number) {
    let div = document.createElement("div");
    div.style.width = "320px";
    div.style.height = "320px";
    div.style.minWidth = "320px";
    div.style.minHeight = "320px";
    div.style.borderRadius = "8px";
    div.style.boxShadow = "rgb(255 255 255 / 20%) 0 4px 12px";

    scenesContainer.appendChild(div);

    const scene = newScene(div, layers);
    scene.keysEnabled = false;

    div.addEventListener("click", () => {
        scenes.forEach(s => s.keysEnabled = false);
        scene.keysEnabled = true;
    });
    return scene;
}