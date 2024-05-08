import "./App.scss";
import logo from "./assets/logo.png"
import { About } from "./pageComponents/about/About";
import { PrincipalPage } from './pageComponents/principalPage/PrincipalPage';
import { CardsPage } from './pageComponents/cardsPage/CardsPage';
import { Error404 } from "./pageComponents/error404/Error404";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    //Utilisation de Browser Router de React router dom
    <Router>
      <header>
        <img src={logo} alt="Logo de kasa" />
        <nav>
          <NavLink to="/"
            // Conditionnement de la classe du lien selon la raçine de l'url.
            // Utilisation du Navlink de react-router-dom pour faire la redirection
            className={({ isActive }) => isActive ? "active-link" : ""} >
            Accueil</NavLink>

          <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""} >À Propos</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path='/' element={<PrincipalPage />} />
        <Route path='card/:id' element={<CardsPage />} />
        <Route path="/error404" element={<Error404 />} />
        <Route path="*" element={<Error404/>} />
        
      </Routes>
      <footer>
        <img src={logo} alt="logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </Router>
  )
}

