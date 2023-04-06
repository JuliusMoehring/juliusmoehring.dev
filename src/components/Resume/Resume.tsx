import type { Component } from 'solid-js';
import { For } from 'solid-js';
import { BriefcaseIcon } from '../icons/BriefcaseIcon';
import { ResumeEntry } from './ResumeEntry';

const resumeEntries: ResumeEntry[] = [
    {
        company: 'HOCHTIEF PPP SOLUTIONS GmbH',
        role: 'Working Student',
        logo: 'https://www.hochtief.de/typo3conf/ext/sitepackage/Resources/Public/Icons/favicon.ico',
        start: new Date('2022-11-01'),
        end: new Date(),
    },
    {
        company: 'welearn GmbH',
        role: 'Product Owner',
        logo: 'https://www.welearncompany.com/wp-content/uploads/fbrfg/apple-touch-icon.png',
        start: new Date('2020-11-01'),
        end: new Date('2022-09-30'),
    },
    {
        company: 'welearn GmbH',
        role: 'Working Student',
        logo: 'https://www.welearncompany.com/wp-content/uploads/fbrfg/apple-touch-icon.png',
        start: new Date('2018-10-01'),
        end: new Date('2020-10-31'),
    },
];

export const Resume: Component = () => {
    return (
        <div class="rounded-2xl border border-zinc-700/40 p-6 h-fit flex-shrink">
            <h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 items-center">
                <BriefcaseIcon class="h-6 w-6 flex-none" />

                <span class="ml-3">Work</span>
            </h2>

            <ol class="mt-6 space-y-4">
                <For each={resumeEntries}>{resumeEntry => <ResumeEntry {...resumeEntry} />}</For>
            </ol>
        </div>
    );
};
