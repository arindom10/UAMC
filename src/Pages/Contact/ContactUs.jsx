import React from 'react';

const ContactUs = () => {
    return (
        <div className='space-y-5 '>
            <section className="p-10 bg-gray-100">
                <div className=" max-w-7xl mx-[3%] md:mx-auto ">
                    <div className="mt-12 sm:mt-16">
                        <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
                            <div className="overflow-hidden  bg-white rounded-xl">
                                <div className="p-6">
                                    <svg
                                        className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                    <p className="mt-6 text-lg font-medium text-gray-900">
                                        0255080711
                                    </p>
                                    <p className="text-lg font-medium text-gray-900">
                                        0255080711
                                    </p>
                                    <p className="text-lg font-medium text-gray-900">
                                        0255080761
                                    </p>
                                </div>
                            </div>

                            <div className="overflow-hidden  bg-white rounded-xl">
                                <div className="p-6">
                                    <svg
                                        className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <p className="mt-6 text-lg font-medium text-gray-900">
                                        uamcoffice08@yahoo.com
                                    </p>
                                </div>
                            </div>

                            <div className="overflow-hidden  bg-white rounded-xl">
                                <div className="p-6">
                                    <svg
                                        className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <p className="mt-6 pb-3 text-lg font-medium leading-relaxed text-gray-900">
                                        H # 34, R # 4, Sector # 9,
                                        Sonargaon Janapath, Uttara Model Town,
                                        Dhaka - 1230, Bangladesh
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="mt-6 overflow-hidden bg-white rounded-xl">
                            <div className="px-6 py-12 sm:p-12">
                                <h3 className="text-3xl font-semibold text-center text-gray-900">
                                    Send us a message
                                </h3>

                                <form action="#" method="POST" className="mt-14">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                        <div>
                                            <label htmlFor="" className="text-base font-medium text-gray-900">
                                                {" "}
                                                Your name{" "}
                                            </label>
                                            <div className="mt-2.5 relative">
                                                <input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    placeholder="Enter your full name"
                                                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="" className="text-base font-medium text-gray-900">
                                                {" "}
                                                Email address{" "}
                                            </label>
                                            <div className="mt-2.5 relative">
                                                <input
                                                    type="email"
                                                    name=""
                                                    id=""
                                                    placeholder="Enter your email"
                                                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="" className="text-base font-medium text-gray-900">
                                                {" "}
                                                Phone number{" "}
                                            </label>
                                            <div className="mt-2.5 relative">
                                                <input
                                                    type="tel"
                                                    name=""
                                                    id=""
                                                    placeholder="Enter  phone number"
                                                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="" className="text-base font-medium text-gray-900">
                                                {" "}
                                                Company name{" "}
                                            </label>
                                            <div className="mt-2.5 relative">
                                                <input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    placeholder="Enter company name"
                                                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label htmlFor="" className="text-base font-medium text-gray-900">
                                                {" "}
                                                Message{" "}
                                            </label>
                                            <div className="mt-2.5 relative">
                                                <textarea
                                                    name=""
                                                    id=""
                                                    placeholder="Message"
                                                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                                                    rows="4"
                                                ></textarea>
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <button
                                                className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200  bg-gradient-to-l from-primary-base via-primary-light to-primary-deep border border-transparent  rounded-md focus:outline-none hover:bg-green-700 focus:bg-green-700"
                                            >
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* map  */}

            <iframe
                className="w-full h-[70vh] py-5"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.422005668711!2d90.396699!3d23.874649899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c43c3a4e9ced%3A0xb032c4b6ec0c1bf9!2sUttara%20Adhunik%20Medical%20College%20Hospital(BMSRI)!5e0!3m2!1sen!2sbd!4v1742121630363!5m2!1sen!2sbd"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

        </div>
    )
}

export default ContactUs;