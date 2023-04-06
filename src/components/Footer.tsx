import type { Component } from 'solid-js';

export const Footer: Component = () => {
    return (
        <footer class="border-t pt-10 pb-16 border-zinc-700/40 w-full">
            <div class="flex flex-col items-center justify-end gap-6 sm:flex-row">
                <p class="text-sm text-zinc-500">
                    © {new Date().getFullYear()} Karl-Julius Möhring. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
