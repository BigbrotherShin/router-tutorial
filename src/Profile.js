import React from 'react';

const profileData = {
  velopert: {
    name: 'KIM',
    description: 'Frontend Engineer @ RIDI',
  },
  homer: {
    name: 'Simpson',
    description: 'animation character'
  }
}

function Profile({ match }) {
  const { username } = match.params; // url parameter or query 읽어오기
  const profile = profileData[username];

  if (!profile) {
    return <div>Cannot find user.</div>
  }

  return (
    <div>
      <h3>{username} ({profile.name})</h3>
      <p>
        {profile.description}
      </p>
    </div>
  )
}

export default Profile;