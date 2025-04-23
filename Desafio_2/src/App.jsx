import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!username) return;

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) {
        throw new Error('Usuário não encontrado');
      }
      const data = await res.json();
      setUserData(data);
      setError('');
    } catch (err) {
      setUserData(null);
      setError('Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="app">
      <h1>Perfil <span className="highlight">GitHub</span></h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Digite um usuário do Github"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSearch}>
          <span role="img" aria-label="search">🔍</span>
        </button>
      </div>

      {userData && (
        <div className="user-card">
          <img src={userData.avatar_url} alt="avatar" className="avatar" />
          <div className="user-info">
            <h2>{userData.name || userData.login}</h2>
            <p>{userData.bio || 'Esse usuário não possui uma biografia.'}</p>
          </div>
        </div>
      )}

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
    </div>
  );
}

export default App;