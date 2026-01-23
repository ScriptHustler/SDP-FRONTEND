// import { useEffect, useState } from "react";
// import { getMyCommunities } from "../api/community.api";

// import CommunityCard from "../components/community/CommunityCard";
// import Loader from "../components/common/Loader";

// const MyCommunities = () => {
//   const [communities, setCommunities] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchMyCommunities();
//   }, []);

//   const fetchMyCommunities = async () => {
//     try {
//       setLoading(true);
//       const res = await getMyCommunities();
//       setCommunities(res.data);
//     } catch (err) {
//       console.error("Failed to load my communities", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading)
//     return (
//       <div className="min-h-screen bg-black flex items-center justify-center">
//         <Loader />
//       </div>
//     );

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Page Container */}
//       <div className="max-w-xl mx-auto border-x border-gray-800 min-h-screen pt-16">
//         {/* Header */}
//         <div className="sticky top-16 z-10 bg-black border-b border-gray-800 px-4 py-3 backdrop-blur-md">
//           <h1 className="text-xl font-bold text-white">My Communities</h1>
//         </div>

//         {/* Content */}
//         <div className="px-4 py-4 space-y-3">
//           {communities.length === 0 ? (
//             <div className="text-center text-gray-500 py-12 text-sm">
//               You haven’t joined any communities yet.
//             </div>
//           ) : (
//             communities.map((community) => (
//               <CommunityCard key={community.id} community={community} />
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyCommunities;



import { useEffect, useState } from "react";
import { getMyCommunities } from "../api/community.api";
import CommunityCard from "../components/community/CommunityCard";
import Loader from "../components/common/Loader";

const MyCommunities = () => {
  const [communities, setCommunities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMyCommunities();
  }, []);

  const fetchMyCommunities = async () => {
    try {
      setLoading(true);
      const res = await getMyCommunities();
      setCommunities(res.data);
    } catch (err) {
      console.error("Failed to load my communities", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
        <Loader />
      </div>
    );

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f2041]">
      <div className="max-w-xl mx-auto min-h-screen pt-16 border-x border-[#d6deee] bg-white">
        
        <div className="sticky top-16 z-10 bg-white border-b border-[#d6deee] px-4 py-3">
          <h1 className="text-xl font-bold">My Communities</h1>
        </div>

        <div className="px-4 py-4 space-y-3">
          {communities.length === 0 ? (
            <div className="text-center text-[#64748b] py-12 text-sm">
              You haven’t joined any communities yet.
            </div>
          ) : (
            communities.map((community) => (
              <CommunityCard key={community.id} community={community} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCommunities;
