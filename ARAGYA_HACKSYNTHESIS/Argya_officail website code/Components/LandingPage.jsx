import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.tsx";
import qvcssImage from "./images/qvcss2.png";
import doctorImage from "./images/doctor.png";
import customer1Image from "./images/customer1.jpg";
import customer2Image from "./images/customer2.jpeg";
import customer3Image from "./images/customer3.jpg";
import customer4Image from "./images/customer4.jpg";

const LandingPage = () => {
  const [buttonText, setButtonText] = useState("TRY NOW");

  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-up");

    const handleScroll = () => {
      fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          el.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    setButtonText("Coming Soon");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-custom-black via-custom-dark-purple to-custom-purple text-white overflow-y-auto">
      <Navbar />

      <div className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-10 pt-20">
        <div className="md:w-1/2 space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold fade-up bg-gradient-to-r from-pink-300 via-red-300 to-white bg-clip-text text-transparent">
            A one-stop Solution for all your Medical Needs
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold fade-up bg-gradient-to-r from-pink-300 via-red-300 to-white bg-clip-text text-transparent">
            Presenting QCVSS: Quadra Care Vital Sync System
          </h2>
          <p className="mt-5 fade-up">
            About the QCVSS: QUADRA CARE VITAL SYNC SYSTEM...
            <p>
              {" "}
              Designed for effortless patient care, Quadra Care Vital Sync
              System is a portable ventilator merged with ECG, pulse rate
              monitoring, and saline level monitoring system together in a
              single setup. It provides accurate respiratory support and
              continuous cardiovascular monitoring. The ventilator uses advanced
              sensors and controls algorithms, while on the other hand, the ECG
              attributes detection of real-life cardiac issues. The system is
              ideal for exigency as its compact design ensures easy transport
              and portability. Apart from that, an automated saline water
              monitoring system is also included to ensure the safe
              administration of saline monitoring solutions to patients. Sensors
              are utilized in the system to measure the saline level in the
              bottle, which will timely alert whenever the bottle is going to be
              empty and need a replacement. Integrated data loggers and
              transmitters collect and send real-time data to monitoring
              stations or cloud-based platforms for analysis, allowing
              healthcare providers to make decisions. The system enhances
              patient care and safety in medical treatment by ensuring precise
              delivery and continuous monitoring.
            </p>
          </p>
        </div>
        <div className="w-full md:w-1/2 h-64 md:h-1/2 rounded-lg fade-up mt-10 md:mt-0">
          <img
            src={qvcssImage}
            alt="QCVSS"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="mt-20 w-full px-6 md:px-10 space-y-10">
        <div className="text-center fade-up">
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-pink-300 via-red-300 to-white bg-clip-text text-transparent">
            Process Flow of Our Project
          </h3>
        </div>

        <div className=" w-1/3 mx-auto">
          {steps.map((step, index) => (
            <div key={index} className={"relative p-6"}>
              <div className="">
                <div
                  className={`p-4 rounded-lg shadow-lg bg-blue-600 text-white relative border-4 ${
                    index % 2 === 0
                      ? "border-t-4 border-l-4 border-b-4 border-custom-dark-purple"
                      : "border-t-4 border-r-4 border-b-4 border-custom-dark-purple"
                  }`}
                >
                  <h4 className="text-lg font-semibold">{step.date}</h4>
                  <p className="font-medium">{step.title}</p>
                  <p className="text-sm">{step.description}</p>
                </div>
              </div>
              <div
                className={
                  "hidden md:block w-1/2 h-[calc(100%+8px)] rounded-3xl  border-[8px]  border-blue-600 absolute top-0  " +
                  (index % 2 === 0
                    ? "border-r-0 rounded-r-none left-0"
                    : "border-l-0 rounded-l-none right-0")
                }
              ></div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-10 mt-20 space-y-10 md:space-y-0">
      <div className="w-full md:w-1/3 h-96 md:h-[80%] fade-up">
          <div className="h-full rounded-lg flex items-center justify-center">
            <img
              src={doctorImage}
              alt="Doctor"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="w-full md:w-3/4 space-y-5 fade-up">
        <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-pink-300 via-red-300 to-white bg-clip-text text-transparent">
            WHY CHOOSE US?
          </h3>
          <p>
            Quadra Care Vital Sync System integrates the latest technology with
            healthcare to provide a seamless experience for both patients and
            doctors. Our system is designed to ensure the highest level of care
            and monitoring, making it the best choice for medical professionals
            worldwide.
          </p>
        </div>
      </div>

      <div className="w-full px-6 md:px-10 mt-20 space-y-10">
        <h3 className="text-2xl font-semibold text-center fade-up bg-gradient-to-r from-pink-300 via-red-300 to-white bg-clip-text text-transparent">
          WHAT OUR CUSTOMERS HAVE TO SAY
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 fade-up">
          {reviews.map((review, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-500 rounded-full mr-4">
                  <img
                    src={customerImages[index]}
                    alt={`Customer ${index + 1}`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.stars ? "text-yellow-400" : "text-gray-500"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.034 3.175a1 1 0 00.95.69h3.348c.969 0 1.372 1.24.588 1.81l-2.707 1.965a1 1 0 00-.364 1.118l1.034 3.175c.3.921-.755 1.688-1.54 1.118l-2.707-1.965a1 1 0 00-1.175 0l-2.707 1.965c-.785.57-1.84-.197-1.54-1.118l1.034-3.175a1 1 0 00-.364-1.118L2.478 8.602c-.784-.57-.38-1.81.588-1.81h3.348a1 1 0 00.95-.69l1.034-3.175z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm">{review.comment}</p>
              <p className="mt-4 text-sm font-semibold">{review.customer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-6 md:px-10 mt-20 text-center space-y-5 fade-up">
        <h3 className="text-2xl font-semibold">
          What are you waiting for? Get yourself a free demo !!
        </h3>

        <button
          className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-gray-600 transition duration-300"
          onClick={handleButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const steps = [
  {
    date: "Jan 2023",
    title: "Component Integration",
    description:
      "We started integration by merging 3 devices together, namely portable ventilator, ECG, and saline level monitoring system.",
  },
  {
    date: "Feb 2023",
    title: "Software Integration",
    description:
      "Quadra Care Vital Sync system was integrated with a real-time monitoring system.",
  },
  {
    date: "Mar 2023",
    title: "First Prototype Testing",
    description:
      "After software integration, we tested the first prototype of Quadra Care Vital Sync System.",
  },
  {
    date: "May 2023",
    title: "Prototype Testing",
    description:
      "The prototype testing of Quadra Care Vital Sync System was successful.",
  },
];

const reviews = [
  {
    stars: 4,
    comment:
      "The Quadra Care Vital Sync System has truly revolutionized patient care in our hospital. Its integration of a ventilator, ECG, and saline level monitoring in one portable setup makes it incredibly convenient for both staff and patients. The real-time data transmission to monitoring stations has greatly enhanced our ability to make timely decisions. The compact design also makes it easy to move between rooms. Overall, it’s a reliable and innovative solution for critical care.",
    customer: "Srijeeta Das",
  },
  {
    stars: 5,
    comment:
      "I’ve been using the Quadra Care Vital Sync System for a few months now, and it’s become an indispensable tool in our ICU. The seamless integration of respiratory support and cardiovascular monitoring ensures that we can provide comprehensive care without the need for multiple devices. The automated saline monitoring feature is a game-changer, reducing the chances of human error. This system has significantly improved patient outcomes in our department.",
    customer: "Riddhiraj Chanda",
  },
  {
    stars: 4,
    comment:
      "The Quadra Care Vital Sync System is an excellent example of how technology can enhance patient care. The system’s ability to monitor vital signs in real-time and provide accurate respiratory support is impressive. I particularly appreciate the automated saline level monitoring, which ensures that patients receive the necessary fluids without interruption. The system’s portability is another advantage, making it ideal for emergency situations where quick responses are crucial.",
    customer: "Ritam Das",
  },
  {
    stars: 5,
    comment:
      "As a healthcare professional, I’m always looking for ways to improve patient care, and the Quadra Care Vital Sync System has exceeded my expectations. The integration of advanced sensors and data loggers allows for continuous monitoring, which is essential in critical care settings. The system’s compact design and ease of use make it a practical choice for any healthcare facility. I highly recommend this system for its reliability and innovative approach to patient care.",
    customer: "Daibik Sengupta",
  },
];

const customerImages = [
  customer1Image,
  customer2Image,
  customer3Image,
  customer4Image,
];

export default LandingPage;