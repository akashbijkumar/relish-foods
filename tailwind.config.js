/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-red': '#E31E24',
                'brand-black': '#0B0F19', // Darker, richer black (Deep Navy)
                'brand-white': '#FFFFFF',
                'ocean': {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e', // Deepest ocean blue for backgrounds
                    950: '#082f49',
                },
                'gold': {
                    400: '#fbbf24',
                    500: '#f59e0b',
                    600: '#d97706', // Premium accent
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'], // Added for headings
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                    '2xl': '6rem',
                },
            }
        },
    },
    plugins: [],
}
