// components/SocialIcons.js
export default function SocialIcons() {
    return (
      <div className="flex justify-center md:justify-start mt-6 space-x-4">
        <a
          href="https://github.com/abhinavbaral"
          className="w-10 h-10 flex justify-center items-center border-2 border-red-500 rounded-full text-red-500 hover:bg-red-500 hover:text-black transition-transform transform hover:scale-110"
        >
          <i className="ri-github-fill text-2xl"></i>
        </a>
        <a
          href="https://abhinavbaral.vercel.app/"
          className="w-10 h-10 flex justify-center items-center border-2 border-red-500 rounded-full text-red-500 hover:bg-red-500 hover:text-black transition-transform transform hover:scale-110"
        >
          <i className="ri-chrome-fill text-2xl"></i>
        </a>
      </div>
    );
  }
  