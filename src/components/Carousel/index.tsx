"use client";

import { useState } from "react";
import Image from "next/image";

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        "/images/carousel/1.jpg",
        "/images/carousel/2.jpg",
        "/images/carousel/3.jpg",
        "/images/carousel/4.jpg",
        "/images/carousel/5.jpg",
        "/images/carousel/6.jpg",
        "/images/carousel/7.jpg",    
    ];

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section id="features" className="">
            <div id="default-carousel" className="relative w-full max-w-7xl mx-auto" data-carousel="slide">
                <div className="relative overflow-hidden rounded-lg" style={{ paddingTop: '100%' }}>
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 duration-700 ease-in-out ${index === activeIndex ? "block" : "hidden"}`}
                            data-carousel-item
                        >
                            <Image
                                src={src}
                                fill
                                className="absolute block w-full h-full object-cover"
                                alt={`Slide ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-blue-500" : "bg-gray-300"}`}
                            aria-current={index === activeIndex}
                            aria-label={`Slide ${index + 1}`}
                            onClick={() => setActiveIndex(index)}
                        ></button>
                    ))}
                </div>
                <button
                    type="button"
                    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={handlePrev}
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={handleNext}
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </section>
    );
};

export default Carousel;
