import { Link, NavLink } from "react-router-dom";
import './styles.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <nav className="header-nav">
          <div className="header-nav-title">
            <Link to="/" className="header-nav-title-link">
              <h1>MeuSite</h1>
            </Link>
          </div>
          <div className="header-nav-routes">
            <NavLink to="/home" className={({isActive}) => (isActive ? "header-nav-routes-link active" : "header-nav-routes-link non-active")}>
                Inicio
            </NavLink>
            <NavLink to="/promotion" className={({isActive}) => (isActive ? "header-nav-routes-link active" : "header-nav-routes-link non-active")}>
                Promoção
            </NavLink>
            <NavLink to="/subscription" className={({isActive}) => (isActive ? "header-nav-routes-link active" : "header-nav-routes-link non-active")}>
                Participar
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
