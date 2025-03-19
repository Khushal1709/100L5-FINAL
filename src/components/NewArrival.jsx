import React from 'react';
import pro from "../image/pro.svg";
import { User,MessageSquare,Mail,Phone,MapPin} from "lucide-react"

const HeroSection = () => {
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


return (
    <div className="bg-[#EBFFF6]">
  <div className="px-5 md:px-6 lg:px-30 bg-[#EBFFF6] mx-auto py-4 md:py-6 lg:py-10">
    <h2 className="text-[#1B342F] text-lg md:text-2xl lg:text-3xl">
        Home/New Arrivals
    </h2>
    <h2 className='text-[#1B342F] text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 font-bold'>
        Krishna's Grace, Timeless Divine Beauty!
    </h2>

    {/* Products Grid */}
    <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {product.map((products) => (
            <div
                key={products.id}
                className="ring-1 ring-[#74B6A9] bg-[#EBFFF6] py-2 md:py-3 lg:py-4 px-2 md:px-4 lg:px-6 outline-none rounded-lg shadow-md p-2 md:p-4"
            >
                {/* Product Image */}
                <img
                    src={products.image}
                    alt={products.title}
                    className="rounded-lg w-full h-auto mb-2 md:mb-4"
                />

                {/* Product Details */}
                <div className='flex justify-between'>
                    <h3 className="text-base md:text-lg font-semibold">{products.title}</h3>
                    <p className="text-base md:text-xl font-bold">{products.price}</p>
                </div>
                <p className="text-xs md:text-sm text-[#1B342F]">{products.description}</p>

                {/* Rating */}
                <div className="flex justify-between">
                    <span className="text-yellow-500 text-base md:text-lg">★★★★★</span>
                    <span className="text-xs md:text-sm">{products.rating} ({products.reviews})</span>
                </div>
            </div>
        ))}
    </div>
</div>

    <div className="flex flex-col md:flex-row w-full  absoulate">
                {/* Left side - Form */}
                <div className="flex-[2] h-200 bg-[#EBFFF6] p-6 md:p-12">
                    <div className="max-w-md mx-auto mr-150">
                        <div className="text-center mb-8">
                            <h2 className="text-[#1B342F] text-lg font-medium ">Contact</h2>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Connect With Us Today!</h1>
                        </div>

                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="fullName" className="block text-sm font-medium text-[#1B342F]">
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
                                <label htmlFor="email" className="block text-sm font-medium text-[#1B342F]">
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
                                <label htmlFor="mobile" className="block text-sm font-medium text-[#1B342F]">
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
                                <label htmlFor="message" className="block text-sm font-medium text-[#1B342F]">
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
                                    <p className="text-sm text-[#1B342F]">Email Address</p>
                                    <p className="font-medium">xyztechnology04@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-[#1a3b39] rounded-full p-2 flex items-center justify-center">
                                    <Phone className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-[#1B342F]">Phone Number</p>
                                    <p className="font-medium">+91 83000 00042</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-[#1a3b39] rounded-full p-2 flex items-center justify-center">
                                    <MapPin className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-[#1B342F]">Location</p>
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