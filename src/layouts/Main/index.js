import CreatePlaylist from "../../pages/CreatePlaylist";
import LandingPage from "../../pages/LandingPage";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Main = () => {
  const currentAccessToken = useSelector((state) => state.accessToken);

  return (
    <Switch>
      <Route exact path="/createplaylist">
        {currentAccessToken ? <CreatePlaylist /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/">
        {currentAccessToken ? <Redirect to="/createplaylist" /> : <LandingPage />}
      </Route>
    </Switch>
  );
};

export default Main;
