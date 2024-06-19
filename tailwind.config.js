/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './**/*.{js,ts,jsx,tsx}'],
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
			outlineWidth: {
				88: '88px',
				176: '176',
			},
			backgroundImage: {
				bgDesktopHome: 'url("/assets/home/background-home-desktop.jpg")',
				bgTabletHome: 'url("/assets/home/background-home-tablet.jpg")',
				bgMobileHome: 'url("/assets/home/background-home-mobile.jpg")',
				bgDesktopDestination:
					'url("/assets/destination/background-destination-desktop.jpg")',
				bgTabletDestination:
					'url("/assets/destination/background-destination-tablet.jpg")',
				bgMobileDestination:
					'url("/assets/destination/background-destination-mobile.jpg")',
				bgDesktopCrew: 'url("/assets/crew/background-crew-desktop.jpg")',
				bgTabletCrew: 'url("/assets/crew/background-crew-tablet.jpg")',
				bgMobileCrew: 'url("/assets/crew/background-crew-mobile.jpg")',
				bgDesktopTechnology:
					'url("/assets/technology/background-technology-desktop.jpg")',
				bgTabletTechnology:
					'url("/assets/technology/background-technology-tablet.jpg")',
				bgMobileTechnology:
					'url("/assets/technology/background-technology-mobile.jpg")',
			},
		},
	},
	plugins: [],
};
