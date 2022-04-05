import { Link, Outlet, useParams } from "react-router-dom";

const GameDetails = () => {
  const params = useParams();
  return (
    <>
        <h1>Game Details</h1>
        <p>{params.gameId}</p>
        <Link to="comments">Comments</Link>
        <Outlet />
    </>
  );
};

export default GameDetails;