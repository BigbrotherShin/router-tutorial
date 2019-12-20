import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';

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
        <li>
          <Link to="/profiles">PROFILES LIST</Link>
        </li>
      </ul>
      <hr />
      <Switch> {/* path와 매칭되는 가장 첫 번째 컴포넌트만 표시 */}
        <Route path="/" component={Home} exact />{' '} {/* 해당 경로와 완전히 일치할 때만 렌더링 */}
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route /* 위에서 switch와 매칭되는 아무런 값도 없으므로 이 컴포넌트 표시 */
          render={({ location }) => (
            <div>
              <h2>Cannot find page</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
