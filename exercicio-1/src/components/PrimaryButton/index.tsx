import { Link } from "react-router-dom";
import "./styles.scss";

type Props = {
  buttonText: string;
  buttonLinkTo: string;
  className: string;
};

export default function PrimaryButton({buttonText, buttonLinkTo, className,}: Props) {
  return (
    <div className="container primary-button-container">
      <div className="primary-button">
        <Link to={buttonLinkTo} className={className}>
          <input type="button" value={buttonText} />
        </Link>
      </div>
    </div>
  );
}
