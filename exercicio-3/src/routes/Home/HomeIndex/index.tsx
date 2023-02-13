import Card from "../../../components/Card";
import PrimaryButton from "../../../components/PrimaryButton";
import './styles.scss';

export default function HomeIndex() {
    return(
        <main className="home-index">
            <section className="home-index-card">
                <Card placeholderName="Página inicial"/>
            </section>
            <section className="home-index-button">
                <PrimaryButton buttonText="Ver promoção" buttonLinkTo="/promotion" buttonClassName="home-index-button-link"/>
            </section>
        </main>
    );
}