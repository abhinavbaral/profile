"use client";
import { RiGithubFill, RiChromeFill } from "react-icons/ri";
import { useRef } from "react";

export default function ProfileSection() {
  const roles = ["Developer", "Script Writer", "Web Designer"];
  const roleRef = useRef(null);

  // Logic to switch roles
  const handleRoleSwitching = () => {
    let index = 0;

    setInterval(() => {
      if (roleRef.current) {
        roleRef.current.textContent = roles[index];
        index = (index + 1) % roles.length;
      }
    }, 1000);
  };

  return (
    <section
      className="flex items-center justify-center h-screen bg-black"
      ref={handleRoleSwitching}
    >
      <div className="flex items-center space-x-10 text-white">
        {/* Profile Image */}
        <div className="relative rounded-full shadow-[0_0_25px_5px] shadow-red-500 cursor-pointer transition-all duration-200">
          <img
            src="main.jpg"
            alt="Profile"
            className="object-cover w-[32vw]  hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="space-y-4 max-w-xl">
          <h1 className="text-5xl font-bold">
            Hi, It’s <span className="text-red-500">Abhinav</span>
          </h1>
          <p className="text-3xl">
            I am a <span ref={roleRef} className="text-red-500">Developer</span>
          </p>
          <p className="text-lg">
            I’m a web developer who loves creating intuitive and engaging
            websites. I enjoy turning complex challenges into sleek, functional
            designs. Outside of coding, I love experimenting with new tech
            trends and working on personal projects to keep my skills sharp.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com"
              className="text-2xl hover:text-red-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiGithubFill />
            </a>
            <a
              href="https://chrome.com"
              className="text-2xl hover:text-red-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiChromeFill />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
