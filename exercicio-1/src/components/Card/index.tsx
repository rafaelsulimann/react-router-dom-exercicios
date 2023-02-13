import './styles.scss';

type Props = {
  placeholderName: string;
};

export default function Card({ placeholderName }: Props) {
  return (
    <div className="container card-container">
      <div className="card">
        <textarea placeholder={placeholderName}></textarea>
      </div>
    </div>
  );
}
