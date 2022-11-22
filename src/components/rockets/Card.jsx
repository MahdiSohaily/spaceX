import CardHeader from './CardHeader';
import CardBody from './CardBody';

export default function Card() {
  return (
    <div className="card d-flex">
      <CardHeader />
      <CardBody />
    </div>
  );
}
