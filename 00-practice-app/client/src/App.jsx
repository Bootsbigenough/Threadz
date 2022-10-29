import Navbar from './components/sections/Navbar/Navbar';
import Footer from "./components/sections/Footer/Footer";
import Banner from './components/sections/Banner/Banner';

function App() {
  return (
    <main className="min-h-screen relative bg-gray-50 pb-10">
      <Banner/>
      <div className="container px-4">
        <div className="flex justify-center flex-wrap px-4">
          <div className="w-full lg:w-2/3 ">
            <Navbar />
          </div>
        </div>
      </div>
      <Footer />
    </main>

  );
}

export default App;
