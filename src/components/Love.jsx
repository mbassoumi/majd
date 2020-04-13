import React, {useState} from "react";
import Pic2 from '../img/Pic2.png'
import LoveStory from "./LoveSotry";
import moment from "moment";


const Love = () => {

    const [time, setTime] = useState(new Date());

    setInterval(() => {
        setTime(new Date());
    }, 1000);

    const MarriageDate = new Date(2020, 5, 27, 17, 0, 0, 0);
    const diff = moment(MarriageDate).diff(moment(time));
    const diffDuration = moment.duration(diff);

    return (
        <div className="h-screen w-screen">

            <div className="flex justify-center items-center mx-auto h-screen">
                <div className="flex flex-col w-full justify-center items-center ">
                    <div className="text-5xl text-green-700">قصة حبنا</div>
                    <div className="text-5xl text-green-700">Majd & Nasifa</div>
                    <LoveStory src="https://www.flaticon.com/premium-icon/icons/svg/2702/2702249.svg" year={2019} day={4} month="Sep" dayName="Wed" activity="كتب الكتاب" />
                    <LoveStory src={Pic2} year={2019} day={20} month="Sep" dayName="Fri" activity="حفلة الخطبة" />
                    <LoveStory src="https://www.flaticon.com/premium-icon/icons/svg/2571/2571884.svg" year={2020} day={10} month="Apr" dayName="Fri" activity="العرس" strike={true}/>
                    <LoveStory src="https://image.flaticon.com/icons/svg/2785/2785676.svg" year={2020} day={27} month="Jun" dayName="Sat" activity="العرس"  counter={false}/>
                    <div className="text-red-600">{`${diffDuration.months()} months, ${diffDuration.days()} days, ${diffDuration.hours()} hours, ${diffDuration.minutes()} minutes, ${diffDuration.seconds()} seconds`}</div>
                </div>
            </div>
        </div>
    )
};

export default Love;