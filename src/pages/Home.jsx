import { Link } from 'react-router-dom';

const Home = () => (
	<div className="bg-bgMobileHome bg-cover min-h-screen md:bg-bgTabletHome lg:bg-bgDesktopHome">
		<div className="flex flex-col justify-center px-6 text-center pt-28 text-white space-y-6 pb-20">
			<div className=" font-balowCondensed text-2xl font-normal leading-4 text-lightBlue">
				SO, YOU WANT TO TRAVEL TO
			</div>
			<div className="font-Bellefair font-normal text-[80px]">SPACE</div>
			<div className="font-balowRegular font-normal text-lightBlue text-base pb-24">
				Let&apos;s face it; if you want to go to space, you might as well
				genuinely go to outer space and not hover kind of on the edge of it.
				Well sit back, and relax because we&apos;ll give you a truly out of this
				world experience!
			</div>
			<Link
				to="/destination"
				className="hover:outline hover:outline-88 rounded-full h-36 w-36 hover:outline-white/10 place-content-center bg-white text-veryDarkNavy self-center"
			>
				EXPLORE
			</Link>
			<div></div>
		</div>
	</div>
);

export default Home;
