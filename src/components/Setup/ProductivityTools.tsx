import type { Component } from 'solid-js';
import { CLIIcon } from '../icons/SetupIcons';
import { SetupCard } from './SetupCard';
import type { SetupEntry } from './SetupEntry';

const productivityTools: SetupEntry[] = [
    {
        name: 'Notion',
        description:
            'Notion provides a flexible and customizable workspace that can be tailored to the specific needs of individual developers or teams. With features like databases, boards, and timelines, Notion makes it easy to organize and collaborate on projects, track bugs and issues, and document processes and best practices.',
        logo: 'https://www.notion.so/images/favicon.ico',
    },
    {
        name: 'Raycast',
        description:
            'Raycast is the successor of Alfred. It is a powerful productivity tool that allows you to control your computer with a few keystrokes. It is super fast and has a great extension ecosystem.',
        logo: 'https://www.raycast.com/favicon-production.png',
    },
    {
        name: '1Password',
        description:
            '1Password is a password manager that allows you to store all your passwords in one place. It is super secure and has a great browser extension. It also has a great mobile app.',
        logo: 'https://developer.1password.com/img/favicon.ico',
    },
];

export const ProductivityTools: Component = () => {
    return <SetupCard title="Productivity Tools" icon={CLIIcon} entries={productivityTools} />;
};
