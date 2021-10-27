import logo from './logo.svg';

import teams from './teams.json'
import TeamInfo from './Components/TeamInfo';
import './Styles/style-teams.css'

function App() {
  return (
    <div className="container">
      <h1>Football Teams</h1>
      <div className="row mb-2">
        {teams.map(team => <TeamInfo team={team} />)}
      </div>
      
    </div>
  );
}

export default App;
