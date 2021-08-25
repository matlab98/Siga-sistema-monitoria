import Monitor from '../components/registrarMonitor';
import Monitoria from '../components/registrarMonitoria';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Monitor />
    </div>
  );
}

export default App;
