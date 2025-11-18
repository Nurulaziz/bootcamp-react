import '../src/css/Button.css';


function Button({ children, variant, size, fullWidth, disabled, onClick }) {
  const className = `btn btn-${variant} btn-${size} ${
    fullWidth ? 'btn-full' : ''
  }`;

  function handleClick() {
    alert('Button clicked!');
  }

  function alertWarning() {
    alert('This button is disabled!');
  }

  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;