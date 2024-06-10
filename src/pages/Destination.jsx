import data from '../data.json';

const Destination = () => {
	return (
		<div className="bg-bgMobileDestination bg-cover min-h-screen md:bg-bgTabletDestination lg:bg-bgDesktopDestination">
			<div className="pt-36 px-3 text-white">
				<div className="font-balowCondensed text-center text-base font-normal text-white">
					<span className="font-bold opacity-25 px-3">01</span>
					PICK YOUR DESTINATION
				</div>
				{
					<div className="flex justify-center items-center h-screen">
						<div className="animate-spin rounded-full h-12 w-12 border-4 border-white">
							{data.destinations.map((destination) =>
								console.log(destination.travel)
							)}
						</div>
					</div>
				}
			</div>
		</div>
	);
};

export default Destination;
