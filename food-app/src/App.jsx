import "./App.scss";
import Nav from "./components/Nav/Nav";
import Home from "./containers/Home/Home";
import ViewMenu from "./containers/ViewMenu/ViewMenu";
import CreateMenu from "./containers/CreateMenu/CreateMenu";
import UpdateMenu from "./containers/UpdateMenu/UpdateMenu";
import EditMenu from "./EditMenu/EditMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<ViewMenu />} />
        <Route path="/menu/create" element={<CreateMenu />} />
        <Route path="/menu/update" element={<UpdateMenu />} />
        <Route path="/menu/update/:id" element={<EditMenu />} />
      </Routes>
      <Nav />
    </Router>
  );
};

export default App;
