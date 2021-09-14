const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .postCss('resources/css/app.css', 'public/css')
    .scripts(['resources/coreui/js/coreui.bundle.min.js','resources/coreui/js/simplebar.min.js'],'public/js/coreui.js')
    .styles(['resources/coreui/css/simplebar.css','resources/coreui/css/style.css'],'public/css/coreui.css')
    .webpackConfig(require('./webpack.config'));

if (mix.inProduction()) {
    mix.version();
}
