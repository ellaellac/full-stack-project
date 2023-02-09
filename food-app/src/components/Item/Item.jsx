import { useState } from "react";

const Item = ({
  name,
  ingredients,
  allergens,
  vegetarian,
  price,
  showMenuByName,
}) => {
  const menuWithNameOnlyJSX = (
    <div className="item">
      <h3 className="item__name">{name}</h3>
    </div>
  );

  const fullMenuJSX = (
    <div className="item">
      <h3 className="item__name">{name}</h3>
      <p className="item__text">Ingredients : {ingredients}</p>
      <p className="item__text">Allergens : {allergens}</p>
      <p className="item__text">
        Vegetarian Choice ? {vegetarian ? "Yes" : "No"}
      </p>
      <p className="item__price"> £ {price}</p>
    </div>
  );

  return <>{showMenuByName ? menuWithNameOnlyJSX : fullMenuJSX}</>;
};
export default Item;
