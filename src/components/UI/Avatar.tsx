import type { Component } from 'solid-js';

import avatar from '../../../public/assets/images/avatar.jpg';

export const Avatar: Component = () => {
    return (
        <div class="flex items-end justify-center border border-gray-600 rounded-full overflow-hidden w-32 h-32 transition-all scale-95">
            <img src={avatar} class="self-baseline" />
        </div>
    );
};
