import './App.css';
import Footer from './Routes/Footer';
import NavBar from './Routes/NavBar';
import Content from './Routes/Content';
import Experience from './Routes/Experience';
import Skills from './Routes/Skills'
import Projects from './Routes/Projects'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  const NotFound = () => {
    return (
      <div>
        <h1>404 - Page not found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    );
  };
  return (
    <BrowserRouter>
    <div className=''>
      <NavBar/>
        <Routes>
          <Route path='/InteractiveResume/' element={<Content/>} />
          <Route path='/InteractiveResume/Experience' element={<Experience/>} />
          <Route path='/InteractiveResume/Skills' element={<Skills/>} />
          <Route path='/InteractiveResume/Projects' element={<Projects/>} />
          <Route path='*' element={<Navigate to='/InteractiveResume/'/>} />
        </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}
export default App;
