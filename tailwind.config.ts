import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'soft-blue': '#E8F4F8',
                'light-blue': '#B8D4E3',
                'medium-blue': '#5B9BD5',
                'soft-gray': '#F8F9FA',
                'light-gray': '#E9ECEF',
                'medium-gray': '#6C757D',
                'accent-teal': '#20B2AA',
                'accent-sage': '#87A96B',
                'warm-gray': '#F5F5F0',
                'professional-navy': '#2C3E50',
                'soft-white': '#FFFFFF',
                'hp-primary': '#0096D6',
                'brother-primary': '#FF6600',
                'canon-primary': '#BC002D',
            },
            fontFamily: {
                'professional': ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;
