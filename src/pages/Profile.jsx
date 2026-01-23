// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { getUserProfile } from "../api/user.api";
// import ProfileHeader from "../user/ProfileHeader";

// const Profile = () => {
//   const { username } = useParams();
//   const { user: currentUser } = useAuth();
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await getUserProfile(username);
//         setUserData(res.data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [username]);

//   if (loading)
//     return (
//       <div className="min-h-screen bg-black text-white flex items-center justify-center">
//         <p className="text-gray-500 text-sm">Loading profile…</p>
//       </div>
//     );

//   if (!userData)
//     return (
//       <div className="min-h-screen bg-black text-white flex items-center justify-center">
//         <p className="text-gray-500 text-sm">User not found</p>
//       </div>
//     );

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Profile Container */}
//       <div className="max-w-xl mx-auto border-x border-gray-800 min-h-screen">
//         <ProfileHeader userData={userData} currentUser={currentUser} />

//         {/* Placeholder for profile tabs / posts */}
//         <div className="border-b border-gray-800 flex">
//           <button className="flex-1 py-4 text-center font-semibold border-b-2 border-blue-500">
//             Posts
//           </button>
//           <button className="flex-1 py-4 text-center text-gray-500 hover:bg-gray-900 transition">
//             Replies
//           </button>
//           <button className="flex-1 py-4 text-center text-gray-500 hover:bg-gray-900 transition">
//             Media
//           </button>
//           <button className="flex-1 py-4 text-center text-gray-500 hover:bg-gray-900 transition">
//             Likes
//           </button>
//         </div>

//         {/* Future: Posts feed */}
//         <div className="py-10 text-center text-gray-500 text-sm">
//           No posts yet
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;



import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getUserProfile } from "../api/user.api";
import ProfileHeader from "../user/ProfileHeader";

const Profile = () => {
  const { username } = useParams();
  const { user: currentUser } = useAuth();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getUserProfile(username);
        setUserData(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [username]);

  if (loading)
    return (
      <div className="min-h-screen bg-gray-50 text-gray-800 flex items-center justify-center">
        <p className="text-gray-400 text-sm tracking-wide">
          Loading profile…
        </p>
      </div>
    );

  if (!userData)
    return (
      <div className="min-h-screen bg-gray-50 text-gray-800 flex items-center justify-center">
        <p className="text-gray-400 text-sm tracking-wide">
          User not found
        </p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Profile Container */}
      <div className="max-w-2xl mx-auto min-h-screen bg-white border-x border-gray-200 shadow-sm">

        <ProfileHeader userData={userData} currentUser={currentUser} />

        {/* Tabs */}
        <div className="flex border-b border-gray-200 bg-white sticky top-16 z-10">
          <button
            className="
              flex-1
              py-4
              text-center
              font-semibold
              text-[#0f2041]
              border-b-2
              border-[#0f2041]
              bg-[#0f2041]/5
            "
          >
            Posts
          </button>

          <button
            className="
              flex-1
              py-4
              text-center
              text-gray-500
              hover:text-[#0f2041]
              hover:bg-gray-50
              transition
            "
          >
            Replies
          </button>

          <button
            className="
              flex-1
              py-4
              text-center
              text-gray-500
              hover:text-[#0f2041]
              hover:bg-gray-50
              transition
            "
          >
            Media
          </button>

          <button
            className="
              flex-1
              py-4
              text-center
              text-gray-500
              hover:text-[#0f2041]
              hover:bg-gray-50
              transition
            "
          >
            Likes
          </button>
        </div>

        {/* Empty state */}
        <div className="py-16 text-center">
          <p className="text-gray-400 text-sm">
            No posts yet
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
