export default function PartnershipsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Institutional Partnerships</h1>
        <p className="text-lg text-gray-600">Explore our network of international partnerships and collaboration opportunities with leading universities and organizations worldwide.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Program Overview */}
          <section className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Partnership Overview</h2>
            <p className="text-gray-600 mb-4">
              UNSIKA International Office maintains strategic partnerships with universities, research institutions, 
              and organizations across the globe. These partnerships enable collaborative research, student mobility, 
              faculty exchange, and joint academic programs.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Student exchange programs</li>
              <li>Joint research projects</li>
              <li>Faculty exchange opportunities</li>
              <li>Dual degree programs</li>
              <li>International conferences and workshops</li>
            </ul>
          </section>

          {/* Partnership Categories */}
          <section className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Partnership Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-sky-700 mb-2">Academic Partnerships</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Student exchange agreements</li>
                  <li>• Joint degree programs</li>
                  <li>• Credit transfer arrangements</li>
                  <li>• Academic collaboration</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-sky-700 mb-2">Research Partnerships</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Joint research projects</li>
                  <li>• Publication collaboration</li>
                  <li>• Research funding</li>
                  <li>• Laboratory sharing</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-sky-700 mb-2">Industry Partnerships</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Internship programs</li>
                  <li>• Industry projects</li>
                  <li>• Technology transfer</li>
                  <li>• Professional development</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-sky-700 mb-2">Government Partnerships</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Scholarship programs</li>
                  <li>• Policy research</li>
                  <li>• Capacity building</li>
                  <li>• International cooperation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Featured Partners */}
          <section className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Featured Partners</h2>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-sky-700 text-lg">University of Technology Sydney</h3>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Australia</span>
                </div>
                <p className="text-gray-600 mb-3">Strategic partner for engineering and technology programs, offering student exchange and joint research opportunities.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Programs:</span>
                    <ul className="list-disc pl-4 text-gray-600 mt-1">
                      <li>Student Exchange</li>
                      <li>Joint Research</li>
                      <li>Faculty Exchange</li>
                    </ul>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Focus Areas:</span>
                    <ul className="list-disc pl-4 text-gray-600 mt-1">
                      <li>Engineering</li>
                      <li>Technology</li>
                      <li>Innovation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-sky-700 text-lg">National University of Singapore</h3>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">Singapore</span>
                </div>
                <p className="text-gray-600 mb-3">Premier partner for business and management programs, offering comprehensive academic collaboration.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Programs:</span>
                    <ul className="list-disc pl-4 text-gray-600 mt-1">
                      <li>MBA Exchange</li>
                      <li>Research Collaboration</li>
                      <li>Summer Programs</li>
                    </ul>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Focus Areas:</span>
                    <ul className="list-disc pl-4 text-gray-600 mt-1">
                      <li>Business</li>
                      <li>Management</li>
                      <li>Economics</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-sky-700 text-lg">Chulalongkorn University</h3>
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">Thailand</span>
                </div>
                <p className="text-gray-600 mb-3">Regional partner for cultural exchange and Southeast Asian studies, promoting regional cooperation.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Programs:</span>
                    <ul className="list-disc pl-4 text-gray-600 mt-1">
                      <li>Cultural Exchange</li>
                      <li>Language Programs</li>
                      <li>Regional Studies</li>
                    </ul>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Focus Areas:</span>
                    <ul className="list-disc pl-4 text-gray-600 mt-1">
                      <li>Languages</li>
                      <li>Culture</li>
                      <li>Regional Studies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Partnership Benefits */}
          <section className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Partnership Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-sky-700 mb-2">For Students</h3>
                <ul className="list-disc pl-4 text-gray-600 space-y-1 text-sm">
                  <li>International study opportunities</li>
                  <li>Cultural exchange experiences</li>
                  <li>Enhanced career prospects</li>
                  <li>Global networking</li>
                  <li>Language development</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-sky-700 mb-2">For Faculty</h3>
                <ul className="list-disc pl-4 text-gray-600 space-y-1 text-sm">
                  <li>Research collaboration</li>
                  <li>Academic exchange programs</li>
                  <li>Joint publications</li>
                  <li>Professional development</li>
                  <li>International recognition</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-sky-700 mb-2">For Institutions</h3>
                <ul className="list-disc pl-4 text-gray-600 space-y-1 text-sm">
                  <li>Enhanced reputation</li>
                  <li>Research funding opportunities</li>
                  <li>Student diversity</li>
                  <li>International accreditation</li>
                  <li>Global competitiveness</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-sky-700 mb-2">For Industry</h3>
                <ul className="list-disc pl-4 text-gray-600 space-y-1 text-sm">
                  <li>Skilled workforce development</li>
                  <li>Innovation collaboration</li>
                  <li>Technology transfer</li>
                  <li>Market expansion</li>
                  <li>Research partnerships</li>
                </ul>
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
                <span className="text-sm text-gray-500">Total Partners</span>
                <p className="font-medium text-gray-800">50+ institutions</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Countries</span>
                <p className="font-medium text-gray-800">25+ countries</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Active Programs</span>
                <p className="font-medium text-gray-800">100+ programs</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Students Exchanged</span>
                <p className="font-medium text-gray-800">500+ annually</p>
              </div>
            </div>
          </div>

          {/* Partnership Regions */}
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h3 className="font-bold text-gray-800 mb-4">Partnership Regions</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Asia-Pacific</span>
                <span className="bg-sky-100 text-sky-700 px-2 py-1 rounded text-xs">25 partners</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Europe</span>
                <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs">15 partners</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Americas</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">8 partners</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Middle East</span>
                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">5 partners</span>
              </div>
            </div>
          </div>

          {/* Partnership Opportunities */}
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h3 className="font-bold text-gray-800 mb-4">Partnership Opportunities</h3>
            <div className="space-y-3">
              <div className="text-sm">
                <p className="font-medium text-gray-800">New Partnership</p>
                <p className="text-gray-600">Interested in establishing a partnership with UNSIKA?</p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-gray-800">Program Development</p>
                <p className="text-gray-600">Collaborate on developing new academic programs</p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-gray-800">Research Collaboration</p>
                <p className="text-gray-600">Joint research projects and funding opportunities</p>
              </div>
            </div>
            <a href="/contact" className="text-sky-600 hover:text-sky-700 text-sm font-medium mt-3 inline-block">Contact us for collaboration →</a>
          </div>

          {/* CTA */}
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h3 className="font-bold mb-2">Become a Partner</h3>
            <p className="text-gray-600 text-sm mb-3">Join our global network to foster academic excellence and innovation.</p>
            <a href="/contact" className="bg-white text-sky-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors duration-200 inline-block">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
} 