import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { iconclose, iconhamburger, logo } from '../assets/assets';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="">
			<div className="fixed z-10 top-0 left-0 right-0 flex justify-between px-6 md:px-0">
				<Link
					to="/"
					className="bg-CustomWhite rounded-full w-10 h-10 my-6 md:ml-10"
				>
					<img src={logo} alt={logo} />
				</Link>

				<div className="hidden md:flex self-center pt-9 text-white space-x-12 font-balowCondensed font-normal bg-white bg-opacity-5 pl-32 pr-10">
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive
								? 'border-b-[5px] pb-9 border-lightBlue'
								: 'hover:border-b-[5px] hover:border-lightBlue hover:border-opacity-40 pb-9'
						}
					>
						<span className="font-bold pr-3">00</span>HOME
					</NavLink>
					<NavLink
						to="/destination"
						className={({ isActive }) =>
							isActive
								? 'border-b-[5px] pb-9 border-lightBlue'
								: 'hover:border-b-[5px] hover:border-lightBlue hover:border-opacity-40 pb-9'
						}
					>
						<span className="font-bold pr-3">01</span>DESTINATION
					</NavLink>
					<NavLink
						to="/crew"
						className={({ isActive }) =>
							isActive
								? 'border-b-[5px] pb-9 border-lightBlue'
								: 'hover:border-b-[5px] hover:border-lightBlue hover:border-opacity-40 pb-9'
						}
					>
						<span className="font-bold pr-3">02</span>CREW
					</NavLink>
					<NavLink
						to="/technology"
						className={({ isActive }) =>
							isActive
								? 'border-b-[5px] pb-9 border-lightBlue'
								: 'hover:border-b-[5px] hover:border-lightBlue hover:border-opacity-40 pb-9 pr-2'
						}
					>
						<span className="font-bold pr-3">03</span>TECHNOLOGY
					</NavLink>
				</div>
				{/* mobile toggleButton */}
				<button
					onClick={() => setToggle((prev) => !prev)}
					className="md:hidden"
				>
					<img
						src={!toggle && iconhamburger}
						alt=""
						className={`w-6 h-5 ${toggle ? 'hidden' : 'block'}`}
					/>
				</button>
			</div>

			{/* mobile nav Items */}
			<div
				className={`${
					toggle ? 'flex' : 'hidden'
				} text-black fixed right-0 top-0 bottom-0 z-20 md:hidden`}
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
										isActive
											? 'border-r-[4px] border-lightBlue'
											: 'hover:border-r-[4px] hover:border-lightBlue hover:border-opacity-40'
									}
								>
									<span className="font-bold px-3">00</span>HOME
								</NavLink>
								<NavLink
									to="/destination"
									className={({ isActive }) =>
										isActive
											? 'border-r-[4px] border-lightBlue'
											: 'hover:border-r-[4px] hover:border-lightBlue hover:border-opacity-40'
									}
								>
									<span className="font-bold px-3">01</span>DESTINATION
								</NavLink>
								<NavLink
									to="/crew"
									className={({ isActive }) =>
										isActive
											? 'border-r-[4px] border-lightBlue'
											: 'hover:border-r-[4px] hover:border-lightBlue hover:border-opacity-40'
									}
								>
									<span className="font-bold px-3">02</span>CREW
								</NavLink>
								<NavLink
									to="/technology"
									className={({ isActive }) =>
										isActive
											? 'border-r-[4px] border-lightBlue'
											: 'hover:border-r-[4px] hover:border-lightBlue hover:border-opacity-40'
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
