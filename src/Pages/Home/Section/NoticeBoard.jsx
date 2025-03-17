import { useState } from "react";

export default function NoticeBoard() {
  // State for active tabs
  const [activeNoticeTab, setActiveNoticeTab] = useState("general");
  const [activePublicationTab, setActivePublicationTab] = useState("journal");

  // Sample data for notices and publications
  const notices = [
    {
      id: 1,
      title:
        "BCPS e-Logbook: Modernizing the Monitoring of FCPS 1st Phase Training",
      date: "Mar 25",
      time: "3:40 PM",
      day: "12",
    },
    {
      id: 2,
      title:
        "BCPS e-Logbook: Modernizing the Monitoring of FCPS 1st Phase Training",
      date: "Mar 25",
      time: "3:40 PM",
      day: "12",
    },
    {
      id: 3,
      title:
        "BCPS e-Logbook: Modernizing the Monitoring of FCPS 1st Phase Training",
      date: "Mar 25",
      time: "3:40 PM",
      day: "12",
    },
    {
      id: 4,
      title:
        "BCPS e-Logbook: Modernizing the Monitoring of FCPS 1st Phase Training",
      date: "Mar 25",
      time: "3:40 PM",
      day: "12",
    },
    {
      id: 5,
      title:
        "BCPS e-Logbook: Modernizing the Monitoring of FCPS 1st Phase Training",
      date: "Mar 25",
      time: "3:40 PM",
      day: "12",
    },
  ];

  const publications = [...notices]; // Using the same data for publications

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Notice Board Section */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold text-green-600">Notice Board</h2>
            <a
              href="*"
              className="flex items-center text-green-600 hover:underline"
            >
              View All
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 11l5-5m0 0l5 5m-5-5v12"
                  transform="rotate(45, 12, 12)"
                />
              </svg>
            </a>
          </div>

          {/* Custom Tabs */}
          <div className="mb-4">
            <div className="bg-gray-100 rounded-md flex flex-wrap">
              <button
                onClick={() => setActiveNoticeTab("general")}
                className={`py-2 px-4 text-sm rounded-md ${
                  activeNoticeTab === "general" ? "bg-white shadow-sm" : ""
                }`}
              >
                General Notice
              </button>
              <button
                onClick={() => setActiveNoticeTab("admission")}
                className={`py-2 px-4 text-sm rounded-md ${
                  activeNoticeTab === "admission" ? "bg-white shadow-sm" : ""
                }`}
              >
                Admission Notice
              </button>
              <button
                onClick={() => setActiveNoticeTab("reports")}
                className={`py-2 px-4 text-sm rounded-md ${
                  activeNoticeTab === "reports" ? "bg-white shadow-sm" : ""
                }`}
              >
                Reports
              </button>
              <button
                onClick={() => setActiveNoticeTab("job")}
                className={`py-2 px-4 text-sm rounded-md ${
                  activeNoticeTab === "job" ? "bg-white shadow-sm" : ""
                }`}
              >
                Job Circular
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div>
            {activeNoticeTab === "general" && (
              <div className="space-y-4">
                {notices.map((notice) => (
                  <div
                    key={notice.id}
                    className="bg-gray-100 rounded-md p-4 flex"
                  >
                    <div className="flex flex-col items-center mr-4">
                      <div className="text-xl font-bold">{notice.day}</div>
                      <div className="bg-green-600 text-white px-2 py-1 text-xs ">
                        {notice.date}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800 mb-1">
                        `{notice.title}`
                      </h3>
                      <div className="flex items-center text-gray-500 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {notice.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activeNoticeTab === "admission" && (
              <div className="p-4 text-center text-gray-500">
                No admission notices available
              </div>
            )}
            {activeNoticeTab === "reports" && (
              <div className="p-4 text-center text-gray-500">
                No reports available
              </div>
            )}
            {activeNoticeTab === "job" && (
              <div className="p-4 text-center text-gray-500">
                No job circulars available
              </div>
            )}
          </div>
        </div>

        {/* Publication Section */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold text-green-600">Publication</h2>
            <a
              href="*"
              className="flex items-center text-green-600 hover:underline"
            >
              View All
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 11l5-5m0 0l5 5m-5-5v12"
                  transform="rotate(45, 12, 12)"
                />
              </svg>
            </a>
          </div>

          {/* Custom Tabs */}
          <div className="mb-4">
            <div className="bg-gray-100 rounded-md flex">
              <button
                onClick={() => setActivePublicationTab("journal")}
                className={`py-2 px-4 text-sm rounded-md ${
                  activePublicationTab === "journal" ? "bg-white shadow-sm" : ""
                }`}
              >
                Journal
              </button>
              <button
                onClick={() => setActivePublicationTab("tenders")}
                className={`py-2 px-4 text-sm rounded-md ${
                  activePublicationTab === "tenders" ? "bg-white shadow-sm" : ""
                }`}
              >
                Tenders
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div>
            {activePublicationTab === "journal" && (
              <div className="space-y-4">
                {publications.map((publication) => (
                  <div
                    key={publication.id}
                    className="bg-gray-100 rounded-md p-4 flex"
                  >
                    <div className="flex flex-col items-center mr-4">
                      <div className="text-xl font-bold">{publication.day}</div>
                      <div className="bg-green-600 text-white px-2 py-1 text-xs ">
                        {publication.date}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800 mb-1">
                        `{publication.title}
                      </h3>
                      <div className="flex items-center text-gray-500 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {publication.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activePublicationTab === "tenders" && (
              <div className="p-4 text-center text-gray-500">
                No tenders available
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
