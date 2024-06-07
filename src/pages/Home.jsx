import { Link } from 'react-router-dom';

const Home = () => (
	<div className="bg-bgMobileHome bg-cover min-h-screen md:bg-bgTabletHome lg:bg-bgDesktopHome">
		<div className="flex flex-col justify-center px-6 text-center pt-36 md:pt-52 text-white space-y-6 pb-24">
			<div className="font-balowCondensed text-2xl md:text-4xl font-normal leading-4 text-lightBlue">
				SO, YOU WANT TO TRAVEL TO
			</div>
			<div className="font-Bellefair font-normal text-[80px] md:text-[144px] md:leading-tight">
				SPACE
			</div>
			<div className="font-balowRegular font-normal md:text-lg text-lightBlue text-base pb-24 md:pb-20 md:px-24">
				Let&apos;s face it; if you want to go to space, you might as well
				genuinely go to outer space and not hover kind of on the edge of it.
				Well sit back, and relax because we&apos;ll give you a truly out of this
				world experience!
			</div>
			<Link
				to="/destination"
				className="hover:outline hover:outline-88 rounded-full h-36 md:h-64 md:w-64 w-36 hover:outline-white/10 place-content-center bg-white text-veryDarkNavy self-center md:text-3xl"
			>
				EXPLORE
			</Link>
			<div></div>
		</div>
	</div>
);

export default Home;
