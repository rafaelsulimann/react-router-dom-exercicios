import Card from "../../../components/Card";
import PrimaryButton from "../../../components/PrimaryButton";
import './styles.scss';

export default function Subscription() {
    return(
        <main className="subscription">
            <section className="subscription-card">
                <Card placeholderName="Página de inscrição"/>
            </section>
            <section className="subscription-button">
                <PrimaryButton buttonText="Ver promoção" buttonLinkTo="/promotion" buttonClassName="subscription-button-link"/>
            </section>
        </main>
    );
}