import "./Item.scss";
import Button from "../Button/Button";

const Item = ({
  name,
  id,
  ingredients,
  allergens,
  vegetarian,
  price,
  showMenuByName,
  directToUpdateForm,
}) => {
  //Update Menu Page : show menu with name and edit button
  const menuWithNameOnlyJSX = (
    <div className="item" id={id}>
      <h3 className="item__name">{name}</h3>
      <Button
        className="button--secondary"
        btnTitle="Edit"
        onClick={directToUpdateForm}
      />
    </div>
  );

  //view menu: show all menu
  const fullMenuJSX = (
    <div className="item" id={id}>
      <h3 className="item__name">{name}</h3>
      <p className="item__text">Ingredients : {ingredients}</p>
      <p className="item__text">Allergens : {allergens}</p>
      <p className="item__text">
        Vegetarian Choice ? {vegetarian ? "Yes" : "No"}
      </p>
      <p className="item__text"> £ {price}</p>
    </div>
  );

  return <>{showMenuByName ? menuWithNameOnlyJSX : fullMenuJSX}</>;
};
export default Item;
