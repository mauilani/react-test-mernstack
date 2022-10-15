import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { TopBar } from "./components/topbar/TopBar";
import { Home } from "./pages/home/Home";
import { Register } from "./pages/register/Register";
import { Login } from "./pages/login/Login";
import { Write } from "./pages/write/Write";
import { Settings } from "./pages/settings/Settings";
import { Single } from "./pages/single/Single";

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">
          { user ? <Home/> : <Login /> }
        </Route>
        <Route path="/write">
          { user ? <Write /> : <Register /> }
        </Route>
        <Route path="/settings">
          { user ? <Settings /> : <Register /> }
        </Route>
        <Route path="/post/:postid">
          <Single />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
