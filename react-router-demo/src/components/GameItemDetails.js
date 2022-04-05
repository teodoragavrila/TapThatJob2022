import classes from './GameItemDetails.module.css';

const GameItemDetails = (props) => {
  return (
    <figure className={classes.game}>
      <p>{props.name}</p>
      <figcaption>{props.details}</figcaption>
    </figure>
  );
};

export default GameItemDetails;
