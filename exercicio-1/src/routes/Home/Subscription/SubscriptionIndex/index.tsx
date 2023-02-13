import { Link } from "react-router-dom";
import Card from "../../../../components/Card";
import PrimaryButton from "../../../../components/PrimaryButton";
import "./styles.scss";

export default function SubscriptionIndex() {
  return (
    <main className="subscription">
      <section className="subscription-card">
        <Card placeholderName="Página de inscrição" />
      </section>
      <section className="subscription-button">
        <PrimaryButton
          buttonText="Inscrever-se"
          buttonLinkTo="/subscription/confirmation"
          className="subscription-button-link"
        />
      </section>
    </main>
  );
}
