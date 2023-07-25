import '../style/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Index';
import Survey from '../pages/survey/Survey';
import Header from './Header';
import Freelances from '../pages/Freelances';
import Results from '../pages/Results';
import Error from './Error';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/survey/:questionNumber' element={<Survey />} />
        <Route path='/freelances' element={<Freelances />} />
        <Route path='/results' element={<Results />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
