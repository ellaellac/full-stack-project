import { useEffect, useState } from "react";
import Item from "../../components/Item/Item";
import Button from "../../components/Button/Button";

const UpdateMenu = () => {
  const [menu, setMenu] = useState([]);

  //show Form
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
      <h1>Update Menu</h1>
      {menu &&
        menu.map((item) => (
          <div id={item.id}>
            <Item key={item.id} name={item.name} showMenuByName={true} />
            <Button btnTitle="Edit" onClick={directToUpdateForm} />
          </div>
        ))}
    </div>
  );
};
export default UpdateMenu;
