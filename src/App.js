import React, { useEffect, useState } from "react";
import ProfileForm from "./components/ProfileForm";
import Profile from "./Profile";
import './styles.css';

const App = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Fetch profile data from localStorage
    const storedProfile = localStorage.getItem("userProfile");
    if (storedProfile) {
      setProfileData(JSON.parse(storedProfile));
    }
  }, []);

  const saveProfile = (profile) => {
    setProfileData(profile);
    // Save to localStorage
    localStorage.setItem("userProfile", JSON.stringify(profile));
  };

  return (
    <div className="app">
      <h1>User Profile</h1>
      <ProfileForm saveProfile={saveProfile} />
      <Profile profileData={profileData} />
    </div>
  );
};

export default App;
