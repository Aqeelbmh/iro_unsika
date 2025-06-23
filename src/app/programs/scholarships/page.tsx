export default function ScholarshipsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Scholarships & Financial Aid</h1>
        <p className="text-lg text-gray-600">Discover scholarship opportunities to support your international education journey at UNSIKA and partner institutions.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Program Overview */}
          <section className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Scholarship Overview</h2>
            <p className="text-gray-600 mb-4">
              UNSIKA International Office offers various scholarship opportunities for both incoming and outgoing students. 
              These scholarships are designed to support academic excellence, research initiatives, and international collaboration.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Full and partial scholarships available</li>
              <li>Merit-based and need-based options</li>
              <li>Research and academic scholarships</li>
              <li>Government and private funding sources</li>
            </ul>
          </section>

          {/* Available Scholarships */}
          <section className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Available Scholarships</h2>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-sky-700 text-lg">UNSIKA Excellence Scholarship</h3>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Full Tuition</span>
                </div>
                <p className="text-gray-600 mb-3">Full tuition coverage for outstanding students with exceptional academic records and research potential.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Eligibility:</span>
                    <ul className="list-disc pl-4 text-gray-600 mt-1">
                      <li>GPA 3.8+</li>
                      <li>Research proposal</li>
                      <li>English proficiency</li>
                    </ul>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Coverage:</span>
                    <ul className="list-disc pl-4 text-gray-600 mt-1">
                      <li>Full tuition</li>
                      <li>Monthly stipend</li>
                      <li>Research allowance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-sky-700 text-lg">International Student Scholarship</h3>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Partial</span>
                </div>
                <p className="text-gray-600 mb-3">Partial tuition coverage for international students demonstrating academic excellence and financial need.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Eligibility:</span>
                    <ul className="list-disc pl-4 text-gray-600 mt-1">
                      <li>GPA 3.5+</li>
                      <li>Financial need</li>
                      <li>English proficiency</li>
                    </ul>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Coverage:</span>
                    <ul className="list-disc pl-4 text-gray-600 mt-1">
                      <li>50% tuition</li>
                      <li>Accommodation support</li>
                      <li>Health insurance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-sky-700 text-lg">Research Fellowship</h3>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Research</span>
                </div>
                <p className="text-gray-600 mb-3">Research funding for graduate students conducting innovative research in collaboration with international partners.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Eligibility:</span>
                    <ul className="list-disc pl-4 text-gray-600 mt-1">
                      <li>Graduate student</li>
                      <li>Research proposal</li>
                      <li>Faculty recommendation</li>
                    </ul>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Coverage:</span>
                    <ul className="list-disc pl-4 text-gray-600 mt-1">
                      <li>Research funding</li>
                      <li>Travel allowance</li>
                      <li>Conference support</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-sky-700 text-lg">Exchange Program Scholarship</h3>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">Exchange</span>
                </div>
                <p className="text-gray-600 mb-3">Financial support for students participating in exchange programs with partner universities.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Eligibility:</span>
                    <ul className="list-disc pl-4 text-gray-600 mt-1">
                      <li>Exchange program participant</li>
                      <li>GPA 3.0+</li>
                      <li>Language proficiency</li>
                    </ul>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Coverage:</span>
                    <ul className="list-disc pl-4 text-gray-600 mt-1">
                      <li>Travel allowance</li>
                      <li>Monthly stipend</li>
                      <li>Insurance coverage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Requirements */}
          <section className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Eligibility Requirements</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>GPA 3.5+</li>
              <li>Research proposal</li>
              <li>English proficiency</li>
            </ul>
          </section>

          {/* Application Process */}
          <section className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Process</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Check Eligibility</h3>
                  <p className="text-gray-600 text-sm">Review scholarship requirements and ensure you meet all criteria</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Prepare Documents</h3>
                  <p className="text-gray-600 text-sm">Gather required documents including transcripts, letters of recommendation, and essays</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Submit Application</h3>
                  <p className="text-gray-600 text-sm">Complete online application form and upload all required documents</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Review & Interview</h3>
                  <p className="text-gray-600 text-sm">Applications reviewed and selected candidates invited for interview</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Award Notification</h3>
                  <p className="text-gray-600 text-sm">Successful candidates notified and award letters sent</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Info */}
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h3 className="font-bold text-gray-800 mb-4">Quick Info</h3>
            <div className="space-y-3">
              <div>
                <span className="text-sm text-gray-500">Application Deadline</span>
                <p className="font-medium text-gray-800">March 31, 2024</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Academic Year</span>
                <p className="font-medium text-gray-800">2024-2025</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Notification</span>
                <p className="font-medium text-gray-800">May 15, 2024</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Total Awards</span>
                <p className="font-medium text-gray-800">50+ scholarships</p>
              </div>
            </div>
          </div>

          {/* Required Documents */}
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h3 className="font-bold text-gray-800 mb-4">Required Documents</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600">• Academic transcripts</li>
              <li className="text-gray-600">• Letters of recommendation</li>
              <li className="text-gray-600">• Statement of purpose</li>
              <li className="text-gray-600">• Research proposal (if applicable)</li>
              <li className="text-gray-600">• English proficiency test scores</li>
              <li className="text-gray-600">• Financial need statement</li>
              <li className="text-gray-600">• CV/Resume</li>
            </ul>
          </div>

          {/* External Scholarships */}
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h3 className="font-bold text-gray-800 mb-4">External Scholarships</h3>
            <div className="space-y-3">
              <div className="text-sm">
                <p className="font-medium text-gray-800">LPDP Scholarship</p>
                <p className="text-gray-600">Indonesian government scholarship for graduate studies</p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-gray-800">Australia Awards</p>
                <p className="text-gray-600">Australian government scholarship program</p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-gray-800">Chevening Scholarship</p>
                <p className="text-gray-600">UK government scholarship for international students</p>
              </div>
            </div>
            <a href="/downloads" className="text-sky-600 hover:text-sky-700 text-sm font-medium mt-3 inline-block">Download application forms →</a>
          </div>

          {/* CTA */}
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h3 className="font-bold mb-2">Ready to Apply?</h3>
            <p className="text-gray-600 text-sm mb-3">Secure your funding and start your academic journey with UNSIKA.</p>
            <a href="/apply" className="bg-white text-sky-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors duration-200 inline-block">Apply Now</a>
          </div>
        </div>
      </div>
    </div>
  );
} 