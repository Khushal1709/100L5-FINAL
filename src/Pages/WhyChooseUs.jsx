import React, { useRef, useEffect, useState } from 'react';
import cur from "../image/cur.svg";
import round from "../image/round.svg";


// ... (keep your existing icons and features array unchanged) ...

const icons = {
    layout: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z" />
        </svg>
    ),
    graphics: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
            <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
            <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
        </svg>
    ),
    performance: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clipRule="evenodd" />
        </svg>
    ),
    video: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
        </svg>
    )
};

const features = [
    {
        id: 1,
        icon: 'layout',
        title: 'RESPONSIVE LAYOUT',
        description: 'Powerful Layout with Responsive functionality that can be adapted to any screen size.'
    },
    {
        id: 2,
        icon: 'graphics',
        title: 'RETINA READY GRAPHICS',
        description: 'Powerful Layout with Responsive functionality that can be adapted to any screen size.'
    },
    {
        id: 3,
        icon: 'performance',
        title: 'POWERFUL PERFORMANCE',
        description: 'Powerful Layout with Responsive functionality that can be adapted to any screen size.'
    },
    {
        id: 4,
        icon: 'video',
        title: 'HTML5 VIDEO',
        description: 'Powerful Layout with Responsive functionality that can be adapted to any screen size.'
    },
    {
        id: 5,
        icon: 'video',
        title: 'HTML5 VIDEO',
        description: 'Powerful Layout with Responsive functionality that can be adapted to any screen size.'
    },
];


function WhyChooseUs() {
    const scrollRef = useRef(null);
    const cardRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);

    useEffect(() => {
        if (cardRef.current) {
            const width = cardRef.current.offsetWidth + 32; // card width + margin
            setCardWidth(width);
        }
    }, []);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer || !cardWidth) return;

        const interval = setInterval(() => {
            setCurrentIndex(prev => {
                const nextIndex = (prev + 1) % features.length;
                scrollContainer.scrollTo({
                    left: nextIndex * cardWidth,
                    behavior: 'smooth'
                });
                return nextIndex;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [cardWidth]);

    return (
        <div className="max-w-7xl  mx-auto px-4 py-16">
            {/* Header Section (keep this unchanged) */}
            <div className="relative mb-14">
                
                <div className="absolute left-5 -top-10 w-40 h-40 bg-blue-50 rounded-full opacity-70">
                     <img src={round} alt='hello'></img>
                 </div>
                
                <div className="relative">
                    <div className="flex items-center mb-2">
                        <p className="text-gray-500 font-medium text-sm tracking-wider">POPULAR SERVICE</p>
                        <div className="ml-3 h-px bg-gray-300 flex-grow"></div>
                    </div>
                    <h2 className="text-[#0a2463] text-4xl md:text-5xl font-bold mt-4">WHY CHOOSE US ?</h2>
                </div>
            </div>

            {/* Modified Features Carousel */}
            <div
                ref={scrollRef}
                className="flex overflow-hidden scrollbar-hide snap-x snap-mandatory pb-4 "
                style={{ scrollBehavior: 'smooth' }}
            >
                {features.map((feature, index) => (
                    <div
                        key={feature.id}
                        ref={index === 0 ? cardRef : null}
                        className="bg-[#eef6ff] rounded-lg p-10 w-[280px] transition-all hover:shadow-lg relative  mx-4 flex-shrink-0 "
                    >
                        {/* Card Content (keep this unchanged) */}
                        <div className="bg-[#0a2463] text-white w-12 h-12 rounded-full flex items-center justify-center mb-5">
                            {icons[feature.icon]}
                        </div>
                        <h3 className="text-[#676c72] font-semibold text-lg mb-3">{feature.title}</h3>
                        <p className="text-[#83878c] text-sm">{feature.description}</p>
                        <img
                            src={cur}
                            alt=""
                            className="absolute top-0 right-0 h-full object-cover"
                            style={{ width: "50%" }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WhyChooseUs;
