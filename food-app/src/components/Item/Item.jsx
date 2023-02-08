const Item = ({ name, ingredients, allergens, isVegetarian, price }) => {
  return (
    <div className="item">
      <h3 className="item__name">{name}</h3>
      <p className="item__text">{ingredients}</p>
      <p className="item__text">{allergens}</p>
      <p className="item__text">{isVegetarian}</p>
      <p className="item__price">{price}</p>
    </div>
  );
};
export default Item;
