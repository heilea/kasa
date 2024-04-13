import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { About } from "./pageComponents/about/About";
import "./App.scss";
import logo from "./assets/logo.png"
import { PrincipalPage } from './principalPage/PrincipalPage';


export const App: React.FC = () => {
  return (
    <Router>
      <header>
        <img src={logo} alt="Logo de kasa" />
        <nav>
          <NavLink to="/"
            // Conditionnement de la classe du lien selon la raçine de l'url.
            className={({ isActive }) => isActive ? "active-link" : ""} >
            Accueil</NavLink>

          <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""} >À Propos</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path='/' element={<PrincipalPage />} />
        <Route path="card/:id" element={<About/>} />
        


      </Routes>
      <footer>
        <img src={logo} alt="logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </Router>
  )
}

