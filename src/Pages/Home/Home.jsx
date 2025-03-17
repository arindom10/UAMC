import Hero from "../../components/Hero/Hero";
import AboutUAMC from "./Section/AboutUAMC";
import AdmissionSection from "./Section/AdmissionSection";
import Alumni from "./Section/Alumni";
import CampusLife from "./Section/CampusLife";
import DepartmentsSection from "./Section/DepartmentsSection";
import Feature from "./Section/Feature";
import LatestNews from "./Section/LatestNews";
import NoticeBoard from "./Section/NoticeBoard";
import OurFacilities from "./Section/OurFacilities";
import Principal from "./Section/Principal";
import StudentFeedback from "./Section/StudentFeedback";

const Home = () => {
  return (
    <div className="bg-stone-100 w-full h-full">
      <Hero />
      <NoticeBoard />
      <AboutUAMC />
      <Feature />
      <DepartmentsSection />
      <AdmissionSection />
      <OurFacilities />
      <Principal />
      <CampusLife />
      <Alumni />
      <LatestNews />
      <StudentFeedback />
    </div>
  );
};

export default Home;
