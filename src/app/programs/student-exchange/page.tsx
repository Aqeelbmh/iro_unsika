export default function StudentExchangePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Student Exchange Program</h1>
        <p className="text-lg text-gray-600">Experience studying abroad with our partner universities worldwide and broaden your academic and cultural horizons.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Program Overview */}
          <section className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Program Overview</h2>
            <p className="text-gray-600 mb-4">
              The Student Exchange Program allows UNSIKA students to study at partner universities for one or two semesters. 
              This program provides an excellent opportunity to experience different academic environments, cultures, and perspectives.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Duration: 1-2 semesters</li>
              <li>Credits: Transferable academic credits</li>
              <li>Language: English-taught courses available</li>
              <li>Support: Pre-departure orientation and ongoing assistance</li>
            </ul>
          </section>

          {/* Requirements */}
          <section className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Eligibility Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-sky-700 mb-2">Academic Requirements</h3>
                <ul className="list-disc pl-4 text-gray-600 space-y-1 text-sm">
                  <li>Minimum GPA: 3.0</li>
                  <li>Completed at least 2 semesters at UNSIKA</li>
                  <li>Good academic standing</li>
                  <li>Approval from academic advisor</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-sky-700 mb-2">Language Requirements</h3>
                <ul className="list-disc pl-4 text-gray-600 space-y-1 text-sm">
                  <li>TOEFL iBT: 80+ or IELTS: 6.0+</li>
                  <li>Or equivalent language proficiency</li>
                  <li>Some programs may require higher scores</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Application Process */}
          <section className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Process</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Submit Application</h3>
                  <p className="text-gray-600 text-sm">Complete the online application form with required documents</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Document Review</h3>
                  <p className="text-gray-600 text-sm">Our team reviews your application and supporting documents</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Interview</h3>
                  <p className="text-gray-600 text-sm">Attend an interview with the selection committee</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Nomination</h3>
                  <p className="text-gray-600 text-sm">Selected students are nominated to partner universities</p>
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
                <p className="font-medium text-gray-800">March 15 (Fall)</p>
                <p className="font-medium text-gray-800">October 15 (Spring)</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Program Fee</span>
                <p className="font-medium text-gray-800">Varies by destination</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Scholarships</span>
                <p className="font-medium text-gray-800">Available for eligible students</p>
              </div>
            </div>
          </div>

          {/* Partner Universities */}
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h3 className="font-bold text-gray-800 mb-4">Partner Universities</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600">• University of Technology Sydney</li>
              <li className="text-gray-600">• National University of Singapore</li>
              <li className="text-gray-600">• Chulalongkorn University</li>
              <li className="text-gray-600">• University of Malaya</li>
              <li className="text-gray-600">• And many more...</li>
            </ul>
            <a href="/partners" className="text-sky-600 hover:text-sky-700 text-sm font-medium mt-3 inline-block">View all partners →</a>
          </div>

          {/* CTA */}
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h3 className="font-bold mb-2">Ready to Apply?</h3>
            <p className="text-gray-600 text-sm mb-3">Submit your application before the deadline to be considered for the program.</p>
            <a href="/apply" className="bg-white text-sky-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors duration-200 inline-block">Apply Now</a>
          </div>
        </div>
      </div>
    </div>
  );
} 