import { Navigate, Route, Routes } from 'react-router-dom';
import GameDetails from './pages/GameDetails';
import Games from './pages/Games';

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/games" />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:gameId" element={<GameDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
