import { useParams } from "react-router-dom";

const GameDetails = () => {
  const params = useParams();
  return (
    <>
        <h1>Game Details</h1>
        <p>{params.gameId}</p>
    </>
  );
};

export default GameDetails;