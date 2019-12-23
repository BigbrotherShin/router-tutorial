import React from 'react';

const profileData = {
  velopert: {
    name: 'KIM',
    description: 'Frontend Engineer @ RIDI',
  },
  homer: {
    name: 'Simpson',
    description: 'animation character',
  },
};

function Profile({ match }) {
  // 파라미터를 받아올 땐 match 안에 들어있는 params 값을 참조
  const { username } = match.params; 
  // match 객체안에는 현재의 주소가 Route 컴포넌트에서 정한 규칙과 어떻게 일치하는지에 대한 정보가 들어있습니다.
  const profile = profileData[username];

  if (!profile) {
    return <div>Cannot find user.</div>;
  }

  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
}

export default Profile;
