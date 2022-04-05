import { Link, Outlet, useOutlet, useParams } from "react-router-dom";
import GameItemDetails from "../components/GameItemDetails";

const DUMMY_GAMES = [
    { id: 'g1', name: "Game 1", details: "Super game 1" },
    { id: 'g2', name: "Game 2", details: "Super game 2" },
    { id: 'g3', name: "Game 3", details: "Super game 3" },
];

const GameDetails = () => {
  const params = useParams();
  const { gameId } = params;
  const game = DUMMY_GAMES.find(dummyGame => dummyGame.id === gameId);

  const outlet = useOutlet()

  if (!game) {
      return <p>No game found!</p>
  }

  return (
    <>
        <GameItemDetails name={game.name} details={game.details} />
        {outlet || <Link to="comments">Comments</Link>}
    </>
  );
};

export default GameDetails;