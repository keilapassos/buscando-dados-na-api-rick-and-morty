import CharCard from "../CharCard";
import "./styles.css";

const Characters = ({ characterList }) => {
  return (
    <div>
      <h1>Meus personagens</h1>

      <div className="cardsPlace">
        {characterList.map((char) => (
          <div
            key={char.id}
            className={
              char.status === "Alive" ? "statusCharAlive" : "statusCharDead"
            }
          >
            <CharCard name={char.name} image={char.image} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Characters;
