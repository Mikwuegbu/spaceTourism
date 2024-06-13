import { useReducer } from 'react';
import data from '../data.json';

//this is the initial Value of the State
const initialCrew = {
	currentIndex: 0,
	crew: data.crew,
};

//the rule to manage the state Object
const reducerFn = (state, action) => {
	switch (action.type) {
		case 'setCrew':
			return {
				...state,
				currentIndex: action.index,
			};

		default:
			throw new Error(`Invalid action ${action.type}`);
	}
};

const Crew = () => {
	const [state, dispatch] = useReducer(reducerFn, initialCrew);

	//Event handler to set the destination state on the Button click
	const setCrew = (index) => {
		dispatch({
			type: 'setCrew',
			index,
		});
	};

	//this is the current state of the state Object
	const currentCrew = state.crew[state.currentIndex];

	return (
		<div className="bg-bgMobileCrew md:bg-bgTabletCrew lg:bg-bgDesktopCrew min-h-screen bg-cover">
			<div className="pt-36 px-3 text-white">
				<div className="font-balowCondensed text-center text-base font-normal text-white">
					<span className="font-bold opacity-25 px-4">02</span>
					MEET YOUR CREW
				</div>
				<div className="">
					<div className="flex flex-col items-center text-center py-16">
						<div className="space-y-1.5">
							<p className="font-Bellefair font-normal text-lg opacity-50">
								{currentCrew.role.toUpperCase()}
							</p>
							<h2 className="font-Bellefair font-normal text-2xl">
								{currentCrew.name.toUpperCase()}
							</h2>
						</div>
						<p className="font-balowRegular font-normal text-lightBlue py-6 mb-8">
							{currentCrew.bio}
						</p>
						<div className="space-x-4">
							{state.crew.map((crew, index) => {
								return (
									<button
										key={crew.name}
										onClick={() => setCrew(index)}
										className={`w-2.5 h-2.5 rounded-full ${
											state.currentIndex == index
												? 'bg-white'
												: 'bg-white opacity-20'
										}`}
									></button>
								);
							})}
						</div>
					</div>
					<div className="flex justify-center w-full py-6 px-6">
						<img
							src={currentCrew.images.webp}
							alt=""
							className="w-[271.24px] h-[340px]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Crew;
