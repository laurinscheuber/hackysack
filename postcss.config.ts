const config = {
    plugins: [
        require('autoprefixer'),
        require('postcss-nested'),
        require('tailwindcss/nesting'),
        require('tailwindcss')
    ]
}

module.exports = config;