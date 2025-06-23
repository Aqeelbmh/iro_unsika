export default function InternshipsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">International Internship Program</h1>
        <p className="text-lg text-gray-600">Gain valuable international work experience through our internship programs with leading companies and organizations worldwide.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Program Overview */}
          <section className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Program Overview</h2>
            <p className="text-gray-600 mb-4">
              Our International Internship Program connects UNSIKA students with internship opportunities at companies, 
              research institutions, and organizations around the world. This program provides hands-on experience in 
              your field of study while developing cross-cultural competencies.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Duration: 2-6 months</li>
              <li>Paid and unpaid opportunities available</li>
              <li>Academic credit available</li>
              <li>Professional development support</li>
            </ul>
          </section>

          {/* Available Internships */}
          <section className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Available Internships</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-sky-700 mb-2">Technology & IT</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Software Development</li>
                  <li>• Data Science</li>
                  <li>• Cybersecurity</li>
                  <li>• Digital Marketing</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-sky-700 mb-2">Business & Finance</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Marketing & Sales</li>
                  <li>• Financial Analysis</li>
                  <li>• Human Resources</li>
                  <li>• Operations Management</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-sky-700 mb-2">Engineering</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Mechanical Engineering</li>
                  <li>• Electrical Engineering</li>
                  <li>• Civil Engineering</li>
                  <li>• Industrial Engineering</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-sky-700 mb-2">Research & Academia</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Research Assistant</li>
                  <li>• Laboratory Work</li>
                  <li>• Academic Projects</li>
                  <li>• Data Analysis</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Requirements */}
          <section className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Eligibility Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-sky-700 mb-2">Academic Requirements</h3>
                <ul className="list-disc pl-4 text-gray-600 space-y-1 text-sm">
                  <li>Minimum GPA: 2.8</li>
                  <li>Completed at least 3 semesters</li>
                  <li>Relevant coursework completed</li>
                  <li>Faculty recommendation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-sky-700 mb-2">Language & Skills</h3>
                <ul className="list-disc pl-4 text-gray-600 space-y-1 text-sm">
                  <li>English proficiency (TOEFL/IELTS)</li>
                  <li>Relevant technical skills</li>
                  <li>Professional communication</li>
                  <li>Adaptability & cultural awareness</li>
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
                  <p className="text-gray-600 text-sm">Complete application with resume, cover letter, and academic records</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Skills Assessment</h3>
                  <p className="text-gray-600 text-sm">Complete technical assessment or interview if required</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Matching Process</h3>
                  <p className="text-gray-600 text-sm">We match you with suitable internship opportunities</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Placement</h3>
                  <p className="text-gray-600 text-sm">Finalize placement and begin pre-departure preparation</p>
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
                <p className="font-medium text-gray-800">Rolling applications</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Duration</span>
                <p className="font-medium text-gray-800">2-6 months</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Stipend</span>
                <p className="font-medium text-gray-800">Varies by position</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Accommodation</span>
                <p className="font-medium text-gray-800">Assistance provided</p>
              </div>
            </div>
          </div>

          {/* Partner Companies */}
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h3 className="font-bold text-gray-800 mb-4">Partner Companies</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600">• Google</li>
              <li className="text-gray-600">• Microsoft</li>
              <li className="text-gray-600">• Samsung</li>
              <li className="text-gray-600">• Toyota</li>
              <li className="text-gray-600">• Research institutions</li>
            </ul>
            <a href="/partners" className="text-sky-600 hover:text-sky-700 text-sm font-medium mt-3 inline-block">View all partners →</a>
          </div>

          {/* Success Stories */}
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h3 className="font-bold text-gray-800 mb-4">Success Stories</h3>
            <div className="space-y-3">
              <div className="text-sm">
                <p className="text-gray-600 italic">&ldquo;My internship at Google helped me develop both technical and soft skills. The international experience was invaluable.&rdquo;</p>
                <p className="text-sky-600 font-medium mt-1">- Sarah, Computer Science</p>
              </div>
              <div className="text-sm">
                <p className="text-gray-600 italic">&ldquo;Working at a research institution in Singapore opened up new career opportunities I never considered before.&rdquo;</p>
                <p className="text-sky-600 font-medium mt-1">- Ahmad, Engineering</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h3 className="font-bold mb-2">Ready to Apply?</h3>
            <p className="text-gray-600 text-sm mb-3">Gain real-world experience and start your international career.</p>
            <a href="/apply" className="bg-white text-sky-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors duration-200 inline-block">Apply Now</a>
          </div>
        </div>
      </div>
    </div>
  );
} 