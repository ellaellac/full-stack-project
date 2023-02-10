import { useState } from "react";
import Button from "../Button/Button";
import "./Form.scss";

const Form = ({
  handleSubmit,
  handleDeleteMenu,
  formTitle,
  defaultForm,
  isNewMenu,
}) => {
  const [newMenu, setNewMenu] = useState(defaultForm);

  const handleValidation = (event) => {
    event.preventDefault();

    if (
      newMenu.name.length === 0 ||
      newMenu.ingredients.length === 0 ||
      newMenu.allergens.length === 0
    ) {
      alert("Please complete the form.");
    } else if (
      newMenu.name.length > 255 ||
      newMenu.ingredients.length > 255 ||
      newMenu.allergens.length > 255
    ) {
      alert("Maximum characters is 255");
    } else {
      handleSubmit(newMenu);
    }
  };

  //checkbox
  const checkboxCheckedJSX = (
    <>
      <label htmlFor="vegetarian">Vegetarian</label>
      <input
        className="form__text"
        type="checkbox"
        value={newMenu.vegetarian}
        onChange={(event) =>
          setNewMenu({
            ...newMenu,
            vegetarian: event.target.checked ? true : false,
          })
        }
        checked
      />
    </>
  );

  const checkbocUncheckJSX = (
    <>
      <label htmlFor="vegetarian">Vegetarian</label>
      <input
        className="form__text"
        type="checkbox"
        value={newMenu.vegetarian}
        onChange={(event) =>
          setNewMenu({
            ...newMenu,
            vegetarian: event.target.checked ? true : false,
          })
        }
      />
    </>
  );

  //Form with or without Delete Btn
  const formWithDelBtn = (
    <div className="form__buttons">
      <div type="submit">
        <Button className="button--secondary" btnTitle="Submit" />
      </div>
      <Button
        className="button--secondary"
        btnTitle="Delete"
        onClick={handleDeleteMenu}
      />
    </div>
  );

  const formWithoutDelBtn = (
    <div className="form__buttons">
      <div type="submit">
        <Button className="button--secondary" btnTitle="Submit" />
      </div>
    </div>
  );

  return (
    <div className="form">
      <h1 className="form__header">{formTitle}</h1>
      <form onSubmit={handleValidation}>
        <div className="form__title">
          <label htmlFor="name">Name</label>
          <input
            className="form__text"
            type="text"
            value={newMenu.name}
            onInput={(event) =>
              setNewMenu({ ...newMenu, name: event.target.value })
            }
          />
        </div>

        <div className="form__title">
          <label htmlFor="ingredients">Ingredients</label>
          <input
            className="form__text"
            type="text"
            value={newMenu.ingredients}
            onInput={(event) =>
              setNewMenu({ ...newMenu, ingredients: event.target.value })
            }
          />
        </div>

        <div className="form__title">
          <label htmlFor="allergens">Allergens</label>
          <input
            className="form__text"
            type="text"
            placeholder="Input none if no allergens"
            value={newMenu.allergens}
            onInput={(event) =>
              setNewMenu({ ...newMenu, allergens: event.target.value })
            }
          />
        </div>

        <div className="form__title">
          {newMenu.vegetarian ? checkboxCheckedJSX : checkbocUncheckJSX}
        </div>

        <div className="form__title">
          <label htmlFor="price">Price</label>
          <input
            className="form__text"
            type="number"
            value={newMenu.price}
            placeholder="max:£1000"
            step="0.01"
            min="0"
            max="1000"
            name="price"
            onInput={(event) =>
              setNewMenu({ ...newMenu, price: event.target.value })
            }
          />
        </div>

        {isNewMenu ? formWithoutDelBtn : formWithDelBtn}
      </form>
    </div>
  );
};
export default Form;
