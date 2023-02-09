import { useEffect, useState } from "react";
import Item from "../../components/Item/Item";
import Button from "../../components/Button/Button";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [vegetarian, setVegetarian] = useState(false);

  const toogleVegetarianOption = () => {
    setVegetarian(!vegetarian);
  };

  //All Menu
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

  return (
    <div className="view-menu">
      <h1>All Menu</h1>
      <Button btnTitle="vegetarian" onClick={toogleVegetarianOption} />
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
