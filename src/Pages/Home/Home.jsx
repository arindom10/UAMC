import Hero from "../../components/Hero/Hero";
import AboutUAMC from "./Section/AboutUAMC";
import AdmissionSection from "./Section/AdmissionSection";
import DepartmentsSection from "./Section/DepartmentsSection";
import Feature from "./Section/Feature";
import OurFacilities from "./Section/OurFacilities";

const Home = () => {
  return (
    <div className="bg-stone-100 w-full h-full">
      <Hero />
      <AboutUAMC />
      <Feature />
      <DepartmentsSection />
      <AdmissionSection />
      <OurFacilities />
    </div>
  );
};

export default Home;
