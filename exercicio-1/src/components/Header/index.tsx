import { Link } from "react-router-dom";
import "./styles.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <nav className="header-nav">
          <Link to="/" className="header-nav-link">
            <h1>MeuSite</h1>
          </Link>
        </nav>
      </div>
    </header>
  );
}
