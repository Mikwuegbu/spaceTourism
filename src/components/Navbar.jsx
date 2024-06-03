import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { iconclose, iconhamburger, logo } from '../assets/assets';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="bg-veryDarkNavy">
			<div className="py-6 flex justify-between px-6 items-center">
				<div className="bg-CustomWhite rounded-full w-10 h-10">
					<img src={logo} alt={logo} />
				</div>
				<button onClick={() => setToggle((prev) => !prev)}>
					<img
						src={!toggle && iconhamburger}
						alt=""
						className={`w-6 h-5 ${toggle ? 'hidden' : 'block'}`}
					/>
				</button>
				<div
					className={`${
						toggle ? 'flex' : 'hidden'
					} text-black fixed right-0 top-0 bottom-0 bg-slate-50`}
				>
					<div className="pt-12">
						<button onClick={() => setToggle((prev) => !prev)}>
							<img
								src={toggle && iconclose}
								alt={iconclose}
								className="w-6 h-5 absolute right-6 top-8"
							/>
						</button>
						<div className="flex flex-col font-balowCondensed mr-28 pr-0.5 pl-5 text-base w-full space-y-8 py-12">
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
		</nav>
	);
};

export default Navbar;
