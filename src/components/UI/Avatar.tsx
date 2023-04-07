import type { Component } from 'solid-js';

import avatar from '../../assets/images/avatar.jpg';

export const Avatar: Component = () => {
    return (
        <div
            class="flex items-end justify-center border border-gray-600 rounded-full overflow-hidden w-32 h-32 transition-all scale-95"
            style={{ 'box-shadow': '0 0 10px #14b8a6' }}
        >
            <img src={avatar} alt="Profile Image of Julius Möhring" class="self-baseline" />
        </div>
    );
};
