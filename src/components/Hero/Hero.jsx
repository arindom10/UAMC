import 'animate.css';
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

const Hero = () => {
    const sliderData = [
        {
            id: 1,
            image: "https://i.postimg.cc/ZqvR1p7V/banner-1.jpg",
            title: "Excellence in Medical Education, Innovation in Healthcare",
            description: "Description for Slide 1",
        },
        {
            id: 2,
            image: "https://i.postimg.cc/dVx3H4Bh/banner-2.jpg",
            title: "Slide 2",
            description: "Description for Slide 2",
        },
        {
            id: 3,
            image: "https://i.postimg.cc/QtLtsCvs/banner-3.jpg",
            title: "Slide 3",
            description: "Description for Slide 3",
        },
    ];

    // Active slide index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Keen Slider with autoplay that does not stop on hover
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            loop: true,
            slideChanged(slider) {
                setCurrentIndex(slider.track.details.rel);
            },
        },
        [
            (slider) => {
                let timeout;
                
                function nextTimeout() {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => {
                        slider.next();
                    }, 2000);
                }

                slider.on("created", nextTimeout);
                slider.on("dragStarted", () => clearTimeout(timeout));
                slider.on("animationEnded", nextTimeout);
                slider.on("updated", nextTimeout);

                // Resume autoplay even when mouse is hovered
                slider.container.addEventListener("mouseleave", nextTimeout);
            },
        ]
    );

    // Slider navigation handlers
    const handlePrevious = () => {
        instanceRef.current?.prev();
    };

    const handleNext = () => {
        instanceRef.current?.next();
    };

    return (
        <div className="relative w-full mx-auto font-mulish">
            {/* Slider Section */}
            <div ref={sliderRef} className="relative keen-slider font-rajdhani h-auto">
                {sliderData.map((slide, index) => (
                    <div key={index} className="keen-slider__slide number-slide relative inset-0">
                        <img
                            className="w-full h-[50vh] sm:h-[60vh] md:h-[100vh] object-cover animate__animated animate__fadeInDown"
                            src={slide.image}
                            alt={slide.title}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col text-center items-center justify-center space-y-4 px-6 sm:px-8 lg:px-20">
                            <h2 className="font-cinzel text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white animate__animated animate__fadeInUp">
                                {slide.title}
                            </h2>
                            <p className="font-mulish text-md sm:text-lg md:text-2xl text-gray-300 animate__animated animate__fadeInUp">
                                {slide.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Controls */}
            <div className="absolute font-cinzel top-20 left-0 right-0 flex justify-center items-center space-x-4 w-full z-50">
                <button
                    onClick={handlePrevious}
                    className="flex text-white font-semibold px-4 py-2 rounded-full hover:bg-primary-dark"
                    aria-label="Previous Slide"
                >
                    Prev
                </button>
                <div className="border border-gray-400 min-w-14 hidden md:block"></div>
                <div className="flex justify-center h-5 space-x-4">
                    {sliderData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => instanceRef.current?.moveToIdx(index)}
                            className={`text-xl font-bold border-r border-gray-400 px-2 ${
                                currentIndex === index ? "text-secondary-base" : "text-white"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            0{index + 1}
                        </button>
                    ))}
                </div>
                <div className="border border-gray-400 min-w-14 hidden md:block"></div>
                <button
                    onClick={handleNext}
                    className="text-white px-4 py-2 font-semibold rounded-full hover:bg-primary-dark"
                    aria-label="Next Slide"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Hero;
