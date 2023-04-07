import clx from 'classnames';
import type { JSX, ParentComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';

type HeadlineProps = JSX.HTMLAttributes<HTMLHeadingElement> & {
    level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const Headline: ParentComponent<HeadlineProps> = ({
    level = 'h1',

    children,
    ...attributes
}) => {
    return (
        <Dynamic component={level} {...attributes} class={clx(attributes.class, 'text-4xl font-bold text-zinc-200')}>
            {children}
        </Dynamic>
    );
};
