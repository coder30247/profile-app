import React from "react";

const Profile = ({ profileData }) => {
  if (!profileData) {
    return <div>No profile data found. Please create a profile.</div>;
  }

  return (
    <div className="profile">
      {profileData.image && <img src={profileData.image} alt="Profile" />}
      <h2>{profileData.username}</h2>
      <p>Email: {profileData.email}</p>
      <p>Department: {profileData.department}</p>
      <p>Project Links: {profileData.projectLinks}</p>
      <p>Description: {profileData.description}</p>
    </div>
  );
};

export default Profile;
