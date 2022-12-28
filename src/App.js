import './App.css';
import HomePage from './pages/HomePage';
import ScrollToTop from 'react-scroll-to-top';
import Header from './components/Header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HearItPage from './pages/HearItPage';
import SeeItPage from './pages/SeeItPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <ScrollToTop smooth color="#bf5700"/>
      <body>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/hearit' element={<HearItPage />} />
            <Route path='/seeit' element={<SeeItPage />} />
          </Routes>
          <Footer />
        </div>
      </body>
    </Router>
    </>
  );
}

export default App;
