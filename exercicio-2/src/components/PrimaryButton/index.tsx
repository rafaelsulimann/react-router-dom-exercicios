import { Link } from "react-router-dom";
import './styles.scss';

type Props = {
  buttonText: string;
  buttonLinkTo: string;
  buttonClassName: string;
};

export default function PrimaryButton({
  buttonText,
  buttonLinkTo,
  buttonClassName,
}: Props) {
  return (
    <div className="container primary-button-container">
      <div className="primary-button">
        <Link to={buttonLinkTo} className={buttonClassName}>
          <input type="button" value={buttonText} />
        </Link>
      </div>
    </div>
  );
}
