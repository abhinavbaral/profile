// app/layout.js
import './globals.css';


export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="font-poppins bg-black text-white">
        <header className="mt-5 fixed top-0 left-0 w-full px-[9%] py-4 bg-transparent shadow-md flex justify-between items-center z-50">
         
        </header>
        {children}
      </body>
    </html>
  );
}
