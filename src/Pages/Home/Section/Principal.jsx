import { ArrowRight } from "lucide-react";
import imgBox from "../../../../public/imageBox.png";
import Signature from "../../../../public/Signature.png";

const Principal = () => {
  return (
    <div className="bg-[#e8f5e9] w-full p-6 md:p-12">
      <div className="flex justify-center mb-6">
        <div className="flex items-center text-green-600">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3Z" />
          </svg>
          <span className="text-sm md:text-base font-canela">
            knowledge meets innovation
          </span>
        </div>
      </div>
      {/* Main heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-canela font-bold">
          Message from the <span className="text-yellow-400">Principal</span>
        </h1>
      </div>

      <div className="max-w-7xl mx-auto pb-8">
        {/* Header with icon and text */}
        <div className="mb-6">
          <img
            src={Signature}
            alt="Signature"
            width={120}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Content area */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Right column with principal info */}
          <div className="md:w-1/2 space-y-6">
            {/* Principal info */}
            <div>
              <p className="text-lg font-medium font-canela">Honorable</p>
              <h2 className="text-green-600 font-canela text-2xl md:text-3xl font-bold">
                Prof. Dr. Mohammad Mohibur Rahman
              </h2>

              <div className="mt-6">
                <h3 className="text-6xl font-bold font-canela text-light_silver">
                  Principal{" "}
                  <span className="text-base font-normal font-canela">
                    (In Charge)
                  </span>
                </h3>
              </div>

              <div className="mt-4">
                <h4 className="text-lg font-canela font-bold text-gray-700">
                  Ensuring Quality Healthcare & Medical Education
                </h4>
              </div>

              <div className="mt-6 text-gray-700 text-sm font-canela">
                <p className="mb-2">
                  Bangladesh faces significant challenges in delivering
                  healthcare nationwide. To support government efforts,{" "}
                  <span className="font-medium">
                    Uttara Adhunik Medical College Hospital (UAMCH)
                  </span>{" "}
                  has been providing comprehensive health services since 2003,
                  evolving into a tertiary-level multidisciplinary hospital.
                </p>
              </div>

              <div className="mt-8">
                <button className="bg-green-600 text-white px-6 py-2 flex items-center gap-2 hover:bg-green-700 transition-colors text-sm font-canela">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Left column with image */}
          <div className="md:w-1/2 flex items-center justify-center">
            <img
              src={imgBox}
              alt="Campus or Medical Facility"
              width={500}
              height={400}
              className="w-full h-auto max-w-md rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principal;
