import type { MarkdownInstance } from 'astro';
import type { Component } from 'solid-js';
import { For } from 'solid-js';
import type { BlogFrontmatter } from '../../interfaces/BlogFrontmatter';
import { Headline } from '../UI/Headline';
import { BlogCard } from './BlogCard';

interface BlogPreviewProps {
    posts: MarkdownInstance<BlogFrontmatter>[];
}

export const BlogPreview: Component<BlogPreviewProps> = ({ posts }) => {
    return (
        <div class="flex flex-col gap-2">
            <Headline level="h2">Latest Posts</Headline>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <For each={posts}>
                    {({ frontmatter, url }) => (
                        <BlogCard
                            title={frontmatter.title}
                            excerpt={frontmatter.excerpt}
                            href={url!}
                            publishedAt={new Date(frontmatter.publishedAt)}
                        />
                    )}
                </For>
            </div>
        </div>
    );
};
