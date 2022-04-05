import GameList from "../components/GameList";

const DUMMY_GAMES = [
    { id: 'g1', name: "Game 1", details: "Super game 1" },
    { id: 'g2', name: "Game 2", details: "Super game 2" },
    { id: 'g3', name: "Game 3", details: "Super game 3" },
];

const Games = () => {
  return <GameList games={DUMMY_GAMES} />;
};

export default Games;