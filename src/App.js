import './App.css';
import ShareButtons from './components/shareButtons.js';
import ColorGrid from './components/colorGrid';
import RefreshButton from './components/refreshButton.js';

function App() {
  return (
    <div className="App">
      <h1>Let's colour!</h1>
      <ColorGrid />
      <RefreshButton />
      <ShareButtons />
    </div>
  );
}

export default App;
