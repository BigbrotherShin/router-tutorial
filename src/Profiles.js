import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';

// 서브 라우트는, 라우트 내부의 라우트를 만드는것을 의미합니다. 탭 or 태그 선택 시 활용 가능.
// 이 작업은 그렇게 복잡하지 않습니다. 그냥 컴포넌트를 만들어서 그 안에 또 Route 컴포넌트를 렌더링하면 됩니다.
// Profiles 라는 컴포넌트를 만들어서, 그 안에 각 유저들의 프로필 링크들과 프로필 라우트를 함께 렌더링
const Profiles = () => {
  return (
    <div>
      <h3>Users List</h3>
      <ul>
        <li>
          <NavLink // NavLink 는 Link 랑 비슷한데, 만약 현재 경로와 Link 에서 사용하는 경로가 일치하는 경우 특정 스타일 혹은 클래스를 적용 할 수 있는 컴포넌트입니다.
            to="/profiles/velopert"
            activeStyle={{ background: 'black', color: 'white' }} // 만약에 스타일이 아니라 CSS 클래스를 적용하시고 싶으면 activeStyle 대신 activeClassName 을 사용
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
        render를 사용하면 컴포넌트가 아니라, JSX 자체를 렌더링 할 수 있습니다. 
        JSX 를 렌더링하는 것이기에, 상위 영역에서 props 나 기타 값들을 필요하면 전달 해 줄 수있습니다. */}
      <Route path="/profiles/:username" component={Profile} />
      {/* Profile 을 Profiles 에서 적용: path 규칙에는 /profiles/:username 이라고 넣어주면 ,
      username 에 해당하는 값을 파라미터로 넣어주어서 Profile 컴포넌트에서 match props 를 통하여 전달받을 수 있게 됨 */}
      <WithRouterSample />
    </div>
  );
};

export default Profiles;
