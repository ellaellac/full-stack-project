const Item = ({ name, ingredients, allergens, vegetarian, price }) => {
  return (
    <div className="item">
      <h3 className="item__name">{name}</h3>
      <p className="item__text">Ingredients : {ingredients}</p>
      <p className="item__text">Allergens :{allergens}</p>
      <p className="item__text">
        Vegetarian Choice ? {vegetarian ? "Yes" : "No"}
      </p>
      <p className="item__price">{price}</p>
    </div>
  );
};
export default Item;
