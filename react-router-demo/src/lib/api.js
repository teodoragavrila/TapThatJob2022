const BASE_URL = 'http://localhost:3001';

export async function getAllGames() {
  const response = await fetch(`${BASE_URL}/games`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch games.');
  }

  return data;
}

export async function getSingleGame(gameId) {
    const response = await fetch(`${BASE_URL}/games/${gameId}`);
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Could not fetch game.');
    }
  
    return data;
}

export async function addGame(gameData) {
    const response = await fetch(`${BASE_URL}/games`, {
      method: 'POST',
      body: JSON.stringify(gameData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Could not create game.');
    }
  
    return null;
  }