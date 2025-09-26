import Banner from './components/Banner.js'
import Header from './components/Header.js'
import MovieSlider from './components/MovieSlider.js'

import { topRatedMovies } from './data/topRatedMovies';
import { trendingMovies } from './data/trendingMovies';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <MovieSlider title="Top Rated Movies" movies={topRatedMovies} />
      <MovieSlider title="Trending" movies={trendingMovies} />
    </>
  );
}

export default App;
