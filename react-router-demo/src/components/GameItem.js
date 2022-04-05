import { Link } from 'react-router-dom';

import classes from './GameItem.module.css';

const GameItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.name}</p>
        </blockquote>
        <figcaption>{props.details}</figcaption>
      </figure>
      <Link className='btn' to={`/games/${props.id}`}>
        View
      </Link>
    </li>
  );
};

export default GameItem;
