import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './utils/PrivateRoute';

import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';

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
    <AuthProvider>
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
          <Route path="/auth" element={<AuthPage />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
