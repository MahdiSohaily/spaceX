import ActionButton from './ActionButton';

export default function CardBody() {
  return (
    <div className="card-body">
      <h1>Falcon 1</h1>
      <p className="rocket-description">
        The Falcon 1 was an expendable launch system privately developed and
        manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1
        became the first privately-developed liquid-fuel launch vehicle to go
        into orbit around the Earth.
      </p>
      <ActionButton />
    </div>
  );
}
