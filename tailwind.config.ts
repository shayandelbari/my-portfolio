import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: {
				noise: "url('/src/assets/noise.svg')"
			},
			colors: {
				white: '#fff',
				black: '#000', // couldn't find a better way :(
				primary: '#16a34a'
			}
		}
	},

	plugins: []
} satisfies Config;
