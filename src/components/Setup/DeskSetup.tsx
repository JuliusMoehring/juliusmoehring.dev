import type { Component } from 'solid-js';
import { DeskIcon } from '../icons/SetupIcons/DeskIcon';
import { SetupCard } from './SetupCard';
import type { SetupEntry } from './SetupEntry';

const daysWithMacbook = Math.floor((Date.now() - new Date('2019-10-01').getTime()) / 1000 / 60 / 60 / 24);

const setup: SetupEntry[] = [
    {
        name: 'Macbook Pro 16"',
        description: `Because I am a big Apple fanboy, I use a Macbook Pro 16" as my main development machine. Even though my MacBook is a 2019 model, which didn\'t get the love it deserved during development because at the time the best Apple engineers were working on the M1, it is a great maschine. So far, I was only able to cook some eggs 🍳 in it ${
            daysWithMacbook * 2
        } times 🔥`,
        logo: 'https://developer.apple.com/favicon.ico',
    },
    {
        name: 'iPad Pro 12.9"',
        description:
            'Since I am all in on the Apple ecosystem, I also use an iPad Pro 12.9". Besides for personal stuff, I use it to test my apps on a real device. It also comes in super handy when not working from home and needing a second screen.',
        logo: 'https://developer.apple.com/favicon.ico',
    },
    {
        name: 'Samsung Odyssey G9',
        description:
            'The more screen space the better! Thats at least my 🌶️ take on it. I use a Samsung Odyssey G9 as my main monitor. It is a 49" ultrawide with a 32:9 aspect ratio. It is super immersive and I love it!',
        logo: 'https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/app_ico.png',
    },
];

export const DeskSetup: Component = () => {
    return <SetupCard title="Desk Setup" icon={DeskIcon} entries={setup} />;
};
