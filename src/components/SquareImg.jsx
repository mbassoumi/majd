import React from "react";

const SquareImg = ({src, alt}) => {

    return (
        <img src={src} alt={alt} className="overflow-hidden object-cover w-32 h-32  overflow-hidden"/>
    )
};

export default SquareImg;