import { Container } from "react-bootstrap";

import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import PlayerStats from "./screens/PlayerStats";

function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
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
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
