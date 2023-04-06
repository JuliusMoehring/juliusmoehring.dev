import type { Component, JSX } from 'solid-js';

export const RemixIcon: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = ({ ...attributes }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 800 800" {...attributes}>
            <g fill="#E8F2FF" filter="url(#a)">
                <path
                    fill-rule="evenodd"
                    d="M587.947 527.768c4.254 54.65 4.254 80.268 4.254 108.232H465.756c0-6.091.109-11.663.219-17.313.342-17.564.699-35.88-2.147-72.868-3.761-54.152-27.08-66.185-69.957-66.185H195v-98.525h204.889c54.16 0 81.241-16.476 81.241-60.098 0-38.357-27.081-61.601-81.241-61.601H195V163h227.456C545.069 163 606 220.912 606 313.42c0 69.193-42.877 114.319-100.799 121.84 48.895 9.777 77.48 37.605 82.746 92.508Z"
                    clip-rule="evenodd"
                />
                <path d="M195 636v-73.447h133.697c22.332 0 27.181 16.563 27.181 26.441V636H195Z" />
            </g>
            <defs>
                <filter
                    id="a"
                    width="539"
                    height="601"
                    x="131"
                    y="99"
                    color-interpolation-filters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="28" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix values="0 0 0 0 0.223529 0 0 0 0 0.572549 0 0 0 0 1 0 0 0 1 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_126_53" />
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="32" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix values="0 0 0 0 0.223529 0 0 0 0 0.572549 0 0 0 0 1 0 0 0 0.9 0" />
                    <feBlend in2="effect1_dropShadow_126_53" result="effect2_dropShadow_126_53" />
                    <feBlend in="SourceGraphic" in2="effect2_dropShadow_126_53" result="shape" />
                </filter>
            </defs>
        </svg>
    );
};
