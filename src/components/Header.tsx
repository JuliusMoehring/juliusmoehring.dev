import type { Component } from 'solid-js';

import heroImage from '../assets/images/riding.jpeg';

export const Header: Component = () => {
    return (
        <header class="flex sticky top-0 backdrop-blur w-full z-10">
            <img src={heroImage} class="w-full object-cover h-[25vh] blur-sm" />
        </header>
    );
};
