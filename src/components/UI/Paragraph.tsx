import clx from 'classnames';
import type { JSX, ParentComponent } from 'solid-js';

export const Paragraph: ParentComponent<JSX.HTMLAttributes<HTMLParagraphElement>> = ({ children, ...attributes }) => {
    attributes.class;

    return (
        <p {...attributes} class={clx(attributes.class, 'text-base text-zinc-400 max-w-prose')}>
            {children}
        </p>
    );
};
