import React from 'react';
import { withRouter } from 'react-router-dom';
//withRouter HoC 는 라우트 컴포넌트가 아닌곳에서 match / location / history 를 사용해야 할 때 쓰면 됩니다.

const WithRouterSample = ({ location, match, history }) => {
  return (
    <div>
      <h4>location</h4>
      <textarea value={JSON.stringify(location, null, 2)} readOnly />
      <h4>match</h4> {/* withRouter 를 사용하면, 자신의 부모 컴포넌트 기준의
      (즉, 자신이 렌더링된 컴포넌트의 위치를 기준으로) match 값을 읽어옴 */}
      <textarea value={JSON.stringify(match, null, 2)} readOnly />
      <button onClick={() => history.push('/')}>HOME</button>
    </div>
  );
};

export default withRouter(WithRouterSample);