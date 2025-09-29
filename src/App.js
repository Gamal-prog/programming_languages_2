import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner.js'
import Header from './components/Header.js'
import MovieSlider from './components/MovieSlider.js'
import Footer from './components/Footer.js'
import MovieDetail from './components/MovieDetail';

import topRatedMovies from './data/topRatedMovies.json'
import trendingMovies from './data/trendingMovies.json'
import bannerMovies from './data/banners.json'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Banner banners={ bannerMovies } />
            <MovieSlider title="Top Rated Movies" movies={topRatedMovies} />
            <MovieSlider title="Trending" movies={trendingMovies} />
          </>
        } />

        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
