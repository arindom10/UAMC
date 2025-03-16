

const AboutUAMC = () => {
    return (
        <div className="mx-[5%]">
            <div className="flex flex-col md:flex-row items-center gap-6 p-6 ">
                {/* Left Side - Images */}
                <div>
                    <div className="flex flex-col md:flex-row gap-4 w-full md:w-1/2">
                        <img
                            src="https://i.postimg.cc/hvSrLjwn/Component-39.png"
                            alt="College Building"
                            className="w-full md:w-1/2 rounded-lg shadow-lg" />
                        <img
                            src="https://i.postimg.cc/YqCRjvYf/Component-37.jpg"
                            alt="College Entrance"
                            className="w-full md:w-1/2 rounded-lg shadow-lg" />
                    </div>

                </div>
                {/* Right Side - Content */}
                <div className="w-full md:w-1/2 space-y-4">
                    <h3 className="text-green-600 font-semibold">knowledge meets innovation</h3>
                    <h1 className="text-3xl lg:text-6xl font-bold">
                        About <span className="text-yellow-500">UAMC</span>
                    </h1>
                    <p className="text-gray-600">
                        <strong>Uttara Adhunik Medical College (UAMC)</strong> is a prestigious medical institution located in Uttara Model Town, Dhaka, Bangladesh. Established in 2003.
                    </p>
                    <p className="text-gray-600">
                        UAMC offers a Bachelor of Medicine and Bachelor of Surgery (MBBS) program, designed to equip students with the knowledge, skills, and hands-on clinical training needed to excel in the medical profession.
                    </p>

                    <div className="flex gap-4">
                        <div className="p-4 border-2 border-green-600 rounded-lg text-center">
                            <p className="text-green-700 font-semibold">College Mission Statement</p>
                        </div>
                        <div className="p-4 border-2 border-green-600 rounded-lg text-center">
                            <p className="text-green-700 font-semibold">College Vision Achievement</p>
                        </div>
                    </div>

                    <button className="bg-green-600 text-white px-6 py-2 rounded-lg">
                        View Our Program →
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AboutUAMC;