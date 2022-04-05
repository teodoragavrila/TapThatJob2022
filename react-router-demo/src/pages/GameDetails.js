import { useEffect } from 'react';
import { Link, useOutlet, useParams } from "react-router-dom";
import GameItemDetails from "../components/GameItemDetails";

import useHttp from '../hooks/use-http';
import { getSingleGame } from '../lib/api';

const GameDetails = () => {
  const params = useParams();
  const { gameId } = params;

  const outlet = useOutlet()

  const { sendRequest, status, data: loadedGame, error } = useHttp(
    getSingleGame,
    true
  );

  useEffect(() => {
    sendRequest(gameId);
  }, [sendRequest, gameId]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return <p className='centered'>{error}</p>;
  }

  if (!loadedGame.name) {
    return <p>No game found!</p>;
  }

  return (
    <>
        <GameItemDetails name={loadedGame.name} details={loadedGame.details} />
        {outlet || <Link to="comments">Comments</Link>}
    </>
  );
};

export default GameDetails;