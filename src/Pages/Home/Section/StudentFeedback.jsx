import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StudentFeedback() {
  const feedbacks = [
    {
      name: "Emma Elizabeth",
      role: "Assistant Teacher",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      feedback:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      name: "Zent Ekizie",
      role: "Assistant Teacher",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      feedback:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      name: "Samantha Willow",
      role: "Teacher",
      img: "https://randomuser.me/api/portraits/men/46.jpg",
      feedback:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      name: "Emma Elizabeth",
      role: "Assistant Teacher",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      feedback:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      name: "Zent Ekizie",
      role: "Assistant Teacher",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      feedback:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      name: "soraz",
      role: "Teacher",
      img: "https://randomuser.me/api/portraits/men/46.jpg",
      feedback:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC, making it over 2000 years old.",
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  // Slice feedbacks based on the current page
  const visibleFeedbacks = feedbacks.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="bg-gray-100 py-12">
      <div className="text-center">
        <h2 className="text-[#018837] text-5xl font-bold">
          My Students Feedback
        </h2>
        <p className="text-[#737477] mt-8">
          You’ll find something to spark your curiosity and enhance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mt-8 px-4">
        {visibleFeedbacks.map((item, index) => (
          <div key={index} className=" p-6  space-y-7">
            <div className="flex items-center space-x-1 text-yellow-500 mb-3">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <span key={i}>
                    <FaStar className="text-amber-300" />
                  </span>
                ))}
            </div>
            <p className="text-[#444444] text-lg">{item.feedback}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center mt-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full border-2 border-green-400"
                />
                <div className="ml-3">
                  <h4 className="text-[#018837] text-lg font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-[#444444] text-sm ">{item.role}</p>
                </div>
              </div>
              <div>
                <img src="https://i.postimg.cc/fbWr0SVm/Vector.png" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Clickable Carousel Dots */}
      <div className="flex justify-center mt-12">
        {[...Array(Math.ceil(feedbacks.length / itemsPerPage))].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`h-3 w-3 mx-1 rounded-full transition-all ${
              currentPage === i ? "bg-yellow-500 w-4" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
