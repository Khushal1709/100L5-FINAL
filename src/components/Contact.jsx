import { MapPin, Phone, Mail } from "lucide-react";
import { User,MessageSquare} from "lucide-react"

const ContactInfo = () => {
  return (
    <div className="bg-[#EBFFF6] py-12">
      <div className="px-30 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        
        {/* Location Section */}
        <div className="shadow-lg p-6 text-center ring-1 ring-[#74B6A9] bg-[#EBFFF6]">
        <div className="flex justify-center">
            <div className="flex justify-center items-center w-16 h-16 bg-green-900 text-white rounded-full">
              <MapPin className="h-8 w-8 text-white" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Location</h3>
          <p className="text-gray-700 leading-relaxed">
            123 Industrial Area, Textile Hub
            <br />
            New Delhi, 110001
            <br />
            India
          </p>
        </div>

        {/* Phone Section */}
        <div className="shadow-lg p-6 text-center ring-1 ring-[#74B6A9] bg-[#EBFFF6]">
        <div className="flex justify-center">
          <div className="flex justify-center items-center w-16 h-16 bg-green-900 text-white rounded-full mb-4">
            <Phone className="h-8 w-8 text-white" />
          </div>
          </div>
          <h3 className="text-lg font-semibold text-[#1B342F] mb-2">Phone</h3>
          <p className="text-[#1B342F] leading-relaxed">
            Sales: +91 98765 43210
            <br />
            Support: +91 98765 43211
            <br />
            Office: +91 11 2345 6789
          </p>
        </div>

        {/* Email Section */}
        <div className="shadow-lg  p-6 text-center ring-1 ring-[#74B6A9] bg-[#EBFFF6]">
        <div className="flex justify-center">
          <div className="flex justify-center items-center w-16 h-16 bg-green-900 text-white rounded-full mb-4">
            <Mail className="h-8 w-8 text-white" />
          </div>
          </div>
          <h3 className="text-lg font-semibold text-[#1B342F] mb-2">Email</h3>
          <p className="text-[#1B342F] leading-relaxed">
            Sales: sales@vaibhavinternational.com
            <br />
            Support: support@vaibhavinternational.com
            <br />
            Info: info@vaibhavinternational.com
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="flex flex-col md:flex-row w-full  absoulate">
                {/* Left side - Form */}
                <div className="flex-[2] h-200 bg-[#EBFFF6] p-6 md:p-12">
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

export default ContactInfo;
