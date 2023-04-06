import type { Component } from 'solid-js';

export type SetupEntry = {
    name: string;
    description: string;
    logo: string;
};

export const SetupEntry: Component<SetupEntry> = ({ name, description, logo }) => {
    return (
        <li class="flex gap-4">
            <div class="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <img src={logo} alt={name} class="h-7 w-7" />
            </div>

            <dl class="flex flex-auto flex-wrap gap-y-2">
                <dt class="sr-only">Name</dt>
                <dd class="w-full flex-none text-sm font-medium text-zinc-100">{name}</dd>

                <dt class="sr-only"></dt>
                <dd class="w-full flex-none text-sm font-medium text-zinc-400">{description}</dd>
            </dl>
        </li>
    );
};
