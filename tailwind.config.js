/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,ts}",
  "./node_modules/flowbite/**/*.js",
];
export const theme = {
  extend: {},
  fontFamily: {},
};
export const plugins = [require("flowbite/plugin")];
