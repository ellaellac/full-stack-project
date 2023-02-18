import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Form from "../../components/Form/Form";
import Item from "../../components/Item/Item";

const EditMenu = () => {
  const [menuById, setMenuById] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  //Get Menu by Id
  const getMenuById = async (id) => {
    const response = await fetch(`http://localhost:8080/menu/${id}`);
    const data = await response.json();
    setMenuById(data);
  };

  useEffect(() => {
    getMenuById(id);
  }, [id]);

  //Update Menu
  const handleUpdateMenu = async (updatedMenu) => {
    const result = await fetch(`http://localhost:8080/menu/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMenu),
    });

    if (result.ok) {
      alert("Menu updated");
      setMenuById(updatedMenu);
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  //Delete Menu
  const handleDeleteMenu = async () => {
    const result = await fetch(`http://localhost:8080/menu/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.ok) {
      alert("Menu deleted");
      navigate("/menu");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  return (
    <div className="edit-menu">
      <Item
        name={menuById.name}
        ingredients={menuById.ingredients}
        allergens={menuById.allergens}
        vegetarian={menuById.vegetarian}
        price={menuById.price}
      />
      {menuById && (
        <Form
          formTitle="Update Menu"
          defaultForm={menuById}
          handleSubmit={handleUpdateMenu}
          handleDeleteMenu={handleDeleteMenu}
        />
      )}
    </div>
  );
};
export default EditMenu;
