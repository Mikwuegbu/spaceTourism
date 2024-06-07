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
				bgDesktopHome: 'url("./src/assets/home/background-home-desktop.jpg")',
				bgTabletHome: 'url("./src/assets/home/background-home-tablet.jpg")',
				bgMobileHome: 'url("./src/assets/home/background-home-mobile.jpg")',
				bgDesktopDestination:
					'url("./src/assets/destination/background-destination-desktop.jpg")',
				bgTabletDestination:
					'url("./src/assets/destination/background-destination-tablet.jpg")',
				bgMobileDestination:
					'url("./src/assets/destination/background-destination-mobile.jpg")',
				bgDesktopCrew: 'url("./src/assets/crew/background-crew-desktop.jpg")',
				bgTabletCrew: 'url("./src/assets/crew/background-crew-tablet.jpg")',
				bgMobileCrew: 'url("./src/assets/crew/background-crew-mobile.jpg")',
				bgDesktopTechnology:
					'url("./src/assets/technology/background-technology-desktop.jpg")',
				bgTabletTechnology:
					'url("./src/assets/technology/background-technology-tablet.jpg")',
				bgMobileTechnology:
					'url("./src/assets/technology/background-technology-mobile.jpg")',
			},
		},
	},
	plugins: [],
};
