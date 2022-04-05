import { useNavigate } from 'react-router-dom';
import GameForm from '../components/GameForm';

const NewGame = () => {
  const navigate = useNavigate();

  const addGameHandler = (gameData) => {
    alert(JSON.stringify(gameData));
    navigate('/games');
  };

  return <GameForm onAddGame={addGameHandler} />;
};

export default NewGame;