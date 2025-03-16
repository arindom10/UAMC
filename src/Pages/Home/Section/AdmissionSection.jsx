const AdmissionSection = () => {
  return (
    <div
      className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] bg-cover bg-center flex justify-center items-center px-4"
      style={{
        backgroundImage: "url('https://i.ibb.co/ymch6z2M/unnamed.jpg')",
      }}
    >
      {/* Green Overlay */}
      <div className="absolute inset-0 bg-green-900 bg-opacity-80"></div>

      {/* Content */}
      <div className="relative text-center max-w-7xl text-white px-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="text-[#FECD2F]">UAMC</span> Admission
        </h2>
        <p className="mt-4 text-sm md:text-lg ">
          Uttara Adhunik Medical College (UAMC) was established in 2003 with a
          vision to provide quality medical education and healthcare services.
          Founded through the dedicated efforts of medical professionals and
          social leaders, UAMC is committed to training future doctors while
          ensuring affordable healthcare for the community.
        </p>
        <button className="mt-6 px-16 py-4 bg-green-700 hover:bg-[#FECD2F] transition duration-300  text-white hover:text-black font-medium flex items-center gap-2 mx-auto">
          Learn More →
        </button>
      </div>
    </div>
  );
};

export default AdmissionSection;
