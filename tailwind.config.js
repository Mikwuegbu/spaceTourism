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
			backgroundImage: {
				bgDesktopHome: 'url()',
				bgTabletHome: 'url()',
				bgMobileHome: 'url("./src/assets/home/background-home-mobile.jpg")',
				bgMobileDestination:
					'url("./src/assets/destination/background-destination-mobile.jpg")',
				bgMobileCrew: 'url("./src/assets/crew/background-crew-mobile.jpg")',
				bgMobileTechnology:
					'url("./src/assets/technology/background-technology-mobile.jpg")',
			},
		},
	},
	plugins: [],
};
