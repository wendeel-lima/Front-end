import "./App.scss";
import Sidebar from "./components/shared/Sidebar/Sidebar";
import Footer from "./components/shared/Footer/Footer";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import TarefaAdd from "./pages/TarefaAdd/TarefaAdd";
import TarefaView from "./pages/TarefaView/TarefaView";
import TarefaEdit from "./pages/TarefaEdit/TarefaEdit";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/add" component={TarefaAdd} />
        <Route path="/view/:id" component={TarefaView} />
        <Route path="/edit/:id" component={TarefaEdit} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
