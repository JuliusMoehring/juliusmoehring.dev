import type { Component } from 'solid-js';

export type EducationEntry = {
    school: string;
    degree: string;
    logo?: string;
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

export const EducationEntry: Component<EducationEntry> = ({ school, degree, logo, start, end }) => {
    return (
        <li class="flex gap-4">
            <div class="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-zinc-900/5 border border-zinc-700/50 bg-zinc-800 ring-0">
                {logo && <img src={logo} alt={school} class="h-7 w-7 rounded-full" />}
            </div>

            <dl class="flex flex-auto flex-wrap gap-x-2">
                <dt class="sr-only">Degree</dt>
                <dd class="w-full flex-none text-sm font-medium text-zinc-100">{degree}</dd>

                <dt class="sr-only">School</dt>
                <dd class="text-xs text-zinc-400">{school}</dd>

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
