import { component$ } from "@builder.io/qwik";

interface CircleScoreProps {
    score?: number;
    size?: number;
    strokeWidth?: number;
    color?: string;
    trackColor?: string;
    fillColor?: string;
}

export const CircleScore = component$(({
    score = 100,
    strokeWidth = 8,
    color = "#10b981", // green-500
    trackColor = "#e5e7eb", // gray-200
    fillColor = "#e5faef", // green-50
}: CircleScoreProps) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (score / 100) * circumference;

    return (
        <svg class="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                stroke={trackColor}
                stroke-width={strokeWidth}
            />
            <circle
                cx="50"
                cy="50"
                r={radius}
                fill={fillColor}
                stroke={color}
                stroke-width={strokeWidth}
                stroke-linecap="round"
                stroke-dasharray={circumference}
                stroke-dashoffset={offset}
                style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
            />
        </svg>
    );
});
