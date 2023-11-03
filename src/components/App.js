import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Index';
import Survey from '../pages/survey/Survey';
import Header from './Header';
import Freelances from '../pages/Freelances';
import Results from '../pages/Results';
import Error from './Error';
import Footer from './Footer';
import PdfViewer from '../pages/PdfViewer';
import { AppProvider } from '../utils/context/index';
import GlobalStyle from '../utils/style';

import Dashboard from '../pages/Dashboard';
import UserHome from './Dashboard/Home';
import CreateInsurance from './Dashboard/CreateInsurance';
import GetInsurances from './Dashboard/GetInsurances';
import CreateUser from './Dashboard/CreateUser';
import Settings from './Dashboard/Parameters';

function App() {
  return (
    <Router>
      <AppProvider>
        <GlobalStyle />

        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/freelances' element={<Freelances />} />
          <Route path='/pfdviewer' element={<PdfViewer />} />
          <Route path='/survey/:questionNumber' element={<Survey />} />
          <Route path='/results' element={<Results />} />
          <Route path='/dashboard' element={<Dashboard />} >
            <Route index element={<UserHome />} />
            <Route path='Home' element={<UserHome />} />
            <Route path='create_insurance' element={<CreateInsurance />} />
            <Route path='get_insurance' element={<GetInsurances />} />
            <Route path='create_user' element={<CreateUser />} />
            <Route path='settings' element={<Settings />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>

        <Footer />
      </AppProvider>
    </Router>
  );
}

export default App;
