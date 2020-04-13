import React, {useState} from "react";
import moment from 'moment';

const Activity = ({activity, strike = false, counter = false}) => {

    const [time, setTime] = useState(new Date());

    setInterval(() => {
        setTime(new Date());
    }, 1000);

    const MarriageDate = new Date(2020, 5, 27, 17, 0, 0, 0);
    const diff = moment(MarriageDate).diff(moment(time));
    const diffDuration = moment.duration(diff);
    return (
        <div className="flex flex-col justify-center ">
            <div className="py-3 flex mx-auto text-2xl items-center">
                <div className="mr-2">
                    <img src="https://image.flaticon.com/icons/svg/1216/1216649.svg" width="24" height="24"
                         alt="Heart free icon" title="Heart free icon"/>
                </div>
                <div>
                    <span className={strike ? 'line-through' : ''}>{activity}</span>
                </div>
                <div className="ml-2">
                    <img src="https://image.flaticon.com/icons/svg/1216/1216649.svg" width="24" height="24"
                         alt="Heart free icon" title="Heart free icon"/>
                </div>
            </div>
            {counter &&
            <div className="text-red-600">{`${diffDuration.months()} months, ${diffDuration.days()} days, ${diffDuration.hours()} hours, ${diffDuration.minutes()} minutes, ${diffDuration.seconds()} seconds`}</div>}
        </div>
    )
};

export default Activity;