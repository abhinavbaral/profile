import React from "react";
import SocialIcons from "./SocialIcons";
import TypingText from "./TypingText";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-16 bg-black text-white px-8 py-20 lg:px-16">
      <div className="rounded-full overflow-hidden w-64 h-64 lg:w-80 lg:h-80 shadow-lg">
        <img
          src="main.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center lg:text-left">
        <h1 className="text-5xl lg:text-6xl font-bold leading-snug">
          Hi, It's <span className="text-red-600">Abhinav</span>
        </h1>
        <TypingText />
        <p className="text-lg lg:text-xl mt-4">
          I’m a web developer who loves creating intuitive and engaging
          websites. I enjoy turning complex challenges into sleek, functional
          designs. Outside of coding, I love experimenting with new tech trends
          and working on personal projects to keep my skills sharp.
        </p>
        <SocialIcons />
      </div>
    </section>
  );
};

export default Home;
