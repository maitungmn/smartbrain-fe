import React from "react";
import "./Profile.css";

const Profile = ({ isProfileOpen, toggleModal }) => {
  return (
    <div className="profile-modal">
      <button onClick={toogleModal}>Click</button>
    </div>
  );
};

export default Profile;
