import './styles.scss';

type Props = {
    buttonText : string;
}

export default function PrimaryButton({buttonText}: Props){
    return(
        <div className="container primary-button-container">
            <div className="primary-button">
                <input type="button" value={buttonText}/>
            </div>
        </div>
    );
}