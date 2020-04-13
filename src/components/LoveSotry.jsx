import React from "react";
import CalenderDay from "./CalenderDay";
import SquareImg from "./SquareImg";
import Activity from "./Activity";


const LoveStory = ({day, month, year, dayName, activity, src, strike = false, counter = false}) => {

    return (
        <div className="flex justify-between items-center w-3/4 border rounded-lg p-2 m-2">
            <CalenderDay day={day} month={month} year={year} dayName={dayName}/>
            <Activity activity={activity} strike={strike} counter={counter}/>
            <SquareImg src={src} alt="love"/>
        </div>
    )
};

export default LoveStory;