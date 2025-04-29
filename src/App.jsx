import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Changedirector from  "./Compliances/Changedirector";
import PublicLimitedCompany from "./Pages/PublicLimitedCompany";
import PrivateLimited from "./Company Registration/PrivateLimited";
import ShiftingRegistered from "./Compliances/ShiftingRegistered";
import IncresingAuthorised from "./Compliances/IncresingAuthorised";
import IncreasingPaid from "./Compliances/IncreasingPaid";
import ShareTransfer from "./Compliances/ShareTransfer";
import ChangeinName from "./Compliances/ChangeinName";
import ChangeinObject from "./Compliances/ChangeinObject";
import SurrenderDIN from "./Compliances/SurrenderDIN";
import DirectorKYC3 from "./Compliances/DirectorKYC3";
import Modification from "./Compliances/Modification";
import Filling from "./Compliances/Filling";
import ChargeSatisfaction from "./Compliances/ChargeSatisfaction";
import Change from "./Compliances/Change";
import ChangeAuditor from "./Compliances/ChangeAuditor";
import AnnualCompany from "./Compliances/AnnualCompany";
import AnnualLLP from "./Compliances/AnnualLLP";
import AMC from "./Compliances/AMC";
import AMCforLLP from "./Compliances/AMCforLLP";
import Searchreport from "./Compliances/Searchreport";
import ChangeLLP from "./Compliances/Drop-drown/ChangeLLP";
import DesignatedPartner from "./Compliances/Drop-drown/DesignatedPartner";
import LLpagreement from "./Compliances/Drop-drown/LLpagreement";
import Registeredoffice from "./Compliances/Drop-drown/Registeredoffice";
import Home from "./components/Home";
import PublicLimited from "./Company Registration/PublicLimited";
import LLPRegistration from "./Company Registration/LLPRegistration";
import OnePerson from "./Company Registration/OnePerson";
import PartnershipFirm from "./Company Registration/PartnershipFirm";
import ProprietorShip from "./Company Registration/ProprietorShip";
import NGOTrust from "./Company Registration/NGOTrust";
import Renewal from "./Trademark/Renewal";
import TrademarkApplication from "./Trademark/TrademarkApplication";
import TrademarkAssignment from "./Trademark/TrademarkAssignment";
import TrademarkObjection from "./Trademark/TrademarkObjection";
import TrademarkOpposition from "./Trademark/TrademarkOpposition";
import DigitalSignature from "./Other Registration/DigitalSignature";
import FASSIRegistration from "./Other Registration/FASSIRegistration";
import IECCode from "./Other Registration/IECCode";
import PANTANApplication from "./Other Registration/PANTANApplication";
import UdhyogRegistration from "./Other Registration/UdhyogRegistration";
import MonthlyCompliance from "./GST Compliaces/MonthlyCompliance";
import AnnualCompalices from "./GST Compliaces/AnnualCompalices";
import GstCancellation from "./GST Compliaces/GstCancellation";
import Annual from "./Compliances/Annual";



function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>} />  
          <Route path="/Contact" element={<Contact/>} /> 
          <Route path="/About" element={<About/>} />  
          <Route path="/Changedirector" element={<Changedirector/>} />  
          <Route path="/PublicLimitedCompany" element={<PublicLimitedCompany/>} />  
          <Route path="/PrivateLimited" element={<PrivateLimited/>} />  
          <Route path="/ShiftingRegistered" element={<ShiftingRegistered/>} />
          <Route path="/IncresingAuthorised" element={<IncresingAuthorised/>} />
          <Route path="/IncreasingPaid" element={<IncreasingPaid/>} />
          <Route path="/ShareTransfer" element={<ShareTransfer/>} />
          <Route path="/ChangeinName" element={<ChangeinName/>} />
          <Route path="/ChangeinObject" element={<ChangeinObject/>} />
          <Route path="/SurrenderDIN" element={<SurrenderDIN/>} />
          <Route path="/DirectorKYC3" element={<DirectorKYC3/>} />
          <Route path="/Modification" element={<Modification/>} />
          <Route path="/Filling" element={<Filling/>} />
          <Route path="/ChargeSatisfaction" element={<ChargeSatisfaction/>} />
          <Route path="/Change" element={<Change/>} />
          <Route path="/AnnualCompany" element={<AnnualCompany/>} />
          <Route path="/ChangeAuditor" element={<ChangeAuditor/>} />
          <Route path="/AnnualLLP" element={<AnnualLLP/>} />
          <Route path="/PublicLimited" element={<PublicLimited/>} />
          <Route path="/LLPRegistration" element={<LLPRegistration/>} />\
          <Route path="/OnePerson" element={<OnePerson/>} />
          <Route path="/PartnershipFirm" element={<PartnershipFirm/>} />
          <Route path="/ProprietorShip" element={<ProprietorShip/>} />
          <Route path="/NGOTrust" element={<NGOTrust/>} />
          <Route path="/Renewal" element={<Renewal/>} />
          <Route path="/TrademarkApplication" element={<TrademarkApplication/>} />
          <Route path="/TrademarkAssignment" element={<TrademarkAssignment/>} />
          <Route path="/TrademarkObjection" element={<TrademarkObjection/>} />
          <Route path="/TrademarkOpposition" element={<TrademarkOpposition/>} />
          <Route path="/DigitalSignature" element={<DigitalSignature/>} />
          <Route path="/FASSIRegistration" element={<FASSIRegistration/>} />
          <Route path="/IECCode" element={<IECCode/>} />
          <Route path="/PANTANApplication" element={<PANTANApplication/>} />
          <Route path="/UdhyogRegistration" element={<UdhyogRegistration/>} />
          <Route path="/AMC" element={<AMC/>} />
          <Route path="/AMCforLLP" element={<AMCforLLP/>} /> 
          <Route path="/MonthlyCompliance" element={<MonthlyCompliance/>} /> 
          <Route path="/AnnualCompalices" element={<AnnualCompalices/>} /> 
          <Route path="/GstCancellation" element={<GstCancellation/>} /> 
          <Route path="/Searchreport" element={<Searchreport/>} />
          <Route path="/ChangeLLP" element={<ChangeLLP/>} />
          <Route path="/DesignatedPartner" element={<DesignatedPartner/>} />
          <Route path="/LLpagreement" element={<LLpagreement/>} />
          <Route path="/Registeredoffice" element={<Registeredoffice/>} />
          <Route path="/ChangeLLP" element={<ChangeLLP/>} />
          <Route path="/Annual" element={<Annual/>} />




        </Routes>
       <Footer/>
    </Router>
    </>
  )
}

export default App;



