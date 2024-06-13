import { useReducer } from 'react';
import data from '../data.json';

//this is the initial Value of the State
const initialTechnology = {
	currentIndex: 0,
	technologies: data.technology,
};

//the rule to manage the state Object
const reducerFn = (state, action) => {
	switch (action.type) {
		case 'setTechnology':
			return {
				...state,
				currentIndex: action.index,
			};

		default:
			throw new Error(`Invalid action ${action.type}`);
	}
};

const Technology = () => {
	const [state, dispatch] = useReducer(reducerFn, initialTechnology);

	//Event handler to set the technology state on the Button click
	const setTechnology = (index) => {
		dispatch({
			type: 'setTechnology',
			index,
		});
	};

	//this is the current state of the state Object
	const currentTechnology = state.technologies[state.currentIndex];

	return (
		<div className="bg-bgMobileTechnology md:bg-bgTabletTechnology lg:bg-bgDesktopTechnology min-h-screen bg bg-cover">
			<div className="pt-36">
				<div className="font-balowCondensed text-center text-base font-normal text-white">
					<span className="font-bold opacity-25 px-3">03</span>
					SPACE LAUNCH 101
				</div>
				<div className="py-20">
					<div className="">
						<img
							src={currentTechnology.images.landscape}
							alt=""
							className="w-[768px] h-[258px]"
						/>
					</div>
					<div className="space-x-4">
						{state.technologies.map((technology, index) => (
							<button
								key={technology.name}
								className="bg-white px-6"
								onClick={() => setTechnology(index)}
							>
								{index + 1}
							</button>
						))}
					</div>
					<div>
						<p className="text-white">THE TERMINOLOGY...</p>
						<h2 className="text-white">
							{currentTechnology.name.toUpperCase()}
						</h2>
						<p className="text-white">{currentTechnology.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Technology;
