import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function LatestNews() {
  const newsArticles = [
    {
      id: 1,
      category: "Education",
      title: "Those inequalities are inequalities",
      description: "10 Effective Study Tips for College Success Welcome...",
      image: "https://i.postimg.cc/YCFdGf2v/Component-13.png",
      date: "August 6, 2024",
    },
    {
      id: 2,
      category: "University",
      title: "After Decades Of Improvement",
      description: "10 Effective Study Tips for College Success Welcome...",
      image: "https://i.postimg.cc/brFmbm2t/frame-522-1x-280x280-webp.png",
      date: "July 4, 2024",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className=" mx-[5%] px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-20">
          <div>
            <h2 className="text-5xl font-bold text-[#018837]">
              Read Our Latest News
            </h2>
            <p className="text-[#444444] text-base font-normal mt-4">
              You’ll find something to spark your curiosity and enhance your
              knowledge.
            </p>
          </div>
          <a
            href="*"
            className="text-green-600 hover:text-green-800 flex items-center gap-2 font-semibold"
          >
            View All <IoIosArrowRoundForward className="-rotate-45 w-7 h-7" />
          </a>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsArticles.map((article) => (
            <div
              key={article.id}
              className="card card-bordered bg-white  transition"
            >
              <div className="flex gap-4  border-spacing-6 border border-[#018837] p-6 border-dashed">
                <figure>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-48 h-full object-cover"
                  />
                </figure>
                <div className="card-body space-y-3">
                  <span className=" bg-yellow-400 text-black text-xs font-medium px-3 py-1 w-max">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-normal text-[#110C2D]">
                    {article.title}
                  </h3>
                  <p className="text-[#737477]">{article.description}</p>
                  <div className="flex items-center text-[#737477] text-sm gap-4 mt-2">
                    <span className="flex items-center gap-2">
                      <FaUser className="text-[#018837]" /> admin
                    </span>
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt className="text-[#018837]" />{" "}
                      {article.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
