import { MapPin, Twitter, Phone } from "lucide-react";
import bg from "../image/contactbg.svg";
import c1 from "../image/c1.svg";
import bg1 from "../image/bg.svg";


export default function ContactPage() {
  return (
    <div className="flex flex-col mx-auto">
      {/* Hero Section */}
      <div
        className="relative h-120 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0  flex items-center justify-start max-w-7xl mx-auto">
          <div className="text-white text-left">
            <div className="absolute top-40 right-280 rotate-360 z-0 ">
              <img src={bg1} alt="bg" className="" />
            </div>
            <h1 className="text-6xl font-bold">CONTACT US</h1>

            <p className="mt-4">Get in Touch with Us</p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Info */}
          <div className="space-y-8">
            <div>
              <img
                src={c1}
                alt="Business meeting"
                className="rounded-md object-cover w-full h-auto"
              />
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#002C6D] p-3 rounded-full">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-blue-900 uppercase">
                  Our Headquarters
                </h3>
                <p className="text-gray-600">220 MELBOURNE, AUSTRALIA</p>
                <p className="text-gray-600">CITY-250XXX</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#002C6D] p-3 rounded-full">
                <Twitter className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-blue-900 uppercase">
                  Follow on Twitter
                </h3>
                <p className="text-gray-600">2.2M FOLLOWERS</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#002C6D] p-3 rounded-full">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-blue-900 uppercase">
                  Speak to us
                </h3>
                <p className="text-gray-600">(123) 456 7890</p>
                <p className="text-gray-600">+87 878 87870</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="md:col-span-2 flex justify-center">
            <div className="w-full max-w-2xl">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                {[
                  { label: "Name", type: "text" },
                  { label: "Mobile", type: "tel" },
                  { label: "Company Name", type: "text" },
                  { label: "Email", type: "email" },
                ].map((field, index) => (
                  <div key={index}>
                    <label className="block text-sm font-medium text-gray-700 mb-1 uppercase">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      className="w-full p-3 bg-blue-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ))}

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1 uppercase">
                    Address
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 bg-blue-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 uppercase">
                    City
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 bg-blue-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 uppercase">
                    State
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 bg-blue-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1 uppercase">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full p-3 bg-blue-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-[#002C6D] text-white py-3 rounded-md hover:bg-[#001A4A] transition-colors"
                  >
                    LET&apos;S CONNECT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-96 relative mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805196.5096411199!2d144.49268362290042!3d-37.97015407788675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
