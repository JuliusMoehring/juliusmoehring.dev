import clx from 'classnames';
import type { JSX, ParentComponent } from 'solid-js';

export const Paragraph: ParentComponent<JSX.IntrinsicElements['p']> = ({ children, ...attributes }) => {
    attributes.class;

    return (
        <p {...attributes} class={clx(attributes.class, 'text-base text-zinc-200 max-w-prose')}>
            {children}
        </p>
    );
};
