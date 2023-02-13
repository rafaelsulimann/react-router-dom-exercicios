import { Link } from "react-router-dom";
import PrimaryButton from "../../../../components/PrimaryButton";
import "./styles.scss";

export default function SubscriptionMessage() {
  return (
    <main className="subscription-message">
      <section className="subscription-message-text">
        <div className="container subscription-message-text-container">
          <h2>Obrigado por se inscrever!</h2>
        </div>
      </section>
      <section className="subscription-message-button">
        <PrimaryButton
          buttonText="Início"
          buttonLinkTo="/"
          className="subscription-message-button-link"
        />
      </section>
    </main>
  );
}
