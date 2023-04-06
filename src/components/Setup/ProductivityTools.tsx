import type { Component } from 'solid-js';
import { CLIIcon } from '../icons/SetupIcons';
import { SetupCard } from './SetupCard';
import type { SetupEntry } from './SetupEntry';

const productivityTools: SetupEntry[] = [
    {
        name: 'Notion',
        description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        logo: 'https://www.notion.so/images/favicon.ico',
    },
    {
        name: 'Raycast',
        description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        logo: 'https://www.raycast.com/favicon-production.png',
    },
    {
        name: '1Password',
        description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        logo: 'https://developer.1password.com/img/favicon.ico',
    },
    {
        name: 'Spectacle',
        description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        logo: 'https://www.spectacleapp.com/images/favicon.ico',
    },
];

export const ProductivityTools: Component = () => {
    return <SetupCard title="Productivity Tools" icon={CLIIcon} entries={productivityTools} />;
};
