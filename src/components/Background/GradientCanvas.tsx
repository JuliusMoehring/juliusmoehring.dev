import type { Component } from 'solid-js';
import { onMount } from 'solid-js';
import { Gradient } from './Gradient';

export const GradientCanvas: Component = () => {
    let canvasRef: HTMLCanvasElement | null;

    onMount(() => {
        const gradient = new Gradient();

        // @ts-ignore
        gradient.initGradient('#gradient-canvas');
    });

    return (
        <canvas
            ref={canvasRef!}
            class="absolute inset-0 h-screen w-screen"
            id="gradient-canvas"
            style={{
                '--gradient-color-1': '#000',
                '--gradient-color-2': '#000',
                '--gradient-color-3': '#14B8A6',
                '--gradient-color-4': '#000',
            }}
        />
    );
};
