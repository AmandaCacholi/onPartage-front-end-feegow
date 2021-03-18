import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Cadastro } from "./components/Cadastro/Cadastro";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import CostumersPage from "./components/CostumersPage/CostumersPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/cadastro-cliente">
            <Cadastro />
            {/* <CostumersPage /> */}
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
