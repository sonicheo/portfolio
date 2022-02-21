import './App.css';
import Main from './views/main/Main';
import { Router } from '@reach/router';
import InfiniteScroll from './views/projects/infiniteScroll/InfiniteScroll';
import QuoteGenerator from './views/projects/quoteGenerator/QuoteGenerator';
import InPicture from './views/projects/inPicture/InPicture';


function App() {
  return (
    <div className="App">
      <Router>
        <Main path='/'/>
        <InfiniteScroll path='/projects/infinite_scroll' />
        <QuoteGenerator path='/projects/quote_generator' />
        <InPicture path='/projects/in_picture' />
      </Router>
    </div>
  );
}

export default App;
