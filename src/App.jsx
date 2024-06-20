import "./App.css";

import Navbar from "./Componentes/NavBar/Navbar.jsx";
import Center from "./Componentes/center/Center.jsx";
import { ProductProvider } from './modules/main.jsx';


function App() {
  return (
    <ProductProvider>
      <div className="app">
        <div className="container">

          <Navbar />
          <Center/>
        </div>
      </div>
    </ ProductProvider>
  );
}

export default App;
