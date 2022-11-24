import PropTypes from 'prop-types';

export default function CardHeader({ image }) {
  return (
    <div className="card-header">
      <img
        width={240}
        height={180}
        className="card-image"
        src={image}
        alt="rocket"
      />
    </div>
  );
}

CardHeader.propTypes = {
  image: PropTypes.string.isRequired,
};
