const Button = ({ color, onClick }) => {
  return (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      New Quote
    </button>
  );
};
export default Button;
