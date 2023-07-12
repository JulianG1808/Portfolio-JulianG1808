import React from "react";

const Dots = ({ activeIndex, onClick, imageSlider }) => {
    return (
        <div className="all-dots">
            {imageSlider.map((slide, idx) => (
                <span 
                key={idx} className={`${activeIndex === idx ? "dot active-dot" : "dot"}`}
                onClick={() => onClick(idx)}
                ></span>
            ))}
        </div>
    )
}

export default Dots;