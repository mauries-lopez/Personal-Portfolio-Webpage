import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import './TestimonialCard.css'

export const TestimonialCard = ({
Name,
Education,
Position,
Testimonial,
Dp,
hrefLink
}) => {

    return (
        <div className="relative h-150 w-[80%] border-yellow-600 border-4 rounded-xl mt-20 mb-5 bg-[#1A1A1A] flex justify-end items-center font-sans flex-row">
            <div
                id = "displayPicture"
                className= "relative h-full w-[30%] bg-center bg-cover rounded-md"
                style={{ backgroundImage: `url(${Dp})` }}
            />
            <div className="relative h-full rounded-xl w-[70%] text-[#F0F0F0] p-3">
                <div className="relative md:h-[75%] 3xs:h-[80%] 3xs:text-sm md:text-xl ml-3 mr-3 3xs:overflow-y-scroll md:overflow-y-auto scroll-shadows-tc text-justify whitespace-pre-line">
                    {Testimonial}
                </div>
                <div className="relative ml-3 mr-3 mt-5 font-bold 3xs:text-md md:text-3xl animate-pulse">
                    <a
                    href={hrefLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        {Name}
                    </a>
                </div>
                <div className="relative ml-3 mr-3 italic 3xs:text-sm md:text-xl">
                    {Education}
                </div>
                <div className="relative ml-3 mr-3 italic text-sm md:text-xl">
                    {Position}
                </div>
            </div>
        </div>
    )
}