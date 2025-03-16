import { FiSearch, FiArrowRight } from "react-icons/fi";

function DepartmentsSection() {
  return (
    <div className="bg-gray-50 py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Text and Search */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-[#3c7a39]">
              Find Your Department
            </h1>

            <p className="text-gray-700">
              Use the search bar below to explore our comprehensive{" "}
              <span className="font-medium">MBBS program</span> and discover the
              perfect path to kickstart your medical career. Join{" "}
              <span className="font-medium">UAMC</span> and embark on a journey
              of academic excellence, hands-on clinical training, and
              cutting-edge medical research!
            </p>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder='Find your program like "Department of Phycology"'
                className="pl-10 pr-4 py-3 w-full rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#3c7a39]"
              />
            </div>

            <div>
              <span className="text-gray-600">Popular Search: </span>
              <div className="flex flex-wrap gap-1 mt-1">
                <a href="*" className="text-gray-600 hover:text-[#3c7a39]">
                  Department of Microbiology
                </a>
                <span className="text-gray-600 mx-1">|</span>
                <a href="*" className="text-gray-600 hover:text-[#3c7a39]">
                  Department of Community Medicine
                </a>
                <span className="text-gray-600 mx-1">|</span>
                <a href="*" className="text-gray-600 hover:text-[#3c7a39]">
                  Department of Pathology
                </a>
              </div>
            </div>

            {/* Department Card */}
            <div className="border border-dashed border-gray-300 rounded-md p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-md">
                  <img
                    src="https://i.ibb.co.com/WWT1sGvS/team-young-specialist-doctors-standing-corridor-hospital.jpg"
                    alt="Department of Microbiology"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded inline-block mb-1">
                    Popular Program
                  </div>
                  <h3 className="text-lg font-medium text-[#3c7a39]">
                    Department of Microbiology
                  </h3>
                </div>
              </div>
              <div className="bg-[#3c7a39] p-2 rounded-md">
                <FiArrowRight className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="relative h-[400px] md:h-[500px]">
            <div className="grid grid-cols-2 gap-2 h-full">
              <div className="relative">
                <img
                  src="https://i.ibb.co.com/wNFwp0jS/doctor-with-face-mask-against-covid19-discussing-with-nurse-hospital-waiting-area-disabled-senior-wo.jpg"
                  alt="Doctor with patient"
                  className="object-cover  w-full h-1/2"
                />
              </div>
              <div className="relative">
                <img
                  src="https://i.ibb.co.com/fYNFLmwh/background-focus-nurse-wearing-protective-mask-gloves-checking-clinical-x-ray-ct-scan-results-doctor.jpg"
                  alt="Nurse checking x-ray"
                  className="object-cover  w-full h-full"
                />
              </div>
            </div>

            {/* Counter Badge */}
            <div className="absolute bottom-20 left-4 bg-[#018837] bg-opacity-80  p-4 shadow-md flex items-center space-x-4">
              <div className="relative h-14 w-14">
                <img
                  src="https://i.ibb.co.com/j9qLP9Kd/171328095-10677961.png"
                  alt="Department icon"
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-4xl font-bold">28+</h3>
                <p className="text-xl text-white">Department Available For</p>
                <p className="text-xl text-white">Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepartmentsSection;
