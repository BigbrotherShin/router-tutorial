import React from 'react';
import qs from 'qs'; // location.search parsing하는 라이브러리

function About({ location }) { // query를 받아오는 parameter
  console.log(location);
  const query = qs.parse(location.search, { // location.search는 ? 가 포함되어있는 문자열
    ignoreQueryPrefix: true, // query ? 제거하기
  });
  console.log(query);
  const detail = query.detail === 'true'; // url parameter or query 해당 값이 문자열로 불러와짐

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