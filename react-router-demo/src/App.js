import { Navigate, Route, Routes } from 'react-router-dom';
import Comments from './components/Comments';
import Layout from './components/layout/Layout';
import GameDetails from './pages/GameDetails';
import Games from './pages/Games';

function App() {
  return (
    <div>
      <main>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/games" />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/:gameId/*" element={<GameDetails />} >
              <Route path='comments' element={<Comments />} />
            </Route>
          </Routes>
        </Layout>
      </main>
    </div>
  );
}

export default App;
