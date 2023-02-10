import { useEffect, useState } from "react";
import Item from "../../components/Item/Item";
import Button from "../../components/Button/Button";
import "./ViewMenu.scss";
const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [vegetarian, setVegetarian] = useState(false);

  const toogleVegetarianOption = () => {
    setVegetarian(!vegetarian);
  };

  const getMenu = async (vegetarian) => {
    let url = "http://localhost:8080/menu";
    if (vegetarian) {
      url += `/vegetarian`;
    }
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setMenu(data);
  };

  useEffect(() => {
    getMenu(vegetarian);
  }, [vegetarian]);

  //vegetarian button style
  const vegetarianBtnOnActive = (
    <Button
      className="button--active"
      btnTitle="Vegetarian"
      onClick={toogleVegetarianOption}
    />
  );

  const vegetarianBtnInactive = (
    <Button
      className="button--secondary"
      btnTitle="Vegetarian"
      onClick={toogleVegetarianOption}
    />
  );

  return (
    <div className="view-menu">
      <div className="view-menu__header">
        <h1 className="view-menu__title">All Menu</h1>
        {vegetarian ? vegetarianBtnOnActive : vegetarianBtnInactive}
      </div>
      {menu &&
        menu.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            ingredients={item.ingredients}
            allergens={item.allergens}
            vegetarian={item.vegetarian}
            price={item.price}
          />
        ))}
    </div>
  );
};

export default Menu;
