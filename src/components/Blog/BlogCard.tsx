import type { Component } from 'solid-js';
import { onMount } from 'solid-js';
import { ArrowRightIcon } from '../icons/ArrowRightIcon';
import { Headline } from '../UI/Headline';
import { Paragraph } from '../UI/Paragraph';

interface BlogCardProps {
    title: string;
    excerpt: string;
    href: string;
    publishedAt: Date;
}

const getRelativeTime = (date: Date) => {
    const days = Math.floor((date.getTime() - Date.now()) / 86_400_000);

    return new Intl.RelativeTimeFormat('en-US', { numeric: 'auto' }).format(days, 'days');
};

export const BlogCard: Component<BlogCardProps> = ({ title, excerpt, href, publishedAt }) => {
    let blogCardRef: HTMLElement | null;

    onMount(() => {
        if (!blogCardRef) return;

        blogCardRef.addEventListener('mousemove', event => {
            if (!blogCardRef) return;

            const { x, y } = blogCardRef.getBoundingClientRect();

            blogCardRef.style.setProperty('--xPos', `${event.clientX - x}px`);
            blogCardRef.style.setProperty('--yPos', `${event.clientY - y}px`);
        });
    });

    return (
        <article
            ref={blogCardRef!}
            class="relative group hover:bg-spotlight-card-gradient rounded-2xl transition-all hover:scale-[0.99] bg-transparent border border-zinc-700/40 p-6"
        >
            <a href={href} rel="prefetch" class="absolute inset-0"></a>

            <Headline level="h3">{title}</Headline>

            <Paragraph class="line-clamp-3">{excerpt}</Paragraph>

            <time class="text-white" dateTime={publishedAt.toLocaleDateString()}>
                {getRelativeTime(publishedAt)}
            </time>

            <div class="text-teal-500 flex gap-2 items-center">
                <span>Read</span>

                <ArrowRightIcon class="w-5 h-5 group-hover:ml-1 transition-all" />
            </div>
        </article>
    );
};
