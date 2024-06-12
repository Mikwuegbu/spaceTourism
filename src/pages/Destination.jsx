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
			<div className="pt-36 px-4 text-white flex flex-col items-center">
				<div className="font-balowCondensed text-base font-normal text-white">
					<span className="font-bold opacity-25 pr-4">01</span>
					PICK YOUR DESTINATION
				</div>
				<div className="py-6 flex flex-col items-center text-center">
					<img
						src={currentDestination.images.png}
						alt={currentDestination.name}
						className="h-36 w-36 my-6"
					/>
					<div className="space-x-8 space-y-4">
						{state.destinations.map((destination, index) => (
							<button
								key={destination.name}
								onClick={() => setDestination(index)}
								className={`text-lightBlue font-balowCondensed font-normal py-2 ${
									destination.name == currentDestination.name
										? 'text-white border-b-[3px]'
										: ''
								}`}
							>
								{destination.name.toUpperCase()}
							</button>
						))}
					</div>
					<div className="py-6 space-y-4">
						<h1 className="font-Bellefair font-normal text-6xl">
							{currentDestination.name.toUpperCase()}
						</h1>
						<p className="font-balowCondensed text-lightBlue pb-2">
							{currentDestination.description}
						</p>
						<div className="border border-white opacity-25" />
					</div>
					<div className="space-y-6">
						<div className="space-y-3">
							<p className="font-balowCondensed font-normal text-lightBlue">
								AVG. DISTANCE
							</p>
							<p className="font-Bellefair text-3xl font-normal">
								{currentDestination.distance}
							</p>
						</div>
						<div className="space-y-3">
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
	);
};

export default Destination;
