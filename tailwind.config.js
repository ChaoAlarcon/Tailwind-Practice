/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.html", // Adjust the paths to match your project structure
    ],
    theme: {
        extend: {
            colors:{
                green: "#1DF299"
            },

            backgroundImage: {
                circles: "url('/src/assets/circles.svg')",
            },

            height: {
                header: "400px",

            },
        },
    },
    plugins: [],
};