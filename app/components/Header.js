// components/Header.js
import Logo from './Logo';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-black text-white">
      <Logo />
      <nav className="flex space-x-6">
        <a href="#" className="hover:text-red-500">Home</a>
        <a href="#" className="hover:text-red-500">About</a>
        <a href="#" className="hover:text-red-500">Contact</a>
      </nav>
    </header>
  );
}
