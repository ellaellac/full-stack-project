import "./Logo.scss";
const Logo = ({ src, alt, text }) => {
  return (
    <div className="logo">
      <img className="logo__img" src={src} alt={alt} />
      <p className="logo__text">{text}</p>
    </div>
  );
};

export default Logo;
