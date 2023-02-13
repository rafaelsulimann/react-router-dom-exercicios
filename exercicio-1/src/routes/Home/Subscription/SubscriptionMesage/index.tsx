import { Link } from "react-router-dom";
import PrimaryButton from "../../../../components/PrimaryButton";
import './styles.scss';

export default function SubscriptionMessage() {
  return (
    <main className="subscription-message">
      <section className="subscription-message-text">
        <h2>Obrigado por se inscrever!</h2>
      </section>
      <section className="subscription-message-button">
        <Link to="/" className="subscription-message-button-link">
          <PrimaryButton buttonText="Início" />
        </Link>
      </section>
    </main>
  );
}
