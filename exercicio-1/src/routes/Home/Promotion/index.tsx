import { Link } from "react-router-dom";
import Card from "../../../components/Card";
import PrimaryButton from "../../../components/PrimaryButton";
import "./styles.scss";

export default function Promotion() {
  return (
    <main className="promotion">
      <section className="promotion-card">
        <Card placeholderName="Página de promoção" />
      </section>
      <section className="promotion-button">
        <Link to="/subscription" className="promotion-button-link">
          <PrimaryButton buttonText="Quero participar" />
        </Link>
      </section>
    </main>
  );
}
