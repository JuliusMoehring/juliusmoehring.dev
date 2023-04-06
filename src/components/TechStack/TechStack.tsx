import type { Component } from 'solid-js';
import { For } from 'solid-js';
import { Headline } from '../UI/Headline';
import { Paragraph } from '../UI/Paragraph';
import { TechStackEntry } from './TechStackEntry';

const stack = [
    {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: 'https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae',
    },
    {
        name: 'React JS',
        href: 'https://reactjs.org/',
        icon: 'https://reactjs.org/logo-180x180.png',
    },
    {
        name: 'Solid JS',
        href: 'https://www.solidjs.com/',
        icon: 'https://www.solidjs.com/img/favicons/apple-touch-icon.png',
    },
    {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: 'https://tailwindcss.com/favicons/apple-touch-icon.png?v=3',
    },
    {
        name: 'Remix',
        href: 'https://remix.run/',
        icon: 'https://remix.run/favicon-180.png',
    },
    {
        name: 'Astro',
        href: 'https://astro.build/',
        icon: 'https://astro.build/favicon.svg',
    },
    {
        name: 'Vite',
        href: 'https://vitejs.dev/',
        icon: 'https://vitejs.dev/logo.svg',
    },
    {
        name: 'Playwright',
        href: 'https://playwright.dev',
        icon: 'https://playwright.dev/img/playwright-logo.svg',
    },
    {
        name: 'Vitest',
        href: 'https://vitest.dev/',
        icon: 'https://vitest.dev/logo.svg',
    },
    {
        name: 'Python',
        href: 'https://www.python.org/',
        icon: 'https://www.python.org/static/favicon.ico',
    },
];

export const TechStack: Component = () => {
    return (
        <div class="flex flex-col gap-4">
            <Headline level="h2">Techstack</Headline>

            <Paragraph>
                Since I have started my career in tech as a frontend developer, most of my current tech stack is
                focussed on frontend technology. But I love learning, so I am always watching out for new and upcoming
                technologies, tools and languages. Currently I am learning Rust, but I am not yet confident enough to
                add it to my tech stack 👀.
            </Paragraph>

            <div class="flex flex-wrap gap-4">
                <For each={stack}>{entry => <TechStackEntry {...entry} />}</For>
            </div>

            <Paragraph>
                This page was build using{' '}
                <a href="https://astro.build/" class="hover:text-teal-500 font-bold" target="_blank">
                    Astro
                </a>
                ,{' '}
                <a href="https://www.solidjs.com/" class="hover:text-teal-500 font-bold" target="_blank">
                    Solid JS
                </a>
                ,{' '}
                <a href="https://www.typescriptlang.org/" class="hover:text-teal-500 font-bold" target="_blank">
                    TypeScript
                </a>{' '}
                and{' '}
                <a href="https://tailwindcss.com/" class="hover:text-teal-500 font-bold" target="_blank">
                    Tailwind CSS
                </a>
                .
            </Paragraph>
        </div>
    );
};
