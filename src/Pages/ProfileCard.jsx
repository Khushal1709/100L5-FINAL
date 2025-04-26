import men from "../image/men.svg";
import men2 from "../image/men2.svg";
import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const skills = [
    { label: "WORDPRESS", value: 80 },
    { label: "CSS3", value: 73 },
    { label: "HTML5", value: 90 },
    { label: "JQUERY", value: 76 },
    { label: "RUBY", value: 85 },
];

const circleColor = "#002b5c"; // Deep blue

const AnimatedProgressBar = ({ value, label }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(0);
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev < value) return prev + 1;
                clearInterval(timer);
                return value;
            });
        }, 18); // Adjust speed as needed
        return () => clearInterval(timer);
    }, [value]);

    return (
        <div className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-1/5 p-2">
            <div className="w-20 h-20">
                <CircularProgressbar
                    value={progress}
                    text={`${progress}%`}
                    styles={buildStyles({
                        pathColor: circleColor,
                        textColor: circleColor,
                        trailColor: "#f5f5f5",
                        textSize: "22px",
                        strokeLinecap: "round",
                    })}
                />
            </div>
            <div className="mt-2 font-bold text-xs text-center text-[#002b5c] tracking-wider">
                {label}
            </div>
        </div>
    );
};

function ProfileCard() {
    return (
        <>
            <div className="flex flex-col gap-10 lg:flex-row items-center justify-center max-w-7xl mx-auto p-6 bg-white rounded-lg ">
                {/* Left Side - Image */}
                <div className="md:w-1/3 flex justify-center md:justify-end mb-8 md:mb-0">
                    <div className="relative rounded-lg  overflow-hidden">
                        <img
                            src={men} // Replace with your image path
                            alt="CEO Profile"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                {/* Right Side - Info */}
                <div className="text-center lg:text-left px-4 lg:pl-8">
                    <p className="text-sm font-semibold text-gray-500 uppercase">
                        CEO & Co-Founder
                    </p>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-[#002F6C] mt-1">
                        JOHN DOE XYZ
                    </h1>
                    <p className="text-gray-600 mt-4 max-w-xl leading-relaxed">
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Assumenda,
                        Dolorum, Vero Ipsum Molestiae Minima Odio Quo Voluptate Illum Excepturi
                        Quam Cum Voluptates Doloribus Quae Nisi Tempore Necessitatibus Dolores
                        Ducimus Enim Libero Eaque Explicabo Suscipit Animi At Quaerat Aliquid
                        Ex Expedita Perspiciatis? Saepe, Aperiam, Nam Unde Quas Beatae Vero Vitae
                        Nulla.
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap justify-center lg:justify-start mt-6 gap-10">
                        <div className="flex flex-wrap justify-center w-full max-w-4xl mb-10">
                            {skills.map((skill) => (
                                <AnimatedProgressBar
                                    key={skill.label}
                                    value={skill.value}
                                    label={skill.label}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-start mt-6 gap-4">
                        <a
                            href="#"
                            className="bg-[#002b5c] rounded-full w-12 h-12 flex items-center justify-center"
                        >
                            <FaLinkedin className="text-white" size={26} />
                        </a>
                        <a
                            href="#"
                            className="bg-[#002b5c] rounded-full w-12 h-12 flex items-center justify-center"
                        >
                            <FaTwitter className="text-white" size={26} />
                        </a>
                        <a
                            href="#"
                            className="bg-[#002b5c] rounded-full w-12 h-12 flex items-center justify-center"
                        >
                            <FaFacebook className="text-white" size={26} />
                        </a>
                    </div>
                    {/* Social Icons */}

                </div>
            </div>

            <div className="flex flex-col gap-10 lg:flex-row items-center justify-center max-w-7xl mx-auto p-6 bg-white rounded-lg ">
                <div className="text-center lg:text-left px-4 lg:pl-8">
                    <p className="text-sm font-semibold text-gray-500 uppercase">
                        CEO & Co-Founder
                    </p>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-[#002F6C] mt-1">
                        JOHN DOE XYZ
                    </h1>
                    <p className="text-gray-600 mt-4 max-w-xl leading-relaxed">
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Assumenda,
                        Dolorum, Vero Ipsum Molestiae Minima Odio Quo Voluptate Illum Excepturi
                        Quam Cum Voluptates Doloribus Quae Nisi Tempore Necessitatibus Dolores
                        Ducimus Enim Libero Eaque Explicabo Suscipit Animi At Quaerat Aliquid
                        Ex Expedita Perspiciatis? Saepe, Aperiam, Nam Unde Quas Beatae Vero Vitae
                        Nulla.
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap justify-center lg:justify-start mt-6 gap-10">
                        <div className="flex flex-wrap justify-center w-full max-w-4xl mb-10">
                            {skills.map((skill) => (
                                <AnimatedProgressBar
                                    key={skill.label}
                                    value={skill.value}
                                    label={skill.label}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-start mt-6 gap-4">
                        <a
                            href="#"
                            className="bg-[#002b5c] rounded-full w-12 h-12 flex items-center justify-center"
                        >
                            <FaLinkedin className="text-white" size={26} />
                        </a>
                        <a
                            href="#"
                            className="bg-[#002b5c] rounded-full w-12 h-12 flex items-center justify-center"
                        >
                            <FaTwitter className="text-white" size={26} />
                        </a>
                        <a
                            href="#"
                            className="bg-[#002b5c] rounded-full w-12 h-12 flex items-center justify-center"
                        >
                            <FaFacebook className="text-white" size={26} />
                        </a>
                    </div>
                    {/* Social Icons */}

                </div>

                <div className="md:w-1/3 flex justify-center md:justify-end mb-8 md:mb-0">
                    <div className="relative rounded-lg  overflow-hidden">
                        <img
                            src={men2} // Replace with your image path
                            alt="CEO Profile"
                            className="object-cover w-full h-full"
                        />

                    </div>
                </div>
            </div>

        </>
    );
}
export default ProfileCard;