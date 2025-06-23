export default function ShortCoursesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Short Courses & Summer Programs</h1>
        <p className="text-lg text-gray-600">Enhance your skills and knowledge through intensive short courses, summer programs, and specialized training opportunities.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Program Overview */}
          <section className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Program Overview</h2>
            <p className="text-gray-600 mb-4">
              Our Short Courses and Summer Programs offer intensive learning experiences ranging from 1 week to 3 months. 
              These programs are designed to provide specialized knowledge, practical skills, and international exposure 
              in a condensed timeframe.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Duration: 1 week to 3 months</li>
              <li>Intensive learning format</li>
              <li>Certificate upon completion</li>
              <li>Cultural immersion activities</li>
            </ul>
          </section>

          {/* Available Courses */}
          <section className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Available Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-sky-700 mb-2">Language & Culture</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Intensive English Program</li>
                  <li>• Japanese Language & Culture</li>
                  <li>• Korean Language & Culture</li>
                  <li>• Chinese Language & Culture</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-sky-700 mb-2">Business & Management</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• International Business</li>
                  <li>• Digital Marketing</li>
                  <li>• Entrepreneurship</li>
                  <li>• Project Management</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-sky-700 mb-2">Technology & Innovation</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• AI & Machine Learning</li>
                  <li>• Web Development</li>
                  <li>• Data Science</li>
                  <li>• Cybersecurity</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-sky-700 mb-2">Engineering & Science</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Renewable Energy</li>
                  <li>• Robotics & Automation</li>
                  <li>• Environmental Science</li>
                  <li>• Biotechnology</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Summer Programs */}
          <section className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Summer Programs</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-sky-500 pl-4">
                <h3 className="font-semibold text-gray-800 mb-2">Summer School 2024</h3>
                <p className="text-gray-600 text-sm mb-2">Join our intensive 4-week summer program featuring multiple course tracks and cultural activities.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-sky-100 text-sky-700 px-2 py-1 rounded text-xs">June 15 - July 12</span>
                  <span className="bg-sky-100 text-sky-700 px-2 py-1 rounded text-xs">Multiple Tracks</span>
                  <span className="bg-sky-100 text-sky-700 px-2 py-1 rounded text-xs">Cultural Activities</span>
                </div>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="font-semibold text-gray-800 mb-2">Research Summer Program</h3>
                <p className="text-gray-600 text-sm mb-2">Work on cutting-edge research projects with international faculty and students.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs">July 1 - August 15</span>
                  <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs">Research Focus</span>
                  <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs">Mentorship</span>
                </div>
              </div>
            </div>
          </section>

          {/* Requirements */}
          <section className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Eligibility Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-sky-700 mb-2">General Requirements</h3>
                <ul className="list-disc pl-4 text-gray-600 space-y-1 text-sm">
                  <li>Current student or recent graduate</li>
                  <li>Good academic standing</li>
                  <li>Motivation letter</li>
                  <li>Basic English proficiency</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-sky-700 mb-2">Course-Specific</h3>
                <ul className="list-disc pl-4 text-gray-600 space-y-1 text-sm">
                  <li>Prerequisites vary by course</li>
                  <li>Some courses require portfolios</li>
                  <li>Technical courses need basic skills</li>
                  <li>Language courses: no prior knowledge needed</li>
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
                  <h3 className="font-semibold text-gray-800">Choose Course</h3>
                  <p className="text-gray-600 text-sm">Select your preferred course or program from our offerings</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Submit Application</h3>
                  <p className="text-gray-600 text-sm">Complete online application with required documents</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Review & Acceptance</h3>
                  <p className="text-gray-600 text-sm">Applications reviewed and acceptance letters sent</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Enrollment</h3>
                  <p className="text-gray-600 text-sm">Complete enrollment and prepare for your program</p>
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
                <p className="font-medium text-gray-800">Varies by program</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Program Fee</span>
                <p className="font-medium text-gray-800">$500 - $3,000</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Accommodation</span>
                <p className="font-medium text-gray-800">On-campus available</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Meals</span>
                <p className="font-medium text-gray-800">Included in some programs</p>
              </div>
            </div>
          </div>

          {/* Upcoming Programs */}
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h3 className="font-bold text-gray-800 mb-4">Upcoming Programs</h3>
            <div className="space-y-3">
              <div className="border-l-2 border-sky-500 pl-3">
                <p className="font-medium text-gray-800 text-sm">Intensive English</p>
                <p className="text-gray-500 text-xs">March 1-15, 2024</p>
              </div>
              <div className="border-l-2 border-indigo-500 pl-3">
                <p className="font-medium text-gray-800 text-sm">AI & ML Workshop</p>
                <p className="text-gray-500 text-xs">April 10-20, 2024</p>
              </div>
              <div className="border-l-2 border-sky-500 pl-3">
                <p className="font-medium text-gray-800 text-sm">Summer School</p>
                <p className="text-gray-500 text-xs">June 15 - July 12, 2024</p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h3 className="font-bold text-gray-800 mb-4">Student Testimonials</h3>
            <div className="space-y-3">
              <div className="text-sm">
                <p className="text-gray-600 italic">&ldquo;The intensive English program helped me improve my language skills significantly in just 2 weeks.&rdquo;</p>
                <p className="text-sky-600 font-medium mt-1">- Maria, Engineering</p>
              </div>
              <div className="text-sm">
                <p className="text-gray-600 italic">&ldquo;The AI workshop was hands-on and practical. I learned skills I use in my current job.&rdquo;</p>
                <p className="text-sky-600 font-medium mt-1">- David, Computer Science</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h3 className="font-bold mb-2">Ready to Enroll?</h3>
            <p className="text-gray-600 text-sm mb-3">Apply to our short courses and gain new skills in a dynamic international environment.</p>
            <a href="/apply" className="bg-white text-sky-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors duration-200 inline-block">Apply Now</a>
          </div>
        </div>
      </div>
    </div>
  );
} 