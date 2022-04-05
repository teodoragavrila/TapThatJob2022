import { useLocation, useNavigate } from 'react-router-dom';
import GameItem from './GameItem';
import classes from './GameList.module.css';

const sortGames = (games, ascending) => {
  return games.sort((gameA, gameB) => {
    if (ascending) {
      return gameA.name > gameB.name ? 1 : -1;
    } else {
      return gameA.name < gameB.name ? 1 : -1;
    }
  });
};

const GameList = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedGames = sortGames(props.games, isSortingAscending);

  const changeSortingHandler = () => {
    navigate(`${location.pathname}?sort=${(isSortingAscending ? 'desc' : 'asc')}`);
  };

  return (
    <>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedGames.map((game) => (
          <GameItem
            key={game.id}
            id={game.id}
            name={game.name}
            details={game.details}
          />
        ))}
      </ul>
    </>
  );
};

export default GameList;
