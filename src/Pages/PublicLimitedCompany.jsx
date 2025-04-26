import React from 'react';

const PublicLimitedCompany = () => {
  return (
    <>
      <div className="mb-10 px-3 md:px-6 max-w-7xl mx-auto">
        <div class="flex items-center space-x-4">
          <h1 class="text-lg font-bold text-gray-500 mt-12 uppercase word-spacing">
            OUR COMPANY
          </h1>
          <div class="h-0.5 w-40 bg-gray-500 mt-12"></div>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-3xl font-extrabold text-blue-900 uppercase ">
          More About Trademark
        </h1>
      </div>
      <div className="bg-blue-50 p-4 sm:p-6 md:p-10">
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
          {/* Section 1: What is Public Limited Company */}
          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-blue-900 uppercase">
              Why Trademark?
            </h2>
            <div className="p-3 sm:p-6">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-4">
                <li>Stand Out from Competitors: A trademark helps distinguish your products or services from others in the market.</li>

                <li>Build Strong Brand Recognition: It creates a lasting impression among customers and boosts brand loyalty.</li>

                <li>Protect Your Products and Services: A registered trademark legally safeguards your brand identity.</li>

                <li>Valuable Business Asset: Over time, your trademark grows in value and becomes an important asset for your business.</li>

                <li>Simple Application and Usage: Registering and using a trademark is a straightforward process.</li>

                <li>Avoid Brand Damage: Operating without a registered trademark can harm your brand's reputation and legal standing.</li>
              </p>
            </div>
          </section>

          {/* Section 2: Why Choose Public Limited Company */}
          <section>
            <h2 className="text-xl md:text-2xl font-extrabold text-blue-900 uppercase ">
              Simple Trademark registration process:
            </h2>
            <div className=" bg-opacity-70 p-6 ">
              <ul className="space-y-4 text-gray-600">
                <li>Step 1: Conduct a Trademark Search :-
                Check if your brand name or logo is already in use to avoid future conflicts.</li>

                <li>Step 2: Choose the Right Class :-
                Identify the appropriate class for your product or service under the trademark classification system.</li>

                <li>Step 3: File the Trademark Application :-
                Submit the application with complete details and supporting documents to the Trademark Office.</li>

                <li>Step 4: Examination and Objection (If Any) :-
                The Trademark Office examines your application and may raise objections based on legal grounds.</li>

                <li>Step 5: Respond to Objection :-
                File a detailed reply addressing the Registrar's concerns to move the application forward.</li>

                <li>Step 6: Attend Hearing (If Required) :-
                If the Registrar requires, appear for a hearing to defend your trademark application.</li>

                <li>Step 7: Application Approval :-
                Upon satisfaction, the application is accepted and published in the Trademark Journal for public review.</li>

                <li>Step 8: Issuance of Registration Certificate :-
                If no opposition is received, your trademark gets officially registered, and you receive the Registration Certificate.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PublicLimitedCompany;
