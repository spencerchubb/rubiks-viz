import { newScene } from "../src/";

const scenesContainer = document.querySelector("#scenesContainer") as HTMLDivElement;

createCube(3);
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
    div.style.boxShadow = "rgb(0 0 0 / 20%) 0 4px 12px";
    div.style.border = "solid 1px lightgray";
    // div.style.position = "relative";

    // We do not want the browser to cancel the pointer during pointermove events on the canvas.
    // See here: https://developer.mozilla.org/en-US/docs/Web/API/Element/pointermove_event 
    div.style.touchAction = "none";
    scenesContainer.appendChild(div);

    const scene = newScene(div);
    scene.cube.setNumOfLayers(layers);
}