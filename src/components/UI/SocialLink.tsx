import type { Component, JSX } from 'solid-js';
import type { SocialIconProps } from '../icons/SocialIcons';

export type SocialLinkProps = JSX.IntrinsicElements['a'] & {
    icon: Component<SocialIconProps>;
};

export const SocialLink: Component<SocialLinkProps> = ({ icon: Icon, ...attributes }) => {
    return (
        <a {...attributes} class="group -m-1 p-1">
            <Icon class="h-6 w-6 transition fill-zinc-400 group-hover:fill-teal-500" />
        </a>
    );
};
