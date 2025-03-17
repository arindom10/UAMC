import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import logo from "../../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto">
        {/* Newsletter Section */}
        <div className="text-center mb-8 flex flex-col gap-6 md:gap-0 md:flex-row  items-center justify-between">
          <h2 className="text-4xl font-normal">Subscribe To Newsletter</h2>
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Enter Your mail "
              className="input w-full px-16 py-2 pr-20 border border-green-700 focus:outline-none"
            />
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 btn btn-white px-3 py-1">
              Submit Button{" "}
              <IoIosArrowRoundForward className="w-6 h-6 p-0 m-0 -rotate-45" />
            </button>
          </div>
        </div>
      </div>

      <div className="my-16 text-center border-t border-[#242424] pt-4"></div>

      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="" className="w-16 h-16" />
              <h3 className="text-xl font-bold ">
                Uttara Adhunik <br />
                <span className="text-sm font-medium">
                  Medical College (UAMC)
                </span>
              </h3>
            </div>

            <p className="text-sm mt-2 text-[#737477]">
              We are passionate about education, dedicated to providing
              high-quality resources for learners of all backgrounds.
            </p>
            <p className="mt-2 flex items-center text-base text-[#737477]">
              <IoLocationOutline className="mr-3" /> Park, Melbourne, Australia
            </p>
            <p className="mt-2 flex items-center text-base text-[#737477]">
              <FaPhoneAlt className="mr-3" /> 485-826-710
            </p>
          </div>

          {/* Our Campus */}
          <div className="space-y-8">
            <h3 className="font-bold text-white text-xl underline">
              Our Campus
            </h3>
            <ul className="text-base space-y-3 mt-4 text-[#737477]">
              <li>Academic</li>
              <li>Athletics</li>
              <li>Campus Life</li>
              <li>Research</li>
              <li>Academic Area</li>
            </ul>
          </div>

          {/* Our Pages */}
          <div className="space-y-8">
            <h3 className="font-bold text-white text-xl underline">
              Our Pages
            </h3>
            <ul className="text-base space-y-3 mt-4 text-[#737477]">
              <li>About</li>
              <li>Tuition Fee</li>
              <li>Alumni</li>
              <li>Faculty Staff</li>
              <li>Event</li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="space-y-8">
            <h3 className="font-bold text-white text-xl underline">
              Recent Posts
            </h3>
            <div className="mt-2 space-y-3">
              <div className="flex items-start space-x-5">
                <img
                  src="https://i.postimg.cc/mZQmdr3q/img-23-768x515-webp.png"
                  alt="Post Thumbnail"
                  className="w-24 h-20 object-cover rounded"
                />
                <div className="flex flex-col justify-around h-20">
                  <p className="text-sm text-[#737477]">📅 August 6, 2024</p>
                  <p className="text-sm">
                    Those Inequalities Are Inequalities That
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <img
                  src="https://i.postimg.cc/L4ZcmRtB/Component-19.png"
                  alt="Post Thumbnail"
                  className="w-24 h-20 object-cover rounded"
                />
                <div className="flex flex-col justify-around h-20">
                  <p className="text-sm text-[#737477]">📅 July 4, 2024</p>
                  <p className="text-sm">
                    After Decades Of Improvement, Cardiovascular
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="mt-10 text-center border-t border-[#242424] pt-4">
        <p className="text-base text-[#737477]">
          Copyright © 2024. All Rights Reserved by
          <span className="font-bold text-white ml-1"> Unipix</span>
        </p>
      </div>
    </footer>
  );
}
