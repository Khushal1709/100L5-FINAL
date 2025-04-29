import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import logoh from "../image/logoh.svg";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaAngleUp } from "react-icons/fa6";

// Dropdown items for Company Registration
const companyRegistrationDropdown = [
  { label: "Private Limited Company", path: "/PrivateLimited" },
  { label: "Public Limited Company", path: "/PublicLimited" },
  { label: "LLP Registration", path: "/LLPRegistration" },
  { label: "One Person Company", path: "/OnePerson" },
  { label: "Partnership Firm", path: "/PartnershipFirm" },
  { label: "Proprietor Ship", path: "/ProprietorShip" },
  { label: "NGO / Trust Registration", path: "/NGOTrust" },
];

const compliancesDropdown = [
  {
    title: "Event Based Compliances",
    items: [
      { label: "Change In Director / Partner", path: "/Changedirector" },
      { label: "Shifting Of Registered Office", path: "/ShiftingRegistered" },
      { label: "Incresing Authorised Capital", path: "/IncresingAuthorised" },
      { label: "Increasing Paid Up Capital", path: "/IncreasingPaid" },
      { label: "Share Transfer / Transmission", path: "/ShareTransfer" },
      { label: "Change In Name Of The Company", path: "/ChangeinName" },
      { label: "Change In Object Of The Company", path: "/ChangeinObject" },
      { label: "Surrender DIN", path: "/SurrenderDIN" },
      { label: "Director KYC - DIR-3", path: "/DirectorKYC3" },
      { label: "Charge Creation / Modification / Satisfaction", path: "/ChargeSatisfaction" },
      { label: "Search Report Of The Company", path: "/Searchreport" },
      { label: "Filling Of Commencement Of Business", path: "/" },
      { label: "Change In Auditor / Appointment Of Auditor", path: "/" },
    ],
  },
  {
    title: "Annual Compliance",
    items: [
      { label: "Annual Filling Of Company / OPC", path: "/AnnualCompany" },
      { label: "Annual Filling Of LLP", path: "/AnnualLLP" },
    ],
  },
  {
    title: "LLP Compliances",
    items: [
      {
        label: "Event Base Compliances",
        path: "/llp-event-base-compliances",
        subItems: [
          { label: "Change in Designated Partner", paths: "/DesignatedPartner" },
          { label: "Change of Registered Office Address by LLP", paths: "/Registeredoffice" },
          { label: "Change in LLP agreement", paths: "/LLpagreement" },
          { label: "Change in the name of the LLP", paths: "/LLpagreement" },
        ]
      },
      {
        label: "Annual Compliances",
        path: "/Annual"
      }
    ]
  },

  {
    title: "GST Compliances",
    items: [
      { label: "Monthly Compliance", path: "/MonthlyCompliance" },
      { label: "Annual Compalices", path: "/AnnualCompalices" },
      { label: "GST Cancellation", path: "/GSTCancellation" },
    ],
  },
  {
    title: "Annual maitainance service",
    items: [
      { label: "AMC For Company / OPC", path: "/AMC" },
      { label: "AMC For LLP", path: "/AMCforLLP" },
    ],
  },
];

const menuItems = [
  { name: "Company Registration", path: "/company-registration" },
  { name: "Compliances", path: "/compliances" },
  { name: "Trademark", path: "/trademark" },
  { name: "Other Registration", path: "/other-registration" },
  { name: "Accounting", path: "/accounting" },
  { name: "Closure Of Company", path: "/closure-of-company" },
];

const trademarkDropdown = [
  { label: "Trademark Application", path: "/TrademarkApplication" },
  { label: "Trademark Objection", path: "/TrademarkObjection" },
  { label: "Trademark Opposition", path: "/TrademarkOpposition" },
  { label: "Trademark Assignment", path: "/TrademarkAssignment" },
  { label: "Renewal", path: "/Renewal" },
];

const otherRegistrationDropdown = [
  { label: "FASSI Registration", path: "/FASSIRegistration" },
  { label: "Udhyog Aadhar Registration", path: "/UdhyogRegistration" },
  { label: "PAN / TAN Application", path: "/PANTANApplication" },
  { label: "IEC Code", path: "/IECCode" },
  { label: "Digital Signature Certificate", path: "/DigitalSignature" },
];

const accountingDropdown = [
  { label: "Monthly Accounting", path: "/", active: true },
  { label: "Annual Accounting", path: "/", active: false },
];

