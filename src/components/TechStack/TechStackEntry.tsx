import type { Component } from 'solid-js';

interface TechStackEntry {
    name: string;
    href: string;
    icon: string;
}

export const TechStackEntry: Component<TechStackEntry> = ({ name, href, icon }) => {
    return (
        <a
            href={href}
            aria-label={name}
            class="hover:grayscale grayscale-0 hover:scale-95 h-16 w-16 rounded-2xl border border-zinc-700/40 flex justify-center items-center"
            target="_blank"
        >
            <img src={icon} alt={name} class="w-10 h-10 rounded" draggable={false} />
        </a>
    );
};
