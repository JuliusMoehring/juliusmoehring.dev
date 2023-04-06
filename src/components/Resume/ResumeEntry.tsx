import type { Component } from 'solid-js';

export type ResumeEntry = {
    company: string;
    role: string;
    logo: string;
    start: Date;
    end: Date;
};

const formatDate = (date: Date) => {
    const now = new Date();

    if (date.toDateString() === now.toDateString()) {
        return 'Present';
    }

    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

export const ResumeEntry: Component<ResumeEntry> = ({ company, role, logo, start, end }) => {
    return (
        <li class="flex gap-4">
            <div class="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-zinc-900/5 border border-zinc-700/50 bg-zinc-800 ring-0">
                <img src={logo} alt={company} class="h-7 w-7" />
            </div>

            <dl class="flex flex-auto flex-wrap gap-x-2">
                <dt class="sr-only">Company</dt>
                <dd class="w-full flex-none text-sm font-medium text-zinc-100">{company}</dd>

                <dt class="sr-only">Role</dt>
                <dd class="text-xs text-zinc-400">{role}</dd>

                <dt class="sr-only">Date</dt>
                <dd class="ml-auto text-xs text-zinc-500" aria-label={`${formatDate(start)} until ${formatDate(end)}`}>
                    <time dateTime={formatDate(start)}>{formatDate(start)}</time>

                    <span aria-hidden> — </span>

                    <time dateTime={formatDate(end)}>{formatDate(end)}</time>
                </dd>
            </dl>
        </li>
    );
};
