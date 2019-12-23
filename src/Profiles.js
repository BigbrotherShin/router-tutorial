import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';

const Profiles = () => {
  return (
    <div>
      <h3>Users List</h3>
      <ul>
        <li>
          <NavLink // NavLink 는 Link 랑 비슷한데, 만약 현재 경로와 Link 에서 사용하는 경로가 일치하는 경우 특정 스타일 혹은 클래스를 적용 할 수 있는 컴포넌트입니다.
            to="/profiles/velopert"
            activeStyle={{ background: 'black', color: 'white' }} {/* 만약에 스타일이 아니라 CSS 클래스를 적용하시고 싶으면 activeStyle 대신 activeClassName 을 사용 */}
          >
            velopert
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/homer"
            activeStyle={{ background: 'black', color: 'white' }}
          >
            homer
          </NavLink>
        </li>
      </ul>
      <Route path="/profiles" exact render={() => <div>choice user</div>} />{' '}
      {/* component 대신에 render 가 사용되었는데요, 
        여기서는 컴포넌트가 아니라, JSX 자체를 렌더링 할 수 있습니다. 
        JSX 를 렌더링하는 것이기에, 상위 영역에서 props 나 기타 값들을 필요하면 전달 해 줄 수있습니다. */}
      <Route path="/profiles/:username" component={Profile} />
      <WithRouterSample />
    </div>
  );
};

export default Profiles;
