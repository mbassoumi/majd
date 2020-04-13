import React from "react";

const CalenderDay = ({day, month, year, dayName}) => {

    return (
        <div className="block rounded-t overflow-hidden bg-white text-center w-24">
            <div className="bg-red text-white py-1 bg-red-600">
                {month}
            </div>
            <div className="pt-1 border-l border-r">
                <span className="text-4xl font-bold">{day}</span>
            </div>
            <div className="pb-2 px-2 border-l border-r border-b rounded-b flex justify-between">
                <span className="text-xs font-bold">{dayName}</span>
                <span className="text-xs font-bold">{year}</span>
            </div>
        </div>
    )
};

export default CalenderDay;