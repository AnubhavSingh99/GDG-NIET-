import React from "react";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import { useState } from "react";
import Footer2 from "@/components/footer";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const TeamPage = () => {
  const teamMembers = [
  {
    name: "Vanshika Pandey",
    role: "GDG Lead",
    image: "23.png",
    linkedin: "https://www.linkedin.com/in/vanshika-pandey369/",
    github: <FaGithub />,
    insta: "https://instagram.com/mohit"
  },
  {
    name: "Ankit Raj",
    role: "GDG Co-Lead",
    image: "17.png",
    linkedin: "https://www.linkedin.com/in/ankitrpathak/",
    github: <FaGithub />,
    insta: "https://instagram.com/arjun"
  },
  {
    name: "Toshak Bhat",
    role: "GDG Co-Lead",
    image: "3.png",
    linkedin: "https://www.linkedin.com/in/toshakbhat",
    github: <FaGithub />,
    insta: "https://instagram.com/neha"
  },
  {
    name: "Pihu Gupta",
    role: "Director Of Operations",
    image: "10.png",
    linkedin: "https://www.linkedin.com/in/pihu-gupta-750435280",
    github: <FaGithub />,
    insta: "https://instagram.com/siddharth"
  },
  {
    name: "Rishi Ranjan",
    role: "Technical Lead",
    image: "8.png",
    linkedin: "linkedin.com/in/rishi-rih",
    github: <FaGithub />,
    insta: "https://instagram.com/karan"
  },
  {
    name: "Vivek Tripathi",
    role: "Technical Co-lead",
    image: "1.png",
    linkedin: "https://www.linkedin.com/in/vivek-tripathi-319677249",
    github: <FaGithub />,
    insta: "https://instagram.com/anusha"
  },
  {
    name: "Dev Goyal",
    role: "Social Media Head",
    image: "15.png",
    linkedin: "https://www.linkedin.com/in/devgoyalg/",
    github: <FaGithub />,
    insta: "https://instagram.com/rohan"
  },
  {
    name: "Vaishnavi Sharma",
    role: "Design Head",
    image: "2.png",
    linkedin: "https://www.linkedin.com/in/vaishnavish05",
    github: <FaGithub />,
    insta: "https://instagram.com/rajesh"
  },
  {
    name: "Arshia Talwar",
    role: "Design Head",
    image: "16.png",
    linkedin: "https://www.linkedin.com/in/arshia-talwar-151a9a258",
    github: <FaGithub />,
    insta: "https://instagram.com/ishita"
  },
  {
    name: "Amit Kumar Mishra",
    role: "Technical Team",
    image: "18.png",
    linkedin: "https://www.linkedin.com/in/amit-mishra-330aa2251/",
    github: <FaGithub />,
    insta: "https://instagram.com/sanya"
  },
  {
    name: "Anubhav Singh",
    role: "Technical Team",
    image: "14.png",
    linkedin: "https://www.linkedin.com/in/anubhav-singh99/",
    github: <FaGithub />,
    insta: "https://instagram.com/shruti"
  },
  {
    name: "Dhruv Gupta",
    role: "Technical Team",
    image: "13.png",
    linkedin: "https://www.linkedin.com/in/dhruv-gupta-16g",
    github: <FaGithub />,
    insta: "https://instagram.com/nikhil"
  },
  {
    name: "Sarvesh Mishra",
    role: "Technical Team",
    image: "7.png",
    linkedin: "https://www.linkedin.com/in/sarveshji/",
    github: <FaGithub />,
    insta: "https://instagram.com/riya"
  },
  {
    name: "Suryansh Gupta",
    role: "Technical Team",
    image: "5.png",
    linkedin: "www.linkedin.com/in/suryanshgupta483",
    github: <FaGithub />,
    insta: "https://instagram.com/priya"
  },
  {
    name: "Tarun Gupta",
    role: "Technical Team",
    image: "4.png",
    linkedin: "https://www.linkedin.com/in/tarun-gupta-44888b250",
    github: <FaGithub />,
    insta: "https://instagram.com/vikas"
  },
  {
    name: "Abhinav Maurya",
    role: "Design Team",
    image: "24.png",
    linkedin: "https://www.linkedin.com/in/abhinav-maurya-356136315",
    github: <FaGithub />,
    insta: "https://instagram.com/aarav"
  },
  {
    name: "Ansh Pratap",
    role: "Design Team",
    image: "22.png",
    linkedin: "https://www.linkedin.com/in/ansh-pratap-93083133b",
    github: <FaGithub />,
    insta: "https://instagram.com/sneha"
  },
  {
    name: "Kapil Singh",
    role: "Design Team",
    image: "12.png",
    linkedin: "https://www.linkedin.com/in/kapil-singh-8a6574203",
    github: <FaGithub />,
    insta: "https://instagram.com/pooja"
  },
  {
    name: "Manasvi Goel",
    role: "Design Team",
    image: "11.png",
    linkedin: "www.linkedin.com/in/manasvigl",
    github: <FaGithub />,
    insta: "https://instagram.com/alok"
  },
  {
    name: "Aman Bajpai",
    role: "Event Management",
    image: "20.png",
    linkedin: "https://www.linkedin.com/in/aman-bajpai-651a87266",
    github: <FaGithub />,
    insta: "https://instagram.com/kanika"
  },
  {
    name: "Aman Sahi",
    role: "Event Management",
    image: "19.png",
    linkedin: "https://www.linkedin.com/in/aman-sahi-19a106285/",
    github: <FaGithub />,
    insta: "https://instagram.com/raghav"
  },
  {
    name: "Aditya Kumar Jha",
    role: "Event Management",
    image: "21.png",
    linkedin: "https://in.linkedin.com/in/adityajha12",
    github: <FaGithub />,
    insta: "https://instagram.com/harshdeep"
  },
  {
    name: "Mansi Pandey",
    role: "Event Management",
    image: "9.png",
    linkedin: "https://in.linkedin.com/in/mansi-pandey-50766526b/",
    github: <FaGithub />,
    insta: "https://instagram.com/meera"
  }
];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[url('/team-bg.png')] bg-cover bg-center flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 m-10 text-center">
          Meet the Dream Team Behind the Magic!
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8 px-4 md:px-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className={`relative bg-green-500 bg-opacity-0 rounded-lg p-10 flex flex-col items-center overflow-hidden shadow-md transition-all duration-300 ease-in-out transform ${
                hoveredIndex === index ? "bg-opacity-100" : ""
              }`}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5, delay: index * 0.1 },
              }}
            >
              <motion.img
                src={`/images/${member.image}`}
                alt={member.name}
                className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full mb-3 transition-all duration-300 ${
                  hoveredIndex === index ? "rounded-lg scale-110" : ""
                }`}
              />
              <motion.h3 className="text-lg md:text-xl font-bold text-gray-800 text-center">
                {member.name}
              </motion.h3>
              <motion.p className="text-sm md:text-md text-gray-600 text-center mb-4">
                {member.role}
              </motion.p>
              <div className="flex space-x-4 mt-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CiLinkedin className="w-7 h-7 text-blue-600 hover:text-white transition" />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-7 h-7 text-black hover:text-gray-600 transition" />
                </a>
                <a
                  href={member.insta}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="w-7 h-7 text-red-500 hover:text-white transition" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default TeamPage;
