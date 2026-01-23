// import { useEffect, useState } from "react";
// import { getCommunities } from "../../api/community.api";
// import CommunityCard from "./CommunityCard";
// import Loader from "../common/Loader";

// const CommunityList = () => {
//   const [communities, setCommunities] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [next, setNext] = useState(null);
//   const [previous, setPrevious] = useState(null);

//   useEffect(() => {
//     fetchCommunities();
//   }, [page]);

//   const fetchCommunities = async () => {
//     try {
//       setLoading(true);
//       const res = await getCommunities({ page });
//       setCommunities(res.data.results);
//       setNext(res.data.next);
//       setPrevious(res.data.previous);
//     } catch (err) {
//       console.error("Failed to load communities", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) return <Loader />;

//   return (
//     <div className="space-y-4">
//       {communities.map((community) => (
//         <CommunityCard key={community.id} community={community} />
//       ))}

//       {/* Pagination */}
//       <div className="flex justify-between pt-4">
//         <button
//           disabled={!previous}
//           onClick={() => setPage((p) => p - 1)}
//           className="px-4 py-2 border border-gray-700 rounded-full bg-[#0f1419] text-gray-300 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
//         >
//           Previous
//         </button>

//         <button
//           disabled={!next}
//           onClick={() => setPage((p) => p + 1)}
//           className="px-4 py-2 border border-gray-700 rounded-full bg-[#0f1419] text-gray-300 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CommunityList;



import { useEffect, useState } from "react";
import { getCommunities } from "../../api/community.api";
import CommunityCard from "./CommunityCard";
import Loader from "../common/Loader";

const CommunityList = () => {
  const [communities, setCommunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);

  useEffect(() => {
    fetchCommunities();
  }, [page]);

  const fetchCommunities = async () => {
    try {
      setLoading(true);
      const res = await getCommunities({ page });
      setCommunities(res.data.results);
      setNext(res.data.next);
      setPrevious(res.data.previous);
    } catch (err) {
      console.error("Failed to load communities", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="space-y-6">
      {communities.map((community) => (
        <CommunityCard key={community.id} community={community} />
      ))}

      {/* Pagination */}
      <div className="flex justify-between items-center pt-8">
        <button
          disabled={!previous}
          onClick={() => setPage((p) => p - 1)}
          className="
            px-5 py-2.5 rounded-full text-sm font-medium
            border border-gray-300
            bg-white text-gray-600
            hover:border-[#0f2041] hover:text-[#0f2041]
            hover:shadow-sm
            disabled:opacity-40 disabled:cursor-not-allowed
            transition-all
          "
        >
          ← Previous
        </button>

        <button
          disabled={!next}
          onClick={() => setPage((p) => p + 1)}
          className="
            px-5 py-2.5 rounded-full text-sm font-medium
            bg-[#0f2041] text-white
            hover:bg-[#132b5f]
            hover:shadow-md
            disabled:opacity-40 disabled:cursor-not-allowed
            transition-all
          "
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default CommunityList;
