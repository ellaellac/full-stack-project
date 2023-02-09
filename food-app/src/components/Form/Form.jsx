import { useState } from "react";
import Button from "../Button/Button";

const Form = ({ handleSubmit, formTitle, defaultForm }) => {
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

  return (
    <div className="form">
      <h1>{formTitle}</h1>
      <form onSubmit={handleValidation}>
        <label htmlFor="name">Name</label>
        <input
          className="form__text"
          type="text"
          value={newMenu.name}
          onInput={(event) =>
            setNewMenu({ ...newMenu, name: event.target.value })
          }
        />
        <label htmlFor="ingredients">Ingredients</label>
        <input
          className="form__text"
          type="text"
          value={newMenu.ingredients}
          onInput={(event) =>
            setNewMenu({ ...newMenu, ingredients: event.target.value })
          }
        />
        <label htmlFor="allergens">allergens</label>
        <input
          className="form__text"
          type="text"
          placeholder="Input none if no allergens"
          value={newMenu.allergens}
          onInput={(event) =>
            setNewMenu({ ...newMenu, allergens: event.target.value })
          }
        />

        {newMenu.vegetarian ? checkboxCheckedJSX : checkbocUncheckJSX}

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

        <div type="submit">
          <Button btnTitle="Submit" />
        </div>
      </form>
    </div>
  );
};
export default Form;
