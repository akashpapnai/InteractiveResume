import { useLocation } from "react-router-dom";

export default function NavBar() {
  const isHome = useLocation().pathname === '/InteractiveResume/';
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand no-select">Resume</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link ${isHome ? 'active':''}`} aria-current="page" href="/InteractiveResume/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://akashpapnai.github.io/" target='_blank'>Other Site</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About My
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item dropdown-trans-menu" href="/InteractiveResume/#/Experience">Experience</a></li>
                <li><a className="dropdown-item dropdown-trans-menu" href="/InteractiveResume/#/Skills">Skills</a></li>
                <li><a className="dropdown-item dropdown-trans-menu" href="/InteractiveResume/#/Projects">Projects</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item dropdown-trans-menu" href="/#">Contact Information</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">This site is in Development phase</a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}