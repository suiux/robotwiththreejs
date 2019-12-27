import { Character } from '../characters/Character';
import { IControllable } from '../interfaces/IControllable';
import * as THREE from 'three';
import * as CANNON from 'cannon';
import { IWorldEntity } from '../interfaces/IWorldEntity';
import { World } from '../core/World';
import { KeyBinding } from '../core/KeyBinding';
import { VehicleSeat } from './VehicleSeat';
export declare abstract class Vehicle extends THREE.Object3D implements IControllable, IWorldEntity {
    controllingCharacter: Character;
    actions: {
        [action: string]: KeyBinding;
    };
    seats: VehicleSeat[];
    model: any;
    world: World;
    help: any;
    collision: CANNON.Body;
    private modelContainer;
    constructor();
    setModel(model: any): void;
    update(timeStep: number): void;
    onInputChange(): void;
    resetControls(): void;
    handleKeyboardEvent(event: KeyboardEvent, code: string, pressed: boolean): void;
    triggerAction(actionName: string, value: boolean): void;
    handleMouseButton(event: MouseEvent, code: string, pressed: boolean): void;
    handleMouseMove(event: MouseEvent, deltaX: number, deltaY: number): void;
    handleMouseWheel(event: WheelEvent, value: number): void;
    inputReceiverInit(): void;
    inputReceiverUpdate(timeStep: number): void;
    getMountPoint(character: Character): THREE.Vector3;
    addToWorld(world: World): void;
    setPosition(x: number, y: number, z: number): void;
    removeFromWorld(world: World): void;
    readGLTF(gltf: any): void;
}
