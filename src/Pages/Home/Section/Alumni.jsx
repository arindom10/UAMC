import { FaCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";

const events = [
  {
    id: "01",
    img: "https://i.postimg.cc/KY94XYRx/Frame-1261155598.png",
    title: "Bridging Cultures: Global Perspectives in",
    date: "August 20, 2024",
    time: "4:27 am",
    location: "Yarra Park, UK",
  },
  {
    id: "02",
    img: "https://i.postimg.cc/5Nw04g6P/Frame-1261155598.png",
    title: "Literary Voices: Celebrating Diverse Narratives",
    date: "August 20, 2024",
    time: "4:27 am",
    location: "Yarra Park, UK",
  },
  {
    id: "03",
    img: "https://i.postimg.cc/rppF9Lgb/Frame-1261155602.png",
    title: "Cultural Exchange: Building Global Connections",
    date: "August 20, 2024",
    time: "4:27 am",
    location: "Yarra Park, UK",
  },
];

const Alumni = () => {
  return (
    <div className="bg-[#E6F3EB] py-20">
      <div className=" mx-[5%] px-6">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-5xl font-bold text-[#018837]">Alumni Event</h2>
          <a
            href="*"
            className="text-green-600 hover:text-green-800 flex items-center gap-2 font-semibold"
          >
            View All <IoIosArrowRoundForward className="-rotate-45 w-7 h-7" />
          </a>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col justify-between gap-8 w-full lg:w-1/2 lg:h-[606px]">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl  py-10 px-8 flex items-center gap-6 space-x-8 "
              >
                <div className="w-24 h-24 flex-shrink-0">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-green-700 text-xl font-semibold">
                    {event.title}
                  </h3>
                  <div className="text-gray-600 text-sm flex  gap-1 mt-2">
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt /> {event.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaRegClock /> {event.time}
                    </span>
                    <span className="flex items-center gap-2">
                      <LuMapPin /> {event.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/2 lg:h-[606px]">
            <img
              src="https://i.postimg.cc/Dwj5NvfK/img-5-webp.png"
              alt="Events"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
