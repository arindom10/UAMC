const Feature = () => {
  return (
    <div
      className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/WWT1sGvS/team-young-specialist-doctors-standing-corridor-hospital.jpg')",
      }}
    >
      {/* Bigger Green Overlay Section */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        w-[90%] md:w-[80%] lg:w-[75%] 
                        bg-green-900 bg-opacity-85 py-8 md:py-14 
                        flex justify-between items-center text-white rounded-lg shadow-xl"
      >
        <div className="flex-1 text-center px-8 border-r border-white">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6">
            90%
          </h2>
          <p className="text-sm md:text-lg text-[#FECD2F]">Post Graduation</p>
          <p className="text-sm md:text-lg text-[#FECD2F]">Success Rate</p>
        </div>
        <div className="flex-1 text-center px-8 border-r border-white">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6">
            Top 10
          </h2>
          <p className="text-sm md:text-lg text-[#FECD2F]">Colleges That</p>
          <p className="text-sm md:text-lg text-[#FECD2F]">Create Futures</p>
        </div>
        <div className="flex-1 text-center px-8">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6">
            No.1
          </h2>
          <p className="text-sm md:text-lg text-[#FECD2F]">In The Nation For</p>
          <p className="text-sm md:text-lg text-[#FECD2F]">Materials R&D</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
