import { Mail, MapPin, Phone } from "lucide-react"
import { Link } from "react-router-dom"
import logo from "../image/Flogo.svg"
import facebook from "../image/facebook.svg"
import linkedin from "../image/linkedin.svg"
import Twitter from "../image/Twitter.svg"
import bg from "../image/bg.svg";
import bg2 from "../image/bg2.svg";
import Contact from "../components/Contact";
import About from "../components/About";

const scrollToTop = () => {
  window.scrollTo({
    top:0,
    behavior: "smooth",
  });
};

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-[#002c6d] text-white py-12 px-4 md:px-8 relative overflow-hidden ">
        {/* Background SVG 1 - positioned in top right */}
        <div className="absolute top-0 right-2 z-0">
          <img src={bg2} alt="bg" className="" />
        </div>

        {/* Background SVG 2 - positioned in bottom left */}
        <div className="absolute bottom-40 left-78 z-0"> 
          <img src={bg} alt="bg" className="" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="text-blue-900 font-bold text-2xl p-2 w-16 flex justify-center">
                  <Link to ="/"><img src={logo || "/placeholder.svg"} alt="CS"  onClick={scrollToTop}/></Link>
                </div>
              </div>
              <p className="text-sm text-gray-300 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.{" "}
                <Link to="#" className="underline hover:text-gray-100">
                  Learn more
                </Link>
              </p>
              <div className="flex space-x-2 mt-4">
                <Link to="#" className="bg-white p-2 rounded hover:opacity-90">
                  <img
                    src={facebook || "/placeholder.svg"}
                    className="h-8 w-8 text-blue-900"
                  />
                </Link>
                <Link to="#" className="bg-white p-2 rounded hover:opacity-90">
                  <img
                    src={linkedin || "/placeholder.svg"}
                    className="h-8 w-8 text-blue-900"
                  />
                </Link>
                <Link to="#" className="bg-white p-2 rounded hover:opacity-90">
                  <img
                    src={Twitter || "/placeholder.svg"}
                    className="h-8 w-8 text-blue-900"
                  />
                </Link>
              </div>
            </div>

            {/* Our Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">OUR SERVICES</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white"onClick={scrollToTop}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/PrivateLimited" className="text-gray-300 hover:text-white" onClick={scrollToTop}>
                    Company Registration
                  </Link>
                </li>
                <li>
                  <Link to="/Changedirector" className="text-gray-300 hover:text-white" onClick={scrollToTop}>
                    Compliances
                  </Link>
                </li>
                <li>
                  <Link to="/TrademarkApplication" className="text-gray-300 hover:text-white" onClick={scrollToTop}>
                    Trademark
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white" onClick={scrollToTop}>
                    Accounting
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white" onClick={scrollToTop}>
                    Closure of Company
                  </Link>
                </li>
              </ul>
            </div>

            {/* Know Us */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">KNOW US</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/About" className="text-gray-300 hover:text-white"onClick={scrollToTop}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/Contact" className="text-gray-300 hover:text-white" onClick={scrollToTop}>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-300 hover:text-white">
                    Support Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">POLICIES</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-gray-300 hover:text-white">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-300 hover:text-white">
                    Privacy & Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-300 hover:text-white">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-300 hover:text-white">
                    FAQ&apos;s
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
              <div className="flex items-start space-x-3">
                <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-blue-900 h-5 w-5" />
                </div>
                <div>
                  <p className="text-gray-300">220, Melbourne, Australia</p>
                  <p className="text-gray-300">City-250XXX</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-blue-900 h-5 w-5" />
                </div>
                <div>
                  <p className="text-gray-300">(123) 456 7890</p>
                  <p className="text-gray-300">+87 8787 87670</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-900 h-5 w-5" />
                </div>
                <p className="text-gray-300">xyz@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-blue-900">
            <b>©</b> 2025 All Right Reserved. Designed by <b>xyz</b>
          </p>
          <div className="flex space-x-2 mt-2 md:mt-0">
            <Link to="#" className="text-sm text-blue-900 hover:text-gray-900">
              Home
            </Link>
            <span className="text-blue-900">/</span>
            <Link to="/About" className="text-sm text-blue-900 hover:text-gray-900">
              About Us
            </Link>
            <span className="text-blue-900">/</span>
            <Link to="/Contact" className="text-sm text-blue-900 hover:text-gray-900">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
