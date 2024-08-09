import type { Component } from 'solid-js';
import { For } from 'solid-js';
import { EducationEntry } from './EducationEntry';
import { AcademicCapIcon } from '../icons/AcademicCapIcon';

const educationEntries: EducationEntry[] = [
    {
        school: 'Hogeschool Utrecht',
        degree: 'Data-Driven Design M.A.',
        logo: 'https://www.hu.nl/static/images/favicons/apple-touch-icon.png',
        start: new Date('2023-09-01'),
        end: new Date('2024-08-31'),
    },
    {
        school: 'Universität Duisburg-Essen',
        degree: 'Mathemcatics B.Sc.',
        logo: 'https://www.uni-due.de/favicon-96x96.png',
        start: new Date('2022-10-01'),
        end: new Date('2023-08-31'),
    },
    {
        school: 'Leuphana Universität Lüneburg',
        degree: 'Business administration B.Sc.',
        logo: 'https://www.leuphana.de/typo3conf/ext/leuphana_styleguide/Resources/Public/favicons/apple-touch-icon.png',
        start: new Date('2016-10-01'),
        end: new Date('2020-10-31'),
    },
    {
        school: 'Turnier & Ausbildungsstall Löer',
        degree: 'Pferdewirt',
        start: new Date('2012-08-01'),
        end: new Date('2015-07-31'),
    },
];

export const Education: Component = () => {
    return (
        <div class="rounded-2xl border border-zinc-700/40 p-6 h-fit flex-shrink">
            <h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 items-center">
                <AcademicCapIcon class="h-6 w-6 flex-none" />

                <span class="ml-3">Education</span>
            </h2>

            <ol class="mt-6 space-y-4">
                <For each={educationEntries}>{enducationEntry => <EducationEntry {...enducationEntry} />}</For>
            </ol>
        </div>
    );
};
