import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">HOME</Link>
          {/* Link: 누르면 다른 주소로 이동시키기

          Link 컴포넌트는 클릭하면 다른 주소로 이동시키는 컴포넌트입니다. 리액트 라우터를 사용할땐 일반 <a href="...">...</a> 태그를 사용하시면 안됩니다.
          만약에 하신다면 onClick 에 e.preventDefault() 를 호출하고 따로 자바스크립트로 주소를 변환시켜주어야 합니다.
          그 이유는 a 태그의 기본적인 속성은 페이지를 이동시키면서, 페이지를 아예 새로 불러오게됩니다.
          그렇게 되면서 우리 리액트 앱이 지니고있는 상태들도 초기화되고, 렌더링된 컴포넌트도 모두 사라지고 새로 렌더링을 하게됩니다. 

          그 대신에 Link 라는 컴포넌트를 사용해야하는데요, 
          그렇기 때문에 a 태그 대신에 Link 컴포넌트를 사용하는데요, 이 컴포넌트는 HTML5 History API 를 사용하여 브라우저의 주소만 바꿀뿐 페이지를 새로 불러오지는 않습니다.*/}
        </li>
        <li>
          <Link to="/about">INTRO</Link>
        </li>
        <li>
          <Link to="/profiles">PROFILES LIST</Link>
        </li>
        <li>
          <Link to="/history">SAMPLE</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        {/* Switch: path와 매칭되는 가장 첫 번째 컴포넌트만 표시.
          Switch 는 여러 Route 들을 감싸서 그 중 규칙이 일치하는 라우트 단 하나만을 렌더링시켜줍니다.
          Switch 를 사용하면, 아무것도 일치하지 않았을때 보여줄 Not Found 페이지를 구현 할 수도 있습니다.*/}
        <Route path="/" component={Home} exact />{' '}
        {/* 
        Route: 특정 주소에 컴포넌트 연결하기: 사용자가 요청하는 주소에 따라 다른 컴포넌트를 보여주기.
        exact: 해당 경로와 완전히 일치할 때만 렌더링 */}
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
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
