import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john.doe@email.com',
    image: 'https://via.placeholder.com/150',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle save logic here (API call, etc.)
    navigate('/profile'); // Redirect back to the profile page
  };

  return (
    <div className="flex flex-col items-center py-8">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-xl font-bold mb-6 text-center">Edit Profile</h2>

        {/* Profile Picture Preview */}
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 mx-auto">
          <img src={formData.image} alt="Profile Preview" className="w-full h-full object-cover" />
        </div>

        {/* Change Profile Picture */}
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700">Profile Picture</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full text-gray-700"
          />
        </div>

        {/* Change Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        {/* Change Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white px-6 py-2 rounded hover:bg-indigo-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
