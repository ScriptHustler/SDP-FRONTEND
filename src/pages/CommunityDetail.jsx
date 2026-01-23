// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// import { getCommunityDetail, getMyCommunities } from "../api/community.api";
// import { getCommunityPosts } from "../api/post.api";

// import Loader from "../components/common/Loader";
// import CommunityHeader from "../components/community/CommunityHeader";
// import ModeratorsList from "../components/community/ModeratorsList";
// import JoinCommunityButton from "../components/community/JoinCommunityButton";
// import CommunityModerators from "../components/community/CommunityModerators";
// import PostCard from "../components/post/PostCard";

// import { useAuth } from "../context/AuthContext";

// const CommunityDetail = () => {
//   const { id } = useParams();
//   const { user } = useAuth();

//   const [community, setCommunity] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isJoined, setIsJoined] = useState(false);

//   const [posts, setPosts] = useState([]);
//   const [postsLoading, setPostsLoading] = useState(true);

//   useEffect(() => {
//     fetchCommunity();
//     fetchMembership();
//     fetchCommunityPosts();
//   }, [id]);

//   const fetchMembership = async () => {
//     try {
//       const res = await getMyCommunities();
//       setIsJoined(res.data.some((c) => c.id === Number(id)));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const fetchCommunity = async () => {
//     try {
//       setLoading(true);
//       const res = await getCommunityDetail(id);
//       setCommunity(res.data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchCommunityPosts = async () => {
//     try {
//       setPostsLoading(true);
//       const res = await getCommunityPosts(id);
//       setPosts(res.data.results);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setPostsLoading(false);
//     }
//   };

//   if (loading) return <Loader />;
//   if (!community) return null;

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* MAIN CONTENT — matches Home layout */}
//       <div className="max-w-xl mx-auto border-x border-gray-800 min-h-screen pt-16 px-4">
        
//         {/* Sticky Community Header */}
//         <div className="sticky top-16 z-10 bg-black border-b border-gray-800 pb-4">
//           <CommunityHeader community={community} />

//           <div className="flex justify-end mt-4">
//             <JoinCommunityButton
//               communityId={community.id}
//               isJoinedInitial={isJoined}
//               onToggle={setIsJoined}
//             />
//           </div>
//         </div>

//         {/* Creator Moderator Controls */}
//         <CommunityModerators community={community} currentUser={user} />

//         {/* Moderators List */}
//         <ModeratorsList moderators={community.moderators} />

//         {/* POSTS */}
//         <div className="mt-10">
//           <h2 className="text-lg font-semibold border-b border-gray-800 pb-2 mb-4">
//             Community Posts
//           </h2>

//           {postsLoading && <Loader />}

//           {!postsLoading && posts.length === 0 && (
//             <p className="text-gray-500 text-sm py-6">
//               No posts in this community yet.
//             </p>
//           )}

//           <div className="space-y-0 border border-gray-800 rounded-xl overflow-hidden">
//             {posts.map((post) => (
//               <PostCard key={post.id} post={post} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>


    

//   );
// };

// export default CommunityDetail;



import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCommunityDetail, getMyCommunities } from "../api/community.api";
import { getCommunityPosts } from "../api/post.api";

import Loader from "../components/common/Loader";
import CommunityHeader from "../components/community/CommunityHeader";
import ModeratorsList from "../components/community/ModeratorsList";
import JoinCommunityButton from "../components/community/JoinCommunityButton";
import CommunityModerators from "../components/community/CommunityModerators";
import PostCard from "../components/post/PostCard";

import { useAuth } from "../context/AuthContext";

const CommunityDetail = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const [community, setCommunity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isJoined, setIsJoined] = useState(false);

  const [posts, setPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState(true);

  useEffect(() => {
    fetchCommunity();
    fetchMembership();
    fetchCommunityPosts();
  }, [id]);

  const fetchMembership = async () => {
    try {
      const res = await getMyCommunities();
      setIsJoined(res.data.some((c) => c.id === Number(id)));
    } catch (err) {
      console.error(err);
    }
  };

  const fetchCommunity = async () => {
    try {
      setLoading(true);
      const res = await getCommunityDetail(id);
      setCommunity(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCommunityPosts = async () => {
    try {
      setPostsLoading(true);
      const res = await getCommunityPosts(id);
      setPosts(res.data.results);
    } catch (err) {
      console.error(err);
    } finally {
      setPostsLoading(false);
    }
  };

  if (loading) return <Loader />;
  if (!community) return null;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-2xl mx-auto min-h-screen pt-20 px-4">
        
        {/* Sticky Header */}
        <div className="sticky top-16 z-10 bg-gray-50 border-b border-gray-200 pb-4">
          <CommunityHeader community={community} />

          <div className="flex justify-end mt-4">
            <JoinCommunityButton
              communityId={community.id}
              isJoinedInitial={isJoined}
              onToggle={setIsJoined}
            />
          </div>
        </div>

        {/* Creator Controls */}
        <CommunityModerators community={community} currentUser={user} />

        {/* Moderators */}
        <ModeratorsList moderators={community.moderators} />

        {/* Posts */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-[#0f2041] border-b border-gray-200 pb-2 mb-4">
            Community Posts
          </h2>

          {postsLoading && <Loader />}

          {!postsLoading && posts.length === 0 && (
            <p className="text-gray-500 text-sm py-6">
              No posts in this community yet.
            </p>
          )}

          <div className="space-y-0 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityDetail;
