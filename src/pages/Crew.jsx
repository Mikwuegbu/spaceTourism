import { useReducer } from "react";
import data from "../data.json";

//this is the initial Value of the State
const initialCrew = {
  currentIndex: 0,
  crew: data.crew,
};

//the rule to manage the state Object
const reducerFn = (state, action) => {
  switch (action.type) {
    case "setCrew":
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
      type: "setCrew",
      index,
    });
  };

  //this is the current state of the state Object
  const currentCrew = state.crew[state.currentIndex];

  return (
    <div className="bg-bgMobileCrew md:bg-bgTabletCrew lg:bg-bgDesktopCrew min-h-screen bg-cover">
      <div className="pt-36 lg:pt-44 px-10 lg:px-40 text-white">
        <div className="font-balowCondensed text-base md:text-xl font-normal text-white md:text-justify text-center">
          <span className="font-bold opacity-25 px-4">02</span>
          MEET YOUR CREW
        </div>
        <div className="md:px-20 lg:px-0 lg:flex lg:items-center lg:space-x-16">
          <div className="flex flex-col lg:w-full items-center lg:items-start text-center lg:text-justify py-8 lg:py-16 lg:px-2">
            <div className="space-y-1.5 md:space-y-4">
              <p className="font-Bellefair font-normal text-lg md:text-2xl opacity-50">
                {currentCrew.role.toUpperCase()}
              </p>
              <h2 className="font-Bellefair font-normal text-2xl md:text-4xl">
                {currentCrew.name.toUpperCase()}
              </h2>
            </div>
            <p className="font-balowRegular font-normal lg:text-lg text-lightBlue py-6 mb-8">
              {currentCrew.bio}
            </p>
            <div className="space-x-4 lg:space-x-8 lg:pt-40">
              {state.crew.map((crew, index) => {
                return (
                  <button
                    key={crew.name}
                    onClick={() => setCrew(index)}
                    className={`w-2.5 h-2.5 lg:w-4 lg:h-4 rounded-full ${
                      state.currentIndex == index
                        ? "bg-white"
                        : "bg-white opacity-20"
                    }`}
                  ></button>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center w-full py-6 md:py-0 px-6 lg:py-12 lg:mx-8">
            <img
              src={currentCrew.images.webp}
              alt=""
              className="w-[271.24px] h-[340px] md:w-[446.74px] md:h-[560px] lg:w-[539.28px] lg:h-[676px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
