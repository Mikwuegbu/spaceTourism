/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				veryDarkNavy: '#0B0D17',
				lightBlue: '#d0d6f9',
				CustomWhite: '#ffffff',
			},

			fontFamily: {
				Bellefair: ['Bellefair', 'serif'],
				balowCondensed: ['Barlow Condensed', 'sans-serif'],
				balowRegular: ['Barlow', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
