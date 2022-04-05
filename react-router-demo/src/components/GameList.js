import GameItem from './GameItem';
import classes from './GameList.module.css';

const GameList = (props) => {
  return (
    <ul className={classes.list}>
      {props.games.map((game) => (
        <GameItem
          key={game.id}
          id={game.id}
          name={game.name}
          details={game.details}
        />
      ))}
    </ul>
  );
};

export default GameList;
