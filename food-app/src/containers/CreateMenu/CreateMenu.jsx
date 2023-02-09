import Form from "../../components/Form/Form";
import { useNavigate } from "react-router-dom";

const CreateMenu = () => {
  const navigate = useNavigate();

  const handleSubmit = async (newMenu) => {
    const result = await fetch("http://localhost:8080/menu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMenu),
    });

    if (result.ok) {
      alert("New Menu added");
      navigate("/menu");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const defaultForm = {
    name: "",
    ingredients: "",
    allergens: "",
    vegetarian: false,
    price: 0,
  };

  return (
    <div className="create-menu">
      <Form
        handleSubmit={handleSubmit}
        formTitle="New Menu"
        defaultForm={defaultForm}
      />
    </div>
  );
};
export default CreateMenu;
