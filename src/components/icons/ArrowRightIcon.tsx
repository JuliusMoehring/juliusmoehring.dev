import type { Component, JSX } from 'solid-js';

export const ArrowRightIcon: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = ({ ...attributes }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            {...attributes}
        >
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
    );
};
