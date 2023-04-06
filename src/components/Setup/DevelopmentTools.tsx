import type { Component } from 'solid-js';
import { CLIIcon } from '../icons/SetupIcons';
import { SetupCard } from './SetupCard';
import type { SetupEntry } from './SetupEntry';

const developmentTools: SetupEntry[] = [
    {
        name: 'Visual Studio Code',
        description:
            'I used to work with JetBrains products only, but since a few years I am using Visual Studio Code as my main editor. It is fast, lightweight and has a great extension ecosystem.',
        logo: 'https://code.visualstudio.com/favicon.ico',
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
    {
        name: 'TablePlus',
        description:
            'TablePlus is in my opinion the most appealing GUI tool for relational databases. It has a super modern look and feel and supports all the major databases. One thing I like in particular is beeing able to export and share database connections with your teammates.',
        logo: 'https://tableplus.com/resources/favicons/apple-icon-76x76.png',
    },
];

export const DevelopmentTools: Component = () => {
    return <SetupCard title="Development Tools" icon={CLIIcon} entries={developmentTools} />;
};
