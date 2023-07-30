import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Index';
import Survey from '../pages/survey/Survey';
import Header from './Header';
import Freelances from '../pages/Freelances';
import Results from '../pages/Results';
import Error from './Error';
import Footer from './Footer';
import { ThemeProvider } from '../utils/context/index';
import GlobalStyle from '../utils/style';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <GlobalStyle />

        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/survey/:questionNumber' element={<Survey />} />
          <Route path='/freelances' element={<Freelances />} />
          <Route path='/results' element={<Results />} />
          <Route path='*' element={<Error />} />
        </Routes>

        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
