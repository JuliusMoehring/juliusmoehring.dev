import type { Component } from 'solid-js';
import { For } from 'solid-js';
import { DataCampIcon, GitHubIcon, LinkedInIcon, TwitterIcon } from './icons/SocialIcons';
import { SocialLink } from './UI/SocialLink';

const socials = [
    {
        href: 'https://twitter.com/julius_mohring',
        'aria-label': 'Follow on Twitter',
        icon: TwitterIcon,
    },
    {
        href: 'https://www.datacamp.com/profile/JuliusMoehring',
        'aria-label': 'Check my DataCamp profile',
        icon: DataCampIcon,
    },
    {
        href: 'https://github.com/JuliusMoehring',
        'aria-label': 'Follow on GitHub',
        icon: GitHubIcon,
    },
    {
        href: 'https://www.linkedin.com/in/karl-julius-m%C3%B6hring-583b99172/',
        'aria-label': 'Follow on LinkedIn',
        icon: LinkedInIcon,
    },
];

export const Socials: Component = () => {
    return (
        <div class="flex gap-6">
            <For each={socials}>{({ icon, ...rest }) => <SocialLink icon={icon} {...rest} />}</For>
        </div>
    );
};
