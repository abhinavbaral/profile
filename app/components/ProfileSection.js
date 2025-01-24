// components/ProfileSection.js
"use Client"
import { useEffect, useState } from 'react';
import { RiGithubFill, RiChromeFill } from 'react-icons/ri';

export default function ProfileSection() {
  const [role, setRole] = useState('Developer');


  useEffect(() => {
    const roles = ['Developer', 'Script Writer', 'Web Designer'];
    let index = 0;

    const interval = setInterval(() => {
      setRole(roles[index]);
      index = (index + 1) % roles.length;
    }, 3000);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <section className="flex items-center justify-center h-screen bg-black">
      <div className="flex items-center space-x-10 text-white">
        <div className="w-48 h-48 rounded-full overflow-hidden">
          <img src="/profile-image.jpg" alt="Profile" className="object-cover w-full h-full" />
        </div>
        
        <div className="space-y-4 max-w-xl">
          <h1 className="text-5xl font-bold">
            Hi, It’s <span className="text-red-500">Abhinav</span>
          </h1>
          <p className="text-3xl">I am a <span className="text-red-500">{role}</span></p>
          <p className="text-lg">
            I’m a web developer who loves creating intuitive and engaging websites. I enjoy turning complex challenges into sleek, functional designs. Outside of coding, I love experimenting with new tech trends and working on personal projects to keep my skills sharp.
          </p>
          <div className="flex space-x-4">
          <a href="https://github.com" className="text-2xl hover:text-red-500">
  <RiGithubFill />
</a>
<a href="https://chrome.com" className="text-2xl hover:text-red-500">
  <RiChromeFill />
</a>
          </div>
        </div>
      </div>
    </section>
  );
}
