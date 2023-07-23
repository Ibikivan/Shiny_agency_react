import '../style/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Index';
import Survey from '../pages/survey/Survey';
import Header from './Header';
import ClientForm from './ClientForm';
import FreelanceForm from './FreelanceForm';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/Survey' element={<Survey />}>
          <Route path='client' element={<ClientForm />} />
          <Route path='freelance' element={<FreelanceForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
