import './App.css';
import Footer from './Routes/Footer';
import NavBar from './Routes/NavBar';
import Content from './Routes/Content';
import Experience from './Routes/Experience';
import Skills from './Routes/Skills'
import Projects from './Routes/Projects'
import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom';

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
    <HashRouter>
    <div className=''>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Content/>} />
          <Route path='/Experience' element={<Experience/> } />
          <Route path='/Skills' element={<Skills/>} />
          <Route path='/Projects' element={<Projects/>} />
          <Route path='*' element={<Navigate to='/'/>} />
        </Routes>
      <Footer />
    </div>
    </HashRouter>
  );
}
export default App;
