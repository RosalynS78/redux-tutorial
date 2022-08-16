import './App.css';
import ProfileContainer from './containers/ProfileContainer'
// change to container and hello redux appears
// container component is calling the profile component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfileContainer />
      </header>
    </div>
  );
}

export default App;

