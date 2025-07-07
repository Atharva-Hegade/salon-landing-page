import Hero from './components/Hero';
import Services from './components/Services';
import Branches from './components/Branches';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';


function App() {
  return (
    <div className="font-sans text-gray-800">
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Branches />  
      <Contact />
      <Footer />
 
    </div>
  );
}

export default App;
