/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                Roboto: ["Roboto", "sans-serif"],
                Playwrite: ["Playwrite DK Loopet", "cursive"],
                Montserrat : ["Montserrat", "sans-serif"]
            },
        },
    },
    plugins: [],
}