const PrincipalMessagePage = () => {
  return (
    <div className="bg-green-50 min-h-screen p-8">
      <div className="p-[5%]">
        {/* Header with icon and text */}
        <div className="flex items-center justify-center gap-2 text-green-600 mb-4">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
          <span className="text-lg">knowledge meets innovation</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-center mb-12">
          Message from the <span className="text-yellow-400">Principal</span>
        </h1>

        {/* Main content */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left side with signature and info */}
          <div className="md:w-1/2">
            {/* Signature image */}
            <div className="mb-6">
              <img
                src="https://i.postimg.cc/D0st4zNK/signature.png"
                alt="Principal's Signature"
                className="w-32"
              />
            </div>

            {/* Principal info */}
            <h2 className="text-xl mb-1">Honorable</h2>
            <h3 className="text-3xl text-green-600 font-bold mb-4">
              Prof. Dr. Mohammad Mohibur Rahman
            </h3>

            <div className="mb-6">
              <h2 className="text-gray-700 font-bold flex items-baseline space-x-2">
                <span className="text-5xl">Principal</span>
                <sub className="text-lg">(In Charge)</sub>
              </h2>
            </div>

            <h4 className="text-xl font-semibold text-gray-700 mb-4">
              Ensuring Quality Healthcare & Medical Education
            </h4>

            {/* Message content */}
            <p className="text-gray-700 mb-4">
              Bangladesh faces significant challenges in delivering healthcare
              nationwide. To support government efforts,{" "}
              <strong>Uttara Adhunik Medical College Hospital (UAMCH)</strong>{" "}
              has been providing comprehensive health services since 2003,
              evolving into a tertiary-level multidisciplinary hospital.
            </p>

            {/* Read more button */}
            <div className="mt-8">
              <button className="bg-green-600 text-white px-8 py-3 flex items-center">
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right side with image */}
          <div className="">
            <div className="relative">
              <img
                src="https://i.postimg.cc/HWBWTvgW/man.jpg"
                alt="Principal"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalMessagePage;
