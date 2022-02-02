import "./styles.css";
import Characters from "./components/Characters";
import { useState, useEffect } from "react";

export default function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Characters characterList={characterList} />
    </div>
  );
}
