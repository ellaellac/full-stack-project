import { useEffect, useState } from "react";
import Item from "../../components/Item/Item";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  // const [vegetarian, setVegetarian] = useState(false);

  const getMenu = async () => {
    const response = await fetch("http://localhost:8080/menu");
    const data = await response.json();
    console.log(data);
    setMenu(data);
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div className="view-menu">
      <h1>All Menu</h1>
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
