import { useEffect, useState } from "react";
import Item from "../../components/Item/Item";
// import Button from "../../components/Button/Button";
import "./UpdateMenu.scss";

const UpdateMenu = () => {
  const [menu, setMenu] = useState([]);

  //show Form : direct to page for editing/deleting
  const directToUpdateForm = (event) => {
    window.location.href = `http://localhost:3000/menu/update/${event.target.parentElement.id}`;
  };

  //Get All Menu By Name
  const getMenu = async () => {
    const response = await fetch("http://localhost:8080/menu");
    const data = await response.json();
    setMenu(data);
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div className="update-menu">
      <h1 className="update-menu__header">Update Menu</h1>
      {menu &&
        menu.map((item) => (
          <div>
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              showMenuByName={true}
              directToUpdateForm={directToUpdateForm}
            />
          </div>
        ))}
    </div>
  );
};
export default UpdateMenu;
