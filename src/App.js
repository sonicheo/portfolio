import './App.css';
import Main from './views/main/Main';
import { Router } from '@reach/router';


function App() {
  return (
    <div className="App">
      <Router>
        <Main path='/'/>
      </Router>
    </div>
  );
}

export default App;
