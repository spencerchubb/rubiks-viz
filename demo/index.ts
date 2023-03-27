import { newScene, scenes, startLoop } from "./src/scene";

const sceneDiv = document.querySelector("#scene") as HTMLDivElement;
const canvas = document.querySelector("#canvas") as HTMLCanvasElement;

const scene = newScene(sceneDiv, canvas);
scene.dragEnabled = true;

scenes.push(scene);
startLoop();