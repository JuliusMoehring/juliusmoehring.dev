import type { Component } from 'solid-js';
import { createSignal, onCleanup, onMount } from 'solid-js';
import { Headline } from './UI/Headline';

const words = ['Software engineer', 'Data Science Student', 'Rider'];

export const Typewriter: Component = () => {
    const [text, setText] = createSignal('');
    const [cursor, setCursor] = createSignal({ wordIndex: 0, letterIndex: 0 });
    const [skippedLoops, setSkippedLoops] = createSignal(0);
    const [glow, setGlow] = createSignal(0);
    const [glowDirection, setGlowDirection] = createSignal<'up' | 'down'>('up');

    let headlineRef: HTMLElement | null;

    onMount(() => {
        const animateGlow = () => {
            if (glowDirection() === 'up') {
                setGlow(prev => prev + 0.1);
            } else {
                setGlow(prev => prev - 0.1);
            }

            if (glow() >= 20 && glowDirection() === 'up') {
                setGlowDirection('down');
            }

            if (glow() <= 10 && glowDirection() === 'down') {
                setGlowDirection('up');
            }

            headlineRef?.style.setProperty('text-shadow', `0 0 ${glow()}px #14b8a6`);

            requestAnimationFrame(animateGlow);
        };

        animateGlow();
    });

    const timer = setInterval(() => {
        const word = words[cursor().wordIndex];

        // If we could not find a word, reset the cursor and text
        if (!word) {
            setCursor({ wordIndex: 0, letterIndex: 0 });
            setText('');

            return;
        }

        const letter = word[cursor().letterIndex];

        // If we could not find a letter, increment the skipped loops
        if (!letter && skippedLoops() <= 30) {
            setSkippedLoops(prev => prev + 1);
            return;
        }

        // If we could not find a letter and we have enough loops skipped, move to the next word
        if (!letter) {
            setSkippedLoops(0);
            setCursor(prev => ({ wordIndex: prev.wordIndex + 1, letterIndex: 0 }));
            setText('');
            return;
        }

        setCursor(prev => ({ wordIndex: prev.wordIndex, letterIndex: prev.letterIndex + 1 }));
        setText(prev => prev + letter);
    }, 100);

    onCleanup(() => clearInterval(timer));

    return (
        <div class="flex text-white h-20">
            <Headline>
                I am a{' '}
                <span ref={headlineRef!} class="flex items-baseline">
                    {text()}
                </span>
                <span class="sr-only">{words.join(', ')}</span>
            </Headline>
        </div>
    );
};
