import { ScriptMap } from "./tools";
/**
 * Defines the interface that exposes all exported scripts in this project.
 */
export interface ISceneScriptMap extends ScriptMap {
    "src/scenes/GameScripts/gameManager.ts": any;
    "src/scenes/GameScripts/sceneScriptBase.ts": any;
    "src/scenes/MainMap/mainMap.ts": any;
    "src/scenes/scene/camera.ts": any;
    "src/scenes/scene/graphs/GraphTest.ts": any;
    "src/scenes/scene/scene.ts": any;
}
/**
 * Defines the map of all available scripts in the project.
 */
export declare const scriptsMap: ISceneScriptMap;
