import { Link } from "react-router-dom";
import Card from "../../../components/Card";
import PrimaryButton from "../../../components/PrimaryButton";
import "./styles.scss";

export default function HomeIndex() {
  return (
    <main className="home-index">
      <section className="home-index-card">
        <Card placeholderName="Página inicial" />
      </section>
      <section className="home-index-button">
        <Link to="/promotion" className="home-index-button-link">
          <PrimaryButton buttonText="Ver promoção" />
        </Link>
      </section>
    </main>
  );
}
