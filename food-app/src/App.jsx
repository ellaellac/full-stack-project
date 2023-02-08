import "./App.scss";
import Nav from "./components/Nav/Nav";
import Home from "./containers/Home/Home";
import ViewMenu from "./containers/ViewMenu/ViewMenu";
import CreateMenu from "./containers/CreateMenu/CreateMenu";
import UpdateMenu from "./containers/UpdateMenu/UpdateMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<ViewMenu />} />
        <Route path="/menu/create" element={<CreateMenu />} />
        <Route path="/menu/update" element={<UpdateMenu />} />
      </Routes>
    </Router>
  );
};

export default App;
