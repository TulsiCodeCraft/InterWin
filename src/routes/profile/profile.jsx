import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate('/edit-profile');
  };

  return (
    <div className="flex flex-col items-center py-8">
      {/* Profile Picture */}
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
        <img src="https://via.placeholder.com/150" alt="Profile" className="w-full h-full object-cover" />
      </div>
      {/* Profile Information */}
      <h1 className="text-xl font-bold mb-2">John Doe</h1>
      <p className="text-gray-600 mb-4">john.doe@email.com</p>
      {/* Edit Profile Button */}
      <button
        onClick={handleEditProfile}
        className="bg-indigo-500 text-white px-6 py-2 rounded hover:bg-indigo-600"
      >
        Edit Profile
      </button>
    </div>
  );
};

export default Profile;
