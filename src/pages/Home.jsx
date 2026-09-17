import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <main>
        <h1>Movie Explorer</h1>

        <p>Discover movies and TV shows you love.</p>

        <Link to="/movies" className="hero-button">
          Explore Movies
        </Link>
      </main>

      <Footer />
    </>
  );
}

export default Home;
