import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getFollowing } from "../api/user.api";
import UserCard from "../user/UserCard";
import Loader from "../components/common/Loader";

const Following = () => {
  const { username } = useParams();
  const { user: currentUser } = useAuth();
  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFollowing = async () => {
    setLoading(true);
    try {
      const res = await getFollowing(username);
      setFollowing(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFollowing();
  }, [username]);

  return (
    <div className="min-h-screen bg-[#f8fafc] px-4">
      <div className="max-w-2xl mx-auto mt-6 bg-white rounded-2xl border border-[#d6deee] shadow-sm">

        {/* Header */}
        <h2 className="text-xl md:text-2xl font-bold text-[#0f2041] px-6 py-4 border-b border-[#d6deee]">
          {username} is following
        </h2>

        {/* Loader */}
        {loading && (
          <div className="flex justify-center items-center py-10">
            <Loader />
          </div>
        )}

        {/* Empty State */}
        {!loading && following.length === 0 && (
          <p className="text-[#64748b] py-10 text-center text-sm">
            {username} isn’t following anyone yet.
          </p>
        )}

        {/* List */}
        {!loading &&
          following.map((f) => (
            <UserCard
              key={f.id}
              user={f}
              currentUser={currentUser}
            />
          ))}
      </div>
    </div>
  );
};

export default Following;
