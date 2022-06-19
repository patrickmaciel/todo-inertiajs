const mix = require('laravel-mix');

const webpackConfig = require('./webpack.config');

mix.js('resources/js/app.js', 'public/js')
    .extract()
    .vue(3)
    .postCss('resources/css/app.css', 'public/css', [
        require('tailwindcss'),
        require('autoprefixer'),
    ])
    .alias({ '@': 'resources/js' })
    .webpackConfig(webpackConfig)
    .version();

// const mix = require('laravel-mix');
// mix.js('resources/js/app.js', 'public/js').postCss('resources/css/app.css', 'public/css', [
    // require('tailwindcss'),
    // require('autoprefixer'),
// ]);
