/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{html,js,vue}"],
    safelist: [
        'bg-about',
        'bg-events',
        'bg-crochet',
        'bg-puzzle',
    ],
    theme: {
        extend: {
            spacing: {
                26: '6.5rem',
                '2/3': '66.7%'
            }
        },
        colors: {
            about: 'var(--color-dark-blue)',
            events: 'var(--color-turquoise)',
            crochet: 'var(--color-orange)',
            puzzle: 'var(--color-purple)',
            neutralbg: 'var(--color-yellowish)'
        },
        fontFamily: {
            'sans': ['Poppins', 'Inter', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Fira Sans"', '"Droid Sans"', '"Helvetica Neue"', 'sans-serif'],
        },
    },
    plugins: [],
}