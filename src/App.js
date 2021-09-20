import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route to="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
