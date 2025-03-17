import image1 from "../../../../public/image1.png";
import image2 from "../../../../public/image2.png";
import image3 from "../../../../public/image3.png";
import container from "../../../../public/container.png";

const CampusLife = () => {
  return (
    <div className="min-h-screen bg-[#00843D] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Paper/document icon top left */}
        <div className="absolute top-40 left-20 opacity-10 rotate-12">
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
        </div>
        {/* Paper/document icon top right */}
        <div className="absolute top-20 right-40 opacity-10 -rotate-12">
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
        </div>
        {/* Additional paper icon bottom left */}
        <div className="absolute top-40 left-40 opacity-10 -rotate-6">
          <img
            src="https://i.postimg.cc/rydF6YKt/Vector.png"
            width={5}
            height={5}
            alt=""
          />
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-8 py-12 relative z-10">
        {/* Header section - corrected layout to match screenshot */}
        <div className="flex items-center justify-center text-center">
          <div className="md:w-1/2">{/* Empty div for layout balance */}</div>
          <div className="md:w-1/2">
            <div className="flex">
              <h1 className="text-6xl md:text-7xl font-serif relative">
                Campus
              </h1>
              <img src={container} alt="" className="w-11 h-10" />
            </div>
            <div className="flex">
              <p className="max-w-md mt-4 text-lg">
                Building a vibrant community of creative and accomplished people
                from around the world
              </p>
              <h1 className="text-6xl md:text-7xl font-serif mt-2">Life</h1>
            </div>
          </div>
        </div>

        {/* Three columns section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Student Life */}
          <div className="group">
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={image1}
                alt="Students in a medical setting"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center">
              <h2 className="text-xl font-serif">Student Life</h2>
              <svg
                className="ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </div>

          {/* Arts & Culture */}
          <div className="group">
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={image2}
                alt="People looking at art exhibits"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center">
              <h2 className="text-xl font-serif">Arts & Culture</h2>
              <svg
                className="ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </div>

          {/* Recreation & Wellness */}
          <div className="group">
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={image3}
                alt="Students in recreational activities"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center">
              <h2 className="text-xl font-serif">Recreation & Wellness</h2>
              <svg
                className="ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusLife;
