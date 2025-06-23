"use client";

export default function IUPPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">IUP – International Undergraduate Program</h1>
        <p className="text-lg text-gray-600">Through this program, international students receive full scholarships to pursue undergraduate education in various study programs available at UNSIKA. They study alongside local students, build international networks, and deepen their understanding of Indonesian culture.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Program Overview */}
          <section className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Program Overview</h2>
            <p className="text-gray-600 mb-4">
              Since its inception, the IUP program has attracted students from various countries. The number of IUP students continues to grow:
              <br/>• 2021: 10 students
              <br/>• 2022: 7 students
              <br/>IUP students come from countries such as Sri Lanka, India, Kazakhstan, Pakistan, Tajikistan, Myanmar, Mali, and Yemen.
            </p>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Fields of Study</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Faculty of Computer Science – Informatics Engineering</li>
              <li>Faculty of Agriculture – Agrotechnology, Agribusiness</li>
              <li>Faculty of Economics – Accounting, Management</li>
              <li>Faculty of Social and Political Sciences – Communication Science, Government Science</li>
              <li>Faculty of Teacher Training and Education – English Language Education</li>
              <li>Faculty of Health Sciences – Nutrition</li>
              <li>Faculty of Engineering – Electrical Engineering</li>
              <li>Faculty of Law – Legal Studies</li>
              <li>Faculty of Islamic Studies – Islamic Religious Education</li>
            </ul>
          </section>
        </div>
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Info */}
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h3 className="font-bold text-gray-800 mb-4">Quick Info</h3>
            <div className="space-y-3">
              <div>
                <span className="text-sm text-gray-500">Scholarship Coverage</span>
                <ul className="list-disc pl-5 text-gray-800 text-sm mt-1 space-y-1">
                  <li>Return economy class air ticket (reimbursement)</li>
                  <li>Visa fee (reimbursement)</li>
                  <li>Tuition fee for 8 semesters</li>
                  <li>Accommodation (housing)</li>
                  <li>Monthly allowance</li>
                  <li>Health insurance</li>
                </ul>
              </div>
              <div>
                <span className="text-sm text-gray-500">Application Period</span>
                <p className="font-medium text-gray-800">Annually (see website for dates)</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Eligibility</span>
                <p className="font-medium text-gray-800">Full-time international undergraduate students</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Note</span>
                <p className="text-gray-700 text-xs">
                  One scholarship per study program (for faculties offering two programs, only one grantee per faculty).
                </p>
              </div>
            </div>
          </div>
          {/* Testimonials */}
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
            <h3 className="font-bold text-gray-800 mb-4">Student Testimonials</h3>
            <div className="space-y-3">
              <div className="text-sm">
                <p className="text-gray-600 italic">&ldquo;IUP gave me the chance to study in Indonesia and make friends from all over the world.&rdquo;</p>
                <p className="text-sky-600 font-medium mt-1">- Oumar Bagayoko, Mali</p>
              </div>
              <div className="text-sm">
                <p className="text-gray-600 italic">&ldquo;The cultural experience and academic support at UNSIKA are amazing!&rdquo;</p>
                <p className="text-sky-600 font-medium mt-1">- Hamdan Ahmad, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 