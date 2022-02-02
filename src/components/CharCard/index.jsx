import "./styles.css";

const CharCard = ({ name, image }) => {
  return (
    <>
      <h2 className="nameTitle">{name}</h2>
      <img src={image} alt={name} />
    </>
  );
};
export default CharCard;
