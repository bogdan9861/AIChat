import './App.css';
import { Messages } from './components/Messages/Messages';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="inner">
          <div className="head">
            <span>AI Chat</span>
          </div>
          <Messages/>
        </div>
      </div>
    </div>
  );
}

export default App;
