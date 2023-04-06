import type { Component, JSX } from 'solid-js';

export type TechStackEntry =
    | {
          name: string;
          href: string;
          iconLink: string;
          iconComponent?: never;
      }
    | {
          name: string;
          href: string;
          iconLink?: never;
          iconComponent: Component<JSX.SvgSVGAttributes<SVGSVGElement>>;
      };

export const TechStackEntry: Component<TechStackEntry> = ({ name, href, iconLink, iconComponent: IconComponent }) => {
    return (
        <a
            href={href}
            aria-label={name}
            class="hover:grayscale grayscale-0 hover:scale-95 h-16 w-16 rounded-2xl border border-zinc-700/40 flex justify-center items-center"
            target="_blank"
        >
            {iconLink && <img src={iconLink} alt={name} class="w-10 h-10 rounded" draggable={false} />}
            {IconComponent && <IconComponent class="w-10 h-10 rounded" />}
        </a>
    );
};
