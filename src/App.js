import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">INTRO</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact /> {/* 해당 경로와 완전히 일치할 때만 렌더링 */}
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
