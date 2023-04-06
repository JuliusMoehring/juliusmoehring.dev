import type { Component } from 'solid-js';
import { DeskIcon } from '../icons/SetupIcons/DeskIcon';
import { SetupCard } from './SetupCard';
import type { SetupEntry } from './SetupEntry';

const setup: SetupEntry[] = [
    {
        name: 'Macbook Pro 16"',
        description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        logo: 'https://developer.apple.com/favicon.ico',
    },
    {
        name: 'iPad Pro 12.9"',
        description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        logo: 'https://developer.apple.com/favicon.ico',
    },
    {
        name: 'Samsung Odyssey G9',
        description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        logo: 'https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/app_ico.png',
    },
];

export const DeskSetup: Component = () => {
    return <SetupCard title="Desk Setup" icon={DeskIcon} entries={setup} />;
};
