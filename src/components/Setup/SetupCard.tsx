import type { Component, JSX } from 'solid-js';
import { For } from 'solid-js';
import { SetupEntry } from './SetupEntry';

type SetupCardProps = {
    title: string;
    icon: Component<JSX.SvgSVGAttributes<SVGSVGElement>>;
    entries: SetupEntry[];
};

export const SetupCard: Component<SetupCardProps> = ({ title, icon: Icon, entries }) => {
    return (
        <div class="rounded-2xl border border-zinc-700/40 p-6">
            <h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 items-center">
                <Icon class="h-6 w-6 flex-none" />

                <span class="ml-3">{title}</span>
            </h2>
            <ol class="mt-6 space-y-4">
                <For each={entries}>{entry => <SetupEntry {...entry} />}</For>
            </ol>
        </div>
    );
};
