import React, { use, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { playSoundSuccess, playSoundAlert } from "../Shared/soundEffect";

const EditProfile = () => {
  const { user } = use(AuthContext);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateProfile(user, {
        displayName: displayName,
        photoURL: photoURL,
      });
      playSoundSuccess();
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      playSoundAlert();
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-6">Edit Profile</h1>

      <div className="card bg-warning shadow-xl border border-error">
        <div className="card-body">
          {/* Current Profile Display */}
          <div className="flex flex-col items-center mb-6">
            <div className="avatar mb-4">
              <div className="w-24 rounded-full ring ring-primary ring-offset-4 ring-offset-warning">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="Profile" />
                ) : (
                  <div className="w-24 h-24 flex items-center justify-center bg-primary text-info text-3xl font-bold">
                    {user?.displayName?.charAt(0) || "U"}
                  </div>
                )}
              </div>
            </div>
            <h2 className="text-xl font-semibold text-primary">
              {user?.displayName || "User"}
            </h2>
            <p className="text-sm text-primary/70">{user?.email}</p>
          </div>

          <div className="divider"></div>

          {/* Update Form */}
          <form onSubmit={handleUpdateProfile} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-primary font-semibold">
                  Display Name
                </span>
              </label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Enter your name"
                className="input input-bordered bg-success text-primary border-error focus:border-primary"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-primary font-semibold">
                  Photo URL
                </span>
              </label>
              <input
                type="url"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                placeholder="Enter photo URL"
                className="input input-bordered bg-success text-primary border-error focus:border-primary"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-primary font-semibold">
                  Email (Cannot be changed)
                </span>
              </label>
              <input
                type="email"
                value={user?.email || ""}
                disabled
                className="input input-bordered bg-success/50 text-primary/50 border-error cursor-not-allowed"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Update Profile"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
