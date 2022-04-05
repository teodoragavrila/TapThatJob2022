import { Route, Routes, useParams } from "react-router-dom";
import Comments from "../components/Comments";

const GameDetails = () => {
  const params = useParams();
  return (
    <>
        <h1>Game Details</h1>
        <p>{params.gameId}</p>
        <Routes>
            <Route path='comments' element={<Comments />} />
        </Routes>
    </>
  );
};

export default GameDetails;