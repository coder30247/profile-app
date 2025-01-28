import React, { useState } from "react";
import "./styles.css";
const ProfileForm = ({ saveProfile }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [projectLinks, setProjectLinks] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveProfile({
      username,
      email,
      department,
      projectLinks,
      description,
      image,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="profile-form">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Project Links"
        value={projectLinks}
        onChange={(e) => setProjectLinks(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
      
      {/* Image preview */}
      {image && (
        <div className="image-preview">
          <img src={image} alt="Profile Preview" />
        </div>
      )}

      <button type="submit">Save Profile</button>
    </form>
  );
};

export default ProfileForm;
