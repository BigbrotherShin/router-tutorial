import React, { useEffect } from 'react';

// history 객체는 라우트로 사용된 컴포넌트에게 match, location 과 함께 전달되는 props 중 하나입니다. 
// 이 객체를 통하여, 우리가 컴포넌트 내에 구현하는 메소드에서 라우터에 직접 접근을 할 수 있습니다 -
//  뒤로가기, 특정 경로로 이동, 이탈 방지 등..

function HistorySample({ history }) {
  console.log(history);
  const goBack = () => {
    history.goBack();
  };

  const goHome = () => {
    history.push('/');
  };

  useEffect(() => {
    console.log(history);
    const unblock = history.block('Are you sure to leave?');
    return () => {
      unblock();
    };
  }, [history]);

  return (
    <div>
      <button onClick={goBack}>Back</button>
      <button onClick={goHome}>Home</button>
    </div>
  );
}

export default HistorySample;