
import Header from './components/Header';
import Home from './components/Home';

export default function Page() {
  return (
    <div>
      <Header />
      <main>
        <Home />
      </main>
      <h1 className="text-center mt-5">Welcome to My Portfolio</h1>
    </div>
  );
}