const closureDropdown = [
  { label: "Private Limited", path: "/", active: true },
  { label: "LLP", path: "/", active: false },
  { label: "OPC", path: "/", active: false },
  { label: "Public Limited Company", path: "/", active: false },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [compliancesOpen, setCompliancesOpen] = useState(false);
  const [companyRegOpen, setCompanyRegOpen] = useState(false);
  const location = useLocation();
  const [trademarkOpen, setTrademarkOpen] = useState(false);
  const [otherRegOpen, setOtherRegOpen] = useState(false);
  const [accountingOpen, setAccountingOpen] = useState(false);
  const [closureOpen, setClosureOpen] = useState(false);
  const [eventSubOpen, setEventSubOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // for toggling submenus
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSubItems = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <header className="w-full shadow-sm bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logoh} alt="Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-4 text-base text-black items-center">
          {/* Home */}
          <Link
            to="/"
            className={`relative px-2 group ${location.pathname === "/" ? "" : "hover:text-[#002366]"}`}
          >
            Home
            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-transparent group-hover:bg-[#002366] transition-all duration-300"></span>
          </Link>

          {/* Company Registration dropdown */}
          <div
            className="relative group cursor-pointer flex items-center gap-1 px-2"
            onMouseEnter={() => setCompanyRegOpen(true)}
            onMouseLeave={() => setCompanyRegOpen(false)}
          >
            <span className="relative group-hover:text-[#002366] 
    transition-colors duration-300
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full 
    after:bg-transparent group-hover:after:bg-[#002366] after:transition-all after:duration-300
    ">
              Company Registration
            </span>
            <ChevronDown className="w-4 h-4 group-hover:text-[#002366]" />
            {companyRegOpen && (
              <div className="absolute left-0 top-full  bg-[#e9eef2] shadow-lg rounded z-30 min-w-[220px] py-4 px-2 border border-gray-200"
                style={{ borderRadius: "8px" }}
              >
                {companyRegistrationDropdown.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-2 py-1 text-[17px] text-gray-700 hover:bg-[#002366] hover:text-white rounded transition-colors mb-1"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>


          {/* Compliances dropdown */}
          <div
            className="relative group cursor-pointer flex items-center gap-1 px-2"
            onMouseEnter={() => setCompliancesOpen(true)}
            onMouseLeave={() => setCompliancesOpen(false)}
          >
            <span
              className="relative group-hover:text-[#002366] 
    transition-colors duration-300
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full 
    after:bg-transparent group-hover:after:bg-[#002366] after:transition-all after:duration-300"
            >
              Compliances
            </span>
            <ChevronDown className="w-4 h-4 group-hover:text-[#002366]" />

            {compliancesOpen && (
              <div
                className="absolute left-0 top-full flex bg-[#e9eef2] shadow-lg rounded z-30 min-w-[900px] py-4 px-2 border border-gray-200"
                style={{ borderRadius: "8px" }}
              >
                {/* Left column: LLP Compliances */}
                <div className="min-w-[260px] px-3 border-r border-gray-300">
                  <div className="font-semibold text-[#002366] mb-2 uppercase text-[17px]">
                    {compliancesDropdown[0].title}
                  </div>

                  {compliancesDropdown[0].items.map((item) => (
                    <div key={item.path} className="relative group"

                    >
                      <Link
                        to={item.path}
                        className="flex  justify-between items-center px-2 py-1 text-[17px] rounded transition-colors mb-1 hover:bg-[#002366] hover:text-white"
                      >
                        {item.label}
                        {item.subItems && <ChevronRight className="w-4 h-4 ml-2 text-gray-400" />}
                      </Link>

                      {/* Sub-dropdown */}
                      {item.subItems && (
                        <div className="absolute top-0 left-full bg-white shadow-md rounded border border-gray-200 py-2 w-[260px] z-40 hidden group-hover:block">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.paths}
                              to={subItem.paths}
                              className="block px-4 py-2 text-[16px] text-gray-700 hover:bg-[#002366] hover:text-white transition-colors"

                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Middle column: GST Compliances, etc. */}
                <div className="min-w-[260px] px-3 border-r border-gray-300">
                  <div className="font-semibold text-[#002366] mb-2 uppercase text-[17px]">
                    {compliancesDropdown[1].title}
                  </div>
                  {compliancesDropdown[1].items.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-2 py-1 text-[17px] text-gray-700 hover:bg-[#002366] hover:text-white rounded transition-colors mb-1"
                    >
                      {item.label}
                    </Link>
                  ))}

                  <div className="font-semibold text-[#002366] mt-4 mb-2 uppercase text-[17px]"
                    onClick={() => toggleSubItems(index)}

                  >
                    {compliancesDropdown[2].title}
                  </div>
                  {compliancesDropdown[2].items.map((item, index) => (
                    <div key={`${item.path}-${item.label}`}>
                      <div
                        onMouseEnter={() => toggleSubItems(index)}
                        className="flex items-center justify-between px-2 py-1 cursor-pointer text-[17px] text-gray-700 hover:bg-[#002366] hover:text-white rounded mb-1"
                      >
                        {item.label}
                        {item.subItems &&
                          (openIndex === index ? (
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          ))}
                      </div>

                      {item.subItems && openIndex === index && (
                        <div className="ml-4 mt-1">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={`${subItem.paths}-${subItem.label}`}
                              to={subItem.paths}
                              className="block px-2 py-1 text-[16px] text-gray-600 hover:bg-gray-100 rounded"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}


                  <div className="font-semibold text-[#002366] mt-4 mb-2 uppercase text-[17px]">
                    {compliancesDropdown[3].title}
                  </div>
                  {compliancesDropdown[3].items.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-2 py-1 text-[17px] text-gray-700 hover:bg-[#002366] hover:text-white rounded transition-colors mb-1"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Right column: Annual Maintenance Service */}
                <div className="min-w-[220px] px-3">
                  <div className="font-semibold text-[#002366] mb-2 uppercase text-[17px]">
                    {compliancesDropdown[4].title}
                  </div>
                  {compliancesDropdown[4].items.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-2 py-1 text-[17px] text-gray-700 hover:bg-[#002366] hover:text-white rounded transition-colors mb-1"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className="relative group cursor-pointer flex items-center gap-1 px-2"
            onMouseEnter={() => setTrademarkOpen(true)}
            onMouseLeave={() => setTrademarkOpen(false)}
          >
            <span className="relative group-hover:text-[#002366] 
    transition-colors duration-300
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full 
    after:bg-transparent group-hover:after:bg-[#002366] after:transition-all after:duration-300
    ">
              Trademark
            </span>
            <ChevronDown className="w-4 h-4 group-hover:text-[#002366]" />
            {trademarkOpen && (
              <div className="absolute left-0 top-full bg-[#e9eef2] shadow-lg rounded z-30 min-w-[220px] py-2 px-0 border border-gray-200"
                style={{ borderRadius: "8px" }}
              >
                {trademarkDropdown.map((item, idx) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-2 text-[17px] transition-colors hover:bg-[#002366] hover:text-white`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div
            className="relative group cursor-pointer flex items-center gap-1 px-2"
            onMouseEnter={() => setOtherRegOpen(true)}
            onMouseLeave={() => setOtherRegOpen(false)}
          >
            <span className="relative group-hover:text-[#002366] 
    transition-colors duration-300
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full 
    after:bg-transparent group-hover:after:bg-[#002366] after:transition-all after:duration-300
    ">
              Other Registration
            </span>
            <ChevronDown className="w-4 h-4 group-hover:text-[#002366]" />
            {otherRegOpen && (
              <div className="absolute left-0 top-full bg-[#e9eef2] shadow-lg rounded z-30 min-w-[220px] py-2 px-0 border border-gray-200"
                style={{ borderRadius: "8px" }}
              >
                {otherRegistrationDropdown.map((item, idx) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-2 text-[17px] text-gray-700 hover:bg-[#002366] hover:text-white transition-colors`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div
            className="relative group cursor-pointer flex items-center gap-1 px-2"
            onMouseEnter={() => setAccountingOpen(true)}
            onMouseLeave={() => setAccountingOpen(false)}
          >
            <span className="relative group-hover:text-[#002366] 
    transition-colors duration-300
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full 
    after:bg-transparent group-hover:after:bg-[#002366] after:transition-all after:duration-300
    ">
              Accounting
            </span>
            <ChevronDown className="w-4 h-4 group-hover:text-[#002366]" />
            {accountingOpen && (
              <div className="absolute left-0 top-full bg-[#e9eef2] shadow-lg rounded z-30 min-w-[220px] py-0 px-0 border border-gray-200"
                style={{ borderRadius: "0 0 12px 12px" }}
              >
                {accountingDropdown.map((item, idx) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-2 text-[17px] text-gray-700 hover:bg-[#002366] hover:text-white transition-colors`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div
            className="relative group cursor-pointer flex items-center gap-1 px-2"
            onMouseEnter={() => setClosureOpen(true)}
            onMouseLeave={() => setClosureOpen(false)}
          >
            <span className="relative group-hover:text-[#002366] 
    transition-colors duration-300
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full 
    after:bg-transparent group-hover:after:bg-[#002366] after:transition-all after:duration-300
    ">
              Closure of Company
            </span>
            <ChevronDown className="w-4 h-4 group-hover:text-[#002366]" />
            {closureOpen && (
              <div className="absolute left-0 top-full bg-[#e9eef2] shadow-lg rounded z-30 min-w-[260px] py-0 px-0 border border-gray-200"
                style={{ borderRadius: "0 0 16px 16px" }}
              >
                {closureDropdown.map((item, idx) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-2 text-[17px] text-gray-700 hover:bg-[#002366] hover:text-white transition-colors`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-4">
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-black font-medium">Home</Link>

            {/* Company Registration mobile dropdown with toggle */}
            <div>
              <div
                className="font-medium flex items-center gap-1 cursor-pointer"
                onClick={() => setCompanyRegOpen(!companyRegOpen)}
              >
                Company Registration
                <span>{companyRegOpen ? <FaAngleUp /> : <IoIosArrowDown />}</span>
              </div>
              {companyRegOpen && (
                <div className="ml-4 flex flex-col gap-2">
                  {companyRegistrationDropdown.map((item, idx) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-2 py-1 text-[14px] rounded transition-colors mb-1`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>


            {/* Compliances mobile dropdown with toggle */}
            <div>
              <div
                className="font-medium flex items-center gap-1 cursor-pointer"
                onClick={() => setCompliancesOpen(!compliancesOpen)}
              >
                Compliances
                <span>{compliancesOpen ? <FaAngleUp /> : <IoIosArrowDown />}</span>
              </div>
              {compliancesOpen && (
                <div className="ml-4  flex flex-col gap-2">
                  {compliancesDropdown.map((item) => (
                    <div key={item.title} className="mb-2">
                      <div className="font-semibold text-[#002366] text-[15px] mb-1">{item.title}</div>
                      {item.items.map((item, idx) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`block px-2 py-1 text-[14px] rounded transition-colors mb-1`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Repeat similar logic for other dropdown sections */}
            <div>
              <div
                className="font-medium flex items-center gap-1 cursor-pointer"
                onClick={() => setTrademarkOpen(!trademarkOpen)}
              >
                Trademark
                <span>{trademarkOpen ? <FaAngleUp /> : <IoIosArrowDown />}</span>
              </div>
              {trademarkOpen && (
                <div className="ml-4 flex flex-col gap-2">
                  {trademarkDropdown.map((item, idx) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-2 py-1 text-[14px] rounded transition-colors mb-1`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Registration mobile dropdown with toggle */}
            <div>
              <div
                className="font-medium flex items-center gap-1 cursor-pointer"
                onClick={() => setOtherRegOpen(!otherRegOpen)}
              >
                Other Registration
                <span>{otherRegOpen ? <FaAngleUp /> : <IoIosArrowDown />}</span>
              </div>
              {otherRegOpen && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {otherRegistrationDropdown.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-2 py-1 text-[14px] rounded transition-colors mb-1"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Accounting mobile dropdown with toggle */}
            <div>
              <div
                className="font-medium flex items-center gap-1 cursor-pointer"
                onClick={() => setAccountingOpen(!accountingOpen)}
              >
                Accounting
                <span>{accountingOpen ? <FaAngleUp /> : <IoIosArrowDown />}</span>
              </div>
              {accountingOpen && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {accountingDropdown.map((item, idx) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-2 py-1 text-[14px] rounded transition-colors mb-1`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Closure of Company mobile dropdown with toggle */}
            <div>
              <div
                className="font-medium flex items-center gap-1 cursor-pointer"
                onClick={() => setClosureOpen(!closureOpen)}
              >
                Closure of Company
                <span>{closureOpen ? <FaAngleUp /> : <IoIosArrowDown />}</span>
              </div>
              {closureOpen && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {closureDropdown.map((item, idx) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-2 py-1 text-[14px] rounded transition-colors mb-1 `}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
0