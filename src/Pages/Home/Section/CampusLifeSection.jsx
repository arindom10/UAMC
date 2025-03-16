
const CampusLifeSection = () => {
  return (
    <div className="bg-green-700 relative overflow-hidden py-10">
      {/* Decorative elements */}
      <div className="absolute top-10 left-96 opacity-20">
        <svg className="w-16 h-16 text-green-200 transform rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-10 opacity-20">
        <svg className="w-16 h-16 text-green-200 transform -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
      <div className="absolute right-10 bottom-40 opacity-20">
        <svg className="w-24 h-24 text-green-200 transform rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      </div>

      <div className="p-[5%]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-white text-lg max-w-md">
              Building a vibrant community of creative and accomplished people from around the world
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-white text-6xl font-serif">
              Campus<span className="relative">
                <span className="absolute -top-2 -right-4">
                  <span className="text-yellow-400 text-6xl">&apos;</span>
                  <span className="text-yellow-400 text-6xl">-</span>
                </span>
              </span>
              <br />
              Life
            </h1>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Student Life */}
          <div className="flex flex-col">
            <div className="h-64 overflow-hidden mb-4">
              <img 
                src="https://i.postimg.cc/kGpkBp9L/cam1.jpg" 
                alt="Student Life" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center text-white">
              <h3 className="text-xl font-serif">Student Life</h3>
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>

          {/* Arts & Culture */}
          <div className="flex flex-col">
            <div className="h-64 overflow-hidden mb-4">
              <img 
                src="https://i.postimg.cc/bJ3Xjv5y/cam2.png" 
                alt="Arts & Culture" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center text-white">
              <h3 className="text-xl font-serif">Arts & Culture</h3>
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>

          {/* Recreation & Wellness */}
          <div className="flex flex-col">
            <div className="h-64 overflow-hidden mb-4">
              <img 
                src="https://i.postimg.cc/J0nf7Lwb/cam3.png" 
                alt="Recreation & Wellness" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center text-white">
              <h3 className="text-xl font-serif">Recreation & Wellness</h3>
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusLifeSection;