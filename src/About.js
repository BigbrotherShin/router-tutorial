import React from 'react';
import qs from 'qs'; // location.search parsing하는 라이브러리

// location 객체는 현재 앱이 갖고있는 주소에 대한 정보를 지니고있습니다.
// 쿼리는 라우트 컴포넌트에게 props로 전달되는 location 객체에 있는 search 값에서 읽어올 수 있습니다.

// 이런식으로 말이죠:

// {
//   key: 'ac3df4', // not with HashHistory!
//   pathname: '/somewhere'
//   search: '?some=search-string',
//   hash: '#howdy',
//   state: {
//     [userDefined]: true
//   }
// }

// 여기서 search 값을 확인해야하는데, 이 값은 문자열 형태로 되어있습니다. 객체 형태로 변환하는건 우리가 직접 해주어야 합니다.

// 이 작업은 qs 라는 라이브러리를 사용하여 쉽게 할 수 있습니다.

function About({ location }) { // query를 받아오는 parameter
  console.log(location);
  const query = qs.parse(location.search, { // location.search는 ? 가 포함되어있는 문자열
    ignoreQueryPrefix: true, // query ? 제거하기
  });
  console.log(query);
  const detail = query.detail === 'true'; // query 해당 값이 문자열로 불러와짐

  return (
    <div>
      <h1>Introduction</h1>
      <p>
        This project is a tutorial page to train react router.
      </p>
      {detail && <p>detail is true!!!!!</p>}
    </div>
  )
}

export default About;