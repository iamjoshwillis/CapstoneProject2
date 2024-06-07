import React, { useState, useContext } from "react";
import PotterApi from "../api/api";
import UserContext from "../auth/UserContext";


//Edit User Profile
function UserProfile() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    first_name: currentUser.first_name,
    last_name: currentUser.last_name,
    email: currentUser.email,
    bio: currentUser.bio,
    username: currentUser.username,
    password: "",
  });


//Form Submission
  async function handleSubmit(e) {
    e.preventDefault();

    let profileData = {
      username: formData.username,
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      bio: currentUser.bio,
      password: formData.password,
    };

    let updatedUser;

    try {
      updatedUser = await PotterApi.saveProfileChanges(profileData);
    } catch(e) {
      return;
    }

    setFormData(f => ({ ...f, password: "" }));

    setCurrentUser(updatedUser);
  }

  /** Handle form data changing */
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(f => ({
      ...f,
      [name]: value,
    }));
  }

  return (
      <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
        <h3 className="mt-10 text-gray-100 text-center text-2xl font-bold leading-9 tracking-tight">Edit Profile</h3>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form>
              <div className="form-group">
                <label className="block text-sm text-gray-100 font-medium leading-6">Username</label>
                <input
                    name="username"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formData.username}
                    onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="block text-sm text-gray-100 font-medium leading-6">First Name</label>
                <input
                    name="first_name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formData.first_name}
                    onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="block text-sm text-gray-100 font-medium leading-6">Last Name</label>
                <input
                    name="last_name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formData.last_name}
                    onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="block text-sm text-gray-100 font-medium leading-6">Email</label>
                <input
                    name="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formData.email}
                    onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="block text-sm text-gray-100 font-medium leading-6">Verify Password</label>
                <input
                    type="password"
                    name="password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formData.password}
                    onChange={handleChange}
                />
              </div>
              <div>
              <button
              type="submit"
              className="flex mt-10 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 p-8"
              onSubmit={handleSubmit}
            >
              Submit Changes
            </button>
            </div>
            </form>
            </div>
          </div>
  );
}

export default UserProfile;