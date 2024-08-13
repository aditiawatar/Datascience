import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import img1 from "./images/workshop4.png";
import img2 from "./images/workshop5.png";
import img3 from "./images/workshop6.png";
import eclipse from "./images/Ellipse 321.png"

const Datascience = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-5">
    <h2 className="text-2xl font-bold mb-4">FAQ</h2>
    <div className="divide-y divide-gray-200">
        {[
          {
            question: "What are the prerequisites for this workshop?",
            answer:
              "It is recommonded to have basic understandng of programming, especially in Python, and familiarity with statistic and linear algebra. Experience with data manipulation and visualization tools will be helpful. A curious mindset and problem solving skills are key for tackling data-driven challenges.",
          },
          {
            question: "Is this workshop suitable for beginners?",
            answer:
              "Yes, the Finance workshop of organization is designed to accommodate beginners. It covers fundamental concepts and practices, providing a solid foundation in human resources. The content is tailored to introduce key HR principles and practices in a comprehensive and accessible manner.",
          },
          {
            question: "Will I get a certificate after completing the workshop?",
            answer:
              "Yes, you will receive a certificate after successfully completing the workshop. This certificate will recognize your participation and the skills you've gained, which can be valuable for career advancement and showcasing your expertise in the field.",
          },
          {
            question: "Can I cancel my enrollment and get a refund?",
            answer:
              'Yes, you can cancel your enrollment. For checking the refund policy, please <a href="https://example.com/refund-policy" className="text-blue-500 underline hover:text-blue-700">click here</a>.',
          },
        ].map((faq, index) => (
          <div key={index} className="py-4">
            <button
              className="w-full flex justify-between items-center text-lg font-medium text-gray-700 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <svg
                className={`w-6 h-6 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {openIndex === index && (
              <div
                className="mt-2 text-blue-400 font-normal"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              ></div>
            )}
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto p-5">
      <h2 className="text-2xl font-bold mb-8 mt-8 ">Upcoming Workshops</h2>
      <div className="flex flex-col md:flex-row md:space-x-4">
        {/* Workshop Card 1 */}
        <div className="flex-1 mb-6 md:mb-0">
          <img src={img1} alt="Employee Relations workshop" className="h-80 w-full object-cover rounded-xl mx-auto" />
          <div className="font-bold text-lg mt-2 text-center">
            Data Processing workshop <br />
           
          </div>
        </div>

        {/* Workshop Card 2 */}
        <div className="flex-1 mb-6 md:mb-0">
          <img src={img2} alt="Talent Management workshop" className="h-80 w-full object-cover rounded-xl mx-auto" />
          <div className="font-bold text-lg mt-2 text-center">
           Machine Learning workshop <br />
          
          </div>
        </div>

        {/* Workshop Card 3 */}
        <div className="flex-1 mb-6 md:mb-0">
          <img src={img3} alt="Diversity and Inclusion workshop" className="h-80 w-full object-cover rounded-xl mx-auto" />
          <div className="font-bold text-lg mt-2 text-center">
          Deep Learning workshop <br />
            
          </div>
        </div>
      </div>
    </div>
      <footer className="bg-black text-white py-8 px-4 mt-6" >
        <hr className="border-t border-gray-300 mb-8 relative -top-14 p-0" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative -top-10">
          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">COMPANY</h3>
            <ul>
              <li className="mb-1"><a href="#" className="hover:underline">About Us</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Privacy policy</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Blog</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul>
              <li className="mb-1"><a href="#" className="hover:underline">Contact Us</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Community</a></li>
            </ul>
          </div>

          {/* Socials Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Socials</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-white">
                <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white">
                <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white">
                <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Sign Up Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Sign Up</h2>
            <form className="mt-3">
              <input
                type="text"
                placeholder="Enter your email"
                className="border px-3 py-2 w-full rounded"
              />
              <img src={eclipse}  className=" relative top-20 pb-2"/>
            </form>
          </div>
        </div>
      </footer>
    </div>
    
  )
}

export default Datascience
