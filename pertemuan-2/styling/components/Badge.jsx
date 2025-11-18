import '../src/css/Badge.css';

function Badge({ text, variant, rounded, size }) {
  const className = `badge badge-${variant} badge-${size} ${
    rounded ? 'badge-rounded' : ''
  }`;

  return <span className={className}>{text}</span>;
}

export default Badge;