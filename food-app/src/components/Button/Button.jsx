import "./Button.scss";

const Button = ({ btnTitle, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {btnTitle}
    </button>
  );
};
export default Button;
