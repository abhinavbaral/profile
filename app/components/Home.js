// components/Home.js
import SocialIcons from './SocialIcons';
import TypingText from './TypingText';

export default function HomeSection() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-8 px-6 py-12">
      <div className="rounded-full overflow-hidden w-48 h-48 md:w-64 md:h-64 shadow-lg">
        <img
          src="/main.jpg"
          alt="Abhinav's Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, It's <span className="text-red-500">Abhinav</span>
        </h1>
       
        <p className="text-lg md:text-xl mt-4">
          I’m a web developer who loves creating intuitive and engaging websites.
          I enjoy turning complex challenges into sleek, functional designs.
          Outside of coding, I love experimenting with new tech trends and
          working on personal projects to keep my skills sharp.
        </p>
        <SocialIcons />
      </div>
    </section>
  );
}
