const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    // './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    // './storage/framework/views/*.php',
    // './resources/views/**/*.blade.php',
    "./resources/**/*.html",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
    "./resources/**/*.ts",
    "./resources/**/*.tsx",
    "./resources/**/*.blade.php",
    "./resources/**/*.vue",
    "./resources/**/*.twig",
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
