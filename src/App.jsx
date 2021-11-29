import { Router, Route, Routes } from "solid-app-router";
import Header from "./components/header/index";
import Principal from "./views/principal/index";
import Basics from "./views/basics/index";
import BuildIn from "./views/buildIn/index";

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Principal/>}/>
        <Route path="/lo-mas-basico" element={<Basics/>}/>
        <Route path="/uso-de-objetos-integrados" element={<BuildIn/>}/>
      </Routes>
    </Router>
  );
}

export default App;
