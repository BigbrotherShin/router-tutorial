import useReactRouter from 'use-react-router';

// withRouter 라는 함수를 사용해서 라우트로 사용되고 있지 않은 컴포넌트에서도
// 라우트 관련 props 인 match, history, location 을 조회하는 방법 대신,

// 라이브러리를 설치해서 라우터에 관련된 값들을 Hook 으로 사용하는 방법
//

function RouterHookSample() {
  const { history, location, match } = useReactRouter();
  console.log({ history, location, match }); // 프로필 목록 페이지를 열었을 때, 콘솔을 통해 location, match, history 객체들을 조회 할 수 있음.
  // 이 Hook 이 정식 릴리즈는 아니기 때문에 만약에 여러분들이 withRouter 가 너무 불편하다고 느낄 경우에만 사용하시는 것을 권장
  return null;
}

export default RouterHookSample;
