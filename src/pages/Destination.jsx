import { useReducer } from 'react';
import data from '../data.json';

//this is the initial Value of the State
const initialDestination = {
	currentIndex: 0,
	destinations: data.destinations,
};

//the rule to manage the state Object
const reducerFn = (state, action) => {
	switch (action.type) {
		case 'setDestination':
			return {
				...state,
				currentIndex: action.index,
			};

		default:
			throw new Error(`Invalid action ${action.type}`);
	}
};

const Destination = () => {
	const [state, dispatch] = useReducer(reducerFn, initialDestination);

	//Event handler to set the destination state on the Button click
	const setDestination = (index) => {
		dispatch({
			type: 'setDestination',
			index,
		});
	};

	//this is the current state of the state Object
	const currentDestination = state.destinations[state.currentIndex];

	return (
		<div className="bg-bgMobileDestination bg-cover min-h-screen md:bg-bgTabletDestination lg:bg-bgDesktopDestination">
			<div className="pt-36 lg:pt-44 px-4 lg:px-40 md:px-10 text-white flex flex-col items-center md:items-start">
				<div className="font-balowCondensed text-base md:text-lg lg:text-xl font-normal text-white">
					<span className="font-bold opacity-25 pr-4">01</span>
					PICK YOUR DESTINATION
				</div>
				<div className="py-6 lg:py-20 flex flex-col items-center lg:space-x-24 text-center lg:text-justify lg:flex-row">
					<img
						src={currentDestination.images.png}
						alt={currentDestination.name}
						className="h-36 w-36 md:h-[300px] md:w-[300px] lg:h-[480px] lg:w-[480px] my-6 md:my-10"
					/>
					<div className="">
						<div className="space-x-8 space-y-4 md:space-y-8">
							{state.destinations.map((destination, index) => (
								<button
									key={destination.name}
									onClick={() => setDestination(index)}
									className={`text-lightBlue font-balowCondensed font-normal py-2 md:text-xl ${
										destination.name == currentDestination.name
											? 'text-white border-b-[3px]'
											: ''
									}`}
								>
									{destination.name.toUpperCase()}
								</button>
							))}
						</div>
						<div className="py-6 md:py-8 space-y-4 md:px-6 lg:px-0">
							<h1 className="font-Bellefair font-normal text-6xl md:text-[80px]">
								{currentDestination.name.toUpperCase()}
							</h1>
							<p className="font-balowRegular text-lightBlue lg:text-lg pb-2 md:px-20 lg:px-0">
								{currentDestination.description}
							</p>
							<div className="border border-white opacity-25 md:mx-24 lg:mx-0" />
						</div>
						<div className="space-y-6 md:space-y-0 md:flex md:justify-around lg:justify-start md:px-24 lg:px-0 lg:space-x-6">
							<div className="space-y-3 lg:pr-6 text-nowrap">
								<p className="font-balowCondensed font-normal text-lightBlue">
									AVG. DISTANCE
								</p>
								<p className="font-Bellefair text-3xl font-normal">
									{currentDestination.distance}
								</p>
							</div>
							<div className="space-y-3 lg:px-6 text-nowrap">
								<p className="font-balowCondensed font-normal text-lightBlue">
									EST. TRAVEL TIME
								</p>
								<p className="font-Bellefair text-3xl font-normal">
									{currentDestination.travel}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Destination;
