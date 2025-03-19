import React from 'react';
import { useState } from "react"
import vagha from "../image/vagha.svg";
import jewelary from "../image/jewelary.svg";
import Tilak from "../image/Tilak.svg";
import All from "../image/All.svg";
import Summar from "../image/Summar.svg";
import Home from "../image/Home.svg";
import pro from "../image/pro.svg";
import user from "../image/user.svg";
import { User, Mail, Phone, MessageSquare, MapPin } from "lucide-react"

const HeroSection = () => {
    const products = [
        {
            id: 1,
            title: "Krishna's Grace",
            price: "₹1200.00",
            description:
                "Immerse in Krishna's grace with our timeless collection, blending",
            rating: 4.5,
            reviews: 76,
            image: pro
        },
        {
            id: 2,
            title: "Krishna's Grace",
            price: "₹1200.00",
            description:
                "Immerse in Krishna's grace with our timeless collection, blending",
            rating: 4.5,
            reviews: 76,
            image: pro
        },
        {
            id: 3,
            title: "Krishna's Grace",
            price: "₹1200.00",
            description:
                "Immerse in Krishna's grace with our timeless collection, blending",
            rating: 4.5,
            reviews: 76,
            image: pro
        },
        {
            id: 4,
            title: "Krishna's Grace",
            price: "₹1200.00",
            description:
                "Immerse in Krishna's grace with our timeless collection, blending",
            rating: 4.5,
            reviews: 76,
            image: pro
        },
    ];

    const [activeButton, setActiveButton] = useState("Vagh");

    const buttons = ["Vagh", "Jewelry", "Tilak"];

    const product = [
        {
            id: 1,
            title: "Krishna's Grace",
            price: "₹1200.00",
            description:
                "Immerse in Krishna's grace with our timeless collection, blending",
            rating: 4.5,
            reviews: 76,
            image: pro
        },
        {
            id: 2,
            title: "Krishna's Grace",
            price: "₹1200.00",
            description:
                "Immerse in Krishna's grace with our timeless collection, blending",
            rating: 4.5,
            reviews: 76,
            image: pro
        },
        {
            id: 3,
            title: "Krishna's Grace",
            price: "₹1200.00",
            description:
                "Immerse in Krishna's grace with our timeless collection, blending",
            rating: 4.5,
            reviews: 76,
            image: pro
        },
        {
            id: 4,
            title: "Krishna's Grace",
            price: "₹1200.00",
            description:
                "Immerse in Krishna's grace with our timeless collection, blending",
            rating: 4.5,
            reviews: 76,
            image: pro
        },
        {
            id: 5,
            title: "Krishna's Grace",
            price: "₹1200.00",
            description:
                "Immerse in Krishna's grace with our timeless collection, blending",
            rating: 4.5,
            reviews: 76,
            image: pro
        },
        {
            id: 6,
            title: "Krishna's Grace",
            price: "₹1200.00",
            description:
                "Immerse in Krishna's grace with our timeless collection, blending",
            rating: 4.5,
            reviews: 76,
            image: pro
        }, {
            id: 7,
            title: "Krishna's Grace",
            price: "₹1200.00",
            description:
                "Immerse in Krishna's grace with our timeless collection, blending",
            rating: 4.5,
            reviews: 76,
            image: pro
        },
        {
            id: 8,
            title: "Krishna's Grace",
            price: "₹1200.00",
            description:
                "Immerse in Krishna's grace with our timeless collection, blending",
            rating: 4.5,
            reviews: 76,
            image: pro
        },
    ];

    const testimonials = [
        {
            name: "Manu Munda",
            review:
                "Experience the divine elegance of our Sri Krishna Collection! Inspired by timeless devotion, each piece radiates grace, spirituality, and tradition. Embrace the essence of Lord Krishna with exquisite craftsmanship and beauty.",
            rating: 5,
            image: "https://via.placeholder.com/50", // Replace with actual image URL
        },
        {
            name: "Kalin Bhai",
            review:
                "Experience the divine elegance of our Sri Krishna Collection! Inspired by timeless devotion, each piece radiates grace, spirituality, and tradition. Embrace the essence of Lord Krishna with exquisite craftsmanship and beauty.",
            rating: 5,
            image: "https://via.placeholder.com/50", // Replace with actual image URL
        },
        {
            name: "Krushant Vamja",
            review:
                "Experience the divine elegance of our Sri Krishna Collection! Inspired by timeless devotion, each piece radiates grace, spirituality, and tradition. Embrace the essence of Lord Krishna with exquisite craftsmanship and beauty.",
            rating: 5,
            image: "https://via.placeholder.com/50", // Replace with actual image URL
        },
    ];


    return (
        <div className="bg-[#EBFFF6]">
            {/* Category Navigation */}
            <nav className="flex justify-center space-x-6 py-4">
                <div className="text-center">
                    <img
                        src={vagha}
                        alt="Vagha"
                        className="rounded-full mx-auto h-30 w-30"
                    />
                    <p className="text-sm font-medium mt-2">Vagha</p>
                </div>
                <div className="text-center">
                    <img
                        src={jewelary}
                        alt="Jewelry"
                        className="rounded-full mx-auto  h-30 w-30"
                    />
                    <p className="text-sm font-medium mt-2">Jewelry</p>
                </div>
                <div className="text-center">
                    <img
                        src={Tilak}
                        alt="Tilak"
                        className="rounded-full mx-auto  h-30 w-30"
                    />
                    <p className="text-sm font-medium mt-2">Tilak</p>
                </div>
                <div className="text-center">
                    <img
                        src={All}
                        alt="All Combo"
                        className="rounded-full mx-auto  h-30 w-30"
                    />
                    <p className="text-sm font-medium mt-2">All Combo</p>
                </div>
                <div className="text-center">
                    <img
                        src={Summar}
                        alt="Summer Collection"
                        className="rounded-full mx-auto  h-30 w-30"
                    />
                    <p className="text-sm font-medium mt-2">Summer Collection</p>
                </div>
            </nav>

            {/* Hero Section */}
            <div
                className="relative bg-cover bg-center h-[700px] flex flex-col justify-center items-center text-white px-4"
                style={{
                    backgroundImage: `url(${Home})`,
                }}
            >
                <div className=' justify-start'>
                    <h1 className="text-4xl font-bold mb-4">
                        Divine Elegance, Sri Krishna Collection!
                    </h1>
                    <p className="text-lg mb-6">
                        Experience the divine elegance of our Sri Krishna Collection! Inspired
                        by timeless devotion, each piece radiates grace, spirituality, and
                        tradition.
                    </p>
                    <button className="bg-[#EBFFF6] text-[#1B342F] py-2 px-6 rounded-lg text-lg">
                        Shop Now
                    </button>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="bg-[#1B342F] py-4 text-center text-white text-sm">
                Experience the divine elegance of our Sri Krishna Collection! Inspired
                by timeless devotion.
            </footer>
            <div className="max-w-7xl mx-auto bg-green-50 py-10 px-6">
                <h2 className="text-[#1B342F] text-2xl">
                    Best sellers </h2>
                <h2 className='text-[#1B342F] text-4xl mb-6 font-bold'>Krishna's Grace, Timeless Divine Beauty!</h2>


                {/*Buttons*/}
                <div className="flex mb-8">
                    <div className="flex bg-[#1B342F] rounded-full p-1">
                        {buttons.map((button) => (
                            <button
                                key={button}
                                onClick={() => setActiveButton(button)}
                                className={`px-7 py-2 rounded-full text-sm font-medium ${activeButton === button
                                    ? "bg-white text-green-900"
                                    : "text-white hover:bg-green-700"
                                    }`}
                            >
                                {button}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Products Grid */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="ring-1 ring-[#74B6A9] bg-[#EBFFF6] py-3 px-4 outline-none rounded-lg shadow-md p-4"
                        >
                            {/* Product Image */}
                            <img
                                src={product.image}
                                alt={product.title}
                                className="rounded-lg w-full h-auto mb-4"
                            />

                            {/* Product Details */}
                            <h3 className="text-lg font-semibold">{product.title}</h3>
                            <p className="text-xl font-bold mt-2">{product.price}</p>
                            <p className="text-sm text-gray-600">{product.description}</p>


                            {/* Rating */}
                            <div className="flex items-center mt-2">
                                <span className="text-yellow-500 text-lg">★★★★★</span>
                                <span className="ml-1 text-sm">{product.rating} ({product.reviews})</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto bg-green-50 py-10 px-6">
                <h2 className="text-[#1B342F] text-2xl">
                    New Arrivals </h2>
                <h2 className='text-[#1B342F] text-4xl mb-6 font-bold'>Krishna's Grace, Timeless Divine Beauty!</h2>


                {/* Products Grid */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                    {product.map((products) => (
                        <div
                            key={products.id}
                            className="ring-1 ring-[#74B6A9] bg-[#EBFFF6] py-3 px-4 outline-none rounded-lg shadow-md  p-4"
                        >
                            {/* Product Image */}
                            <img
                                src={products.image}
                                alt={products.title}
                                className="rounded-lg w-full h-auto mb-4"
                            />

                            {/* Product Details */}
                            <h3 className="text-lg font-semibold">{products.title}</h3>
                            <p className="text-xl font-bold mt-2">{products.price}</p>
                            <p className="text-sm text-gray-600">{products.description}</p>


                            {/* Rating */}
                            <div className="flex items-center mt-2">
                                <span className="text-yellow-500 text-lg">★★★★★</span>
                                <span className="ml-1 text-sm">{products.rating} ({products.reviews})</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-[#EBFFF6]">

                {/* Testimonial Section */}
                <section className="bg-[#EBFFF6] py-12">
                    <h2 className="text-center text-[#1B342F] text-xl font-medium mb-2">Review</h2>
                    <h2 className="text-center text-[#1B342F] text-3xl font-bold mb-8">
                        Krishna's Grace, Timeless Divine Beauty!
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-lg mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="ring-1 ring-[#74B6A9] bg-[#EBFFF6] py-3 px-4 outline-none rounded-lg p-6 flex flex-col items-center text-center"
                            >
                                {/* Rating */}
                                <div className="flex mt-4 mr-45">
                                    {Array.from({ length: testimonial.rating }).map((_, index) => (
                                        <svg

                                            key={index}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#FFD700"
                                            viewBox="0 0 24 24"
                                            className="w-5 h-5"
                                        >
                                            <path d="M12 .587l3.668 7.431L23.5 9.75l-5.832 5.684L19.336 24 12 19.882l-7.336 4.118L6.832 15.434l-5.832-5.684L8.332 8.018z" />
                                        </svg>
                                    ))}
                                </div>
                                <br></br>

                                {/* Review Text */}
                                <p className="text-[#1B342F] text-sm mt-2 text-justify whitespace-normal">{testimonial.review}</p>
                                <br></br>
                                <div className='flex mr-25 gap-2'>
                                    {/* Profile Image */}
                                    <img
                                        src={user}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full mb-4"
                                    />

                                    {/* Name */}
                                    <h3 className="font-semibold mt-2 text-[#1B342F]">{testimonial.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <div className="flex flex-col md:flex-row w-full  absoulate">
                {/* Left side - Form */}
                <div className="flex-[2] h-200 bg-[#e8f7f2] p-6 md:p-12">
                    <div className="max-w-md mx-auto mr-150">
                        <div className="text-center mb-8">
                            <h2 className="text-gray-800 text-lg font-medium ">Contact</h2>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Connect With Us Today!</h1>
                        </div>

                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-3 flex items-center">
                                        <User className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        id="fullName"
                                        placeholder="Enter Your Full Name"
                                        className="pl-10 w-200 ring-1 ring-[#74B6A9] bg-[#EBFFF6] py-3 px-4 outline-none focus:ring-2 focus:ring-[#74B6A9] focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Enter Your Gmail Address"
                                        className="pl-10 w-200 ring-1 ring-[#74B6A9] bg-[#EBFFF6] py-3 px-4 outline-none focus:ring-2 focus:ring-[#74B6A9] focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                                    Mobile Number
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                        <Phone className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="tel"
                                        id="mobile"
                                        placeholder="Enter Your Mobile Number"
                                        className="pl-10 w-200 ring-1 ring-[#74B6A9] bg-[#EBFFF6] py-3 px-4 outline-none focus:ring-2 focus:ring-[#74B6A9] focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Send Message
                                </label>
                                <div className="relative">
                                    <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                                        <MessageSquare className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        placeholder="Send Your message"
                                        className="pl-10 w-200 ring-1 ring-[#74B6A9] bg-[#EBFFF6] py-3 px-4 outline-none focus:ring-2 focus:ring-[#74B6A9] focus:border-transparent"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


                {/* Right side - Contact Info */}
                <div className="flex-1 bg-[#1a3b39] h-200 md:p-15 flex items-center justify-center relative">
                    <div className="bg-[#EBFFF6] mt-10 ring-1 ring-[#74B6A9] p-9 max-w-sm w-full absolute mr-150">
                        <div className="space-y-7">
                            <div className="flex items-center gap-4">
                                <div className="bg-[#1a3b39] rounded-full p-2 flex items-center justify-center">
                                    <Mail className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email Address</p>
                                    <p className="font-medium">xyztechnology04@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-[#1a3b39] rounded-full p-2 flex items-center justify-center">
                                    <Phone className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Phone Number</p>
                                    <p className="font-medium">+91 83000 00042</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-[#1a3b39] rounded-full p-2 flex items-center justify-center">
                                    <MapPin className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="font-medium">B-8, 210, Township-2 Sarthana Jakatnaka, Surat Gujarat 395008</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
