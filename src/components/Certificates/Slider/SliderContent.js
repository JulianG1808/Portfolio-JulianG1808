import React from "react";

const SliderContent = ({ activeIndex, imageSlider }) => {
    return (
        <section>
                {imageSlider.map((slide, idx) => (
                    <div 
                    key={idx} 
                    className={idx === activeIndex ? "slides active" : "inactive"}
                    >
                        <img className="slide-image" src={slide.url} alt=""/>
                        {/* <span className="slide-title">{slide.title}</span> */}
                    </div>
                ))}
        </section>
    )
}

export default SliderContent;