import type { Component } from 'solid-js';
import { CLIIcon } from '../icons/SetupIcons';
import { SetupCard } from './SetupCard';
import type { SetupEntry } from './SetupEntry';

const developmentTools: SetupEntry[] = [
    {
        name: 'Zed',
        description:
            "Zed is a high-performance, multiplayer code editor from the creators of Atom and Tree-sitter. It's also open source.",
        logo: 'https://zed.dev/favicon_white_64.png',
    },
    {
        name: 'Warp',
        description:
            'The best terminal I have ever used! Its suoer fast, its fully native (written in Rust) and it has a great plugin ecosystem. It offers a super nice auto completion and a great search feature.',
        logo: 'https://assets-global.website-files.com/62176f9ffac2c484f913de2a/6228aef0377caa51b5764d94_favicon.png',
    },
    {
        name: 'Arc',
        description:
            'After working with Chrome for a few years, I first switched to Brave and now to Arc. It is a privacy focused browser based on Chromium. It offers nice features like spaces and split view that make my workflow more efficient. Like Brave it has a build in AdBlocker and because its build ontop of Chromium, you can use all the extensions you are used to.',
        logo: 'https://arc.net/favicon.png',
    },
];

export const DevelopmentTools: Component = () => {
    return <SetupCard title="Development Tools" icon={CLIIcon} entries={developmentTools} />;
};
