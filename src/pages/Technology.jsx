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
				<div className="font-balowCondensed text-center md:text-justify text-base font-normal text-white md:pl-10 md:text-xl">
					<span className="font-bold opacity-25 px-3">03</span>
					SPACE LAUNCH 101
				</div>
				<div className="py-20">
					<div className="md:w-full">
						<img
							src={currentTechnology.images.landscape}
							alt=""
							className="w-[768px] h-[258px] md:w-full md:h-full"
						/>
					</div>
					<div className="space-x-4 py-8 flex justify-center">
						{state.technologies.map((technology, index) => (
							<button
								key={technology.name}
								className={`w-10 h-10 md:w-14 md:h-14 rounded-full ${
									state.currentIndex == index
										? 'bg-white'
										: 'text-white border border-gray-500 hover:border-white'
								}`}
								onClick={() => setTechnology(index)}
							>
								{index + 1}
							</button>
						))}
					</div>
					<div
						className="text-center py-4 md:px-24
					"
					>
						<div className="space-y-4">
							<p className="text-white font-normal font-Bellefair opacity-50 text-lg md:text-2xl">
								THE TERMINOLOGY...
							</p>
							<h2 className="text-white font-Bellefair font-normal text-2xl md:text-5xl">
								{currentTechnology.name.toUpperCase()}
							</h2>
						</div>
						<p className="text-lightBlue font-balowRegular font-normal px-4 py-4">
							{currentTechnology.description}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Technology;
