import { Container } from "react-bootstrap";

import { useEffect, useState, useCallback } from "react";

import axios from "axios";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

function App() {
  const [players, setPlayers] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // const getPlayers = useCallback(async () => {
  //   try {
  //     setIsLoading(true);
  //     const response = await fetch("/api/players/");
  //     if (!response.ok) {
  //       throw new Error("Something went wrong!");
  //     }
  //     console.log(response);
  //     const data = await response.json();
  //     console.log(data.data);
  //     setPlayers(data.data);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //   setIsLoading(false);
  // }, []);

  // useEffect(() => {
  //   getPlayers();
  // }, [getPlayers]);

  useEffect(() => {
    async function fetchPlayers() {
      const { data } = await axios.get("/api/players/");
      console.log(data);
      setPlayers(data);
    }

    fetchPlayers();
  }, []);

  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          {!isLoading && players && <HomeScreen players={players} />}
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
