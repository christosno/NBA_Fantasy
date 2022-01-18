import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "react-bootstrap";

import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import PlayerStats from "./screens/PlayerStats";
import Loader from "./components/Loader";
import Message from "./components/Message";

import { listPlayers } from "./actions/playerActions";

const App = () => {
  const dispatch = useDispatch();

  // get players list
  const playerList = useSelector((state) => state.playerList);
  console.log(playerList);
  const { error, loading, players } = playerList;
  console.log(players.length > 0);

  // call players list endpoint
  useEffect(() => {
    dispatch(listPlayers());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <main>
        <Container>
          {loading && <Loader />}
          {!loading && error && <Message variant="danger">{error}</Message>}
          {!loading && !error && players.length > 0 && (
            <Switch>
              <Route path="/" exact>
                <Redirect to="/home" />
              </Route>
              <Route path="/home" exact>
                <HomeScreen />
              </Route>
              <Route path="/players/:playerId" exact>
                <PlayerStats />
              </Route>
            </Switch>
          )}
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;
