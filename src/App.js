import Banner from './components/Banner.js'
import Header from './components/Header.js'
import MovieSlider from './components/MovieSlider.js'
import Footer from './components/Footer.js'
import topRatedMovies from './data/topRatedMovies.json'
import trendingMovies from './data/trendingMovies.json'
import bannerMovies from './data/banners.json'

function App() {
  return (
    <>
      <Header />
      <Banner banners={ bannerMovies } />
      <MovieSlider title="Top Rated Movies" movies={topRatedMovies} />
      <MovieSlider title="Trending" movies={trendingMovies} />
      <Footer />
    </>
  );
}

export default App;
