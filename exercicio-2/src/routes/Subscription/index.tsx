import Card from "../../components/Card";
import PrimaryButton from "../../components/PrimaryButton";
import './styles.scss';

export default function Subscription() {
    return (
        <main className="subscription">
            <div className="container subscription-container">
                <div className="subscription-title">
                    <h1>Faça sua inscrição</h1>
                </div>
                <div className="subscription-card">
                    <Card placeholderName="Página de inscrição"/>
                </div>
                <div className="subscription-button">
                    <PrimaryButton buttonText="Ver promoção" buttonLinkTo="/promotion" buttonClassName="subscription-button-link"/>
                </div>
            </div>
        </main>
    );
}