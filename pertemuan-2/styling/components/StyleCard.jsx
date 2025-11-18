import '../src/css/styleCard.css';

function StyledCard({ title, description, gradient }) {
  return (
    <div className={`styled-card gradient-${gradient}`}>
      <h3 className="styled-card-title">{title}</h3>
      <p className="styled-card-description">{description}</p>
    </div>
  );
}

export default StyledCard;