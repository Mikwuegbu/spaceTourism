import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { iconclose, iconhamburger, logo } from '../assets/assets';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="">
			<div className="fixed z-10 top-0 left-0 right-0 flex justify-between py-6 px-6">
				<Link to="/" className="bg-CustomWhite rounded-full w-10 h-10">
					<img src={logo} alt={logo} />
				</Link>
				<button onClick={() => setToggle((prev) => !prev)} className="">
					<img
						src={!toggle && iconhamburger}
						alt=""
						className={`w-6 h-5 ${toggle ? 'hidden' : 'block'}`}
					/>
				</button>
			</div>

			<div
				className={`${
					toggle ? 'flex' : 'hidden'
				} text-black fixed right-0 top-0 bottom-0 z-20`}
			>
				<div className="pt-12 bg-veryDarkNavy bg-opacity-60">
					<div className="absolute inset-0 backdrop-blur-sm z-0"></div>
					<div>
						<button onClick={() => setToggle((prev) => !prev)}>
							<img
								src={toggle && iconclose}
								alt={iconclose}
								className="w-6 h-5 absolute right-6 top-8"
							/>
						</button>
						<div className="relative z-10">
							<div className="flex flex-col font-balowCondensed mr-28 pr-0.5 pl-5 text-base text-white w-full space-y-8 py-12">
								<NavLink
									to="/"
									className={({ isActive }) =>
										isActive ? 'border-r-[5px] border-lightBlue' : ''
									}
								>
									<span className="font-bold px-3">00</span>HOME
								</NavLink>
								<NavLink
									to="/destination"
									className={({ isActive }) =>
										isActive ? 'border-r-[5px] border-lightBlue' : ''
									}
								>
									<span className="font-bold px-3">01</span>DESTINATION
								</NavLink>
								<NavLink
									to="/crew"
									className={({ isActive }) =>
										isActive ? 'border-r-[5px] border-lightBlue' : ''
									}
								>
									<span className="font-bold px-3">02</span>CREW
								</NavLink>
								<NavLink
									to="/technology"
									className={({ isActive }) =>
										isActive ? 'border-r-[5px] border-lightBlue' : ''
									}
								>
									<span className="font-bold px-3">03</span>TECHNOLOGY
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
