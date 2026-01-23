import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCommunityMembers } from "../api/community.api";

import Loader from "../components/common/Loader";
import MembersList from "../components/community/MembersList";

const CommunityMembers = () => {
  const { id } = useParams();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);

  useEffect(() => {
    fetchMembers();
    // eslint-disable-next-line
  }, [id, page]);

  const fetchMembers = async () => {
    try {
      setLoading(true);
      const res = await getCommunityMembers(id, { page });
      setUsers(res.data.results);
      setNext(res.data.next);
      setPrevious(res.data.previous);
    } catch (err) {
      console.error("Failed to load community members", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  // return (
  //   <div className="flex justify-center w-full">
  //     <div className="w-full max-w-2xl px-4 py-6">
  //       {/* Page Header */}
  //       <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
  //         Community Members
  //       </h1>

  //       {/* Members Card */}
  //       <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-4">
  //         <MembersList users={users} />

  //         {/* Pagination */}
  //         <div className="flex justify-between mt-6">
  //           <button
  //             disabled={!previous}
  //             onClick={() => setPage((p) => p - 1)}
  //             className="px-4 py-2 rounded-full border text-sm font-medium
  //               bg-white dark:bg-gray-800
  //               text-gray-700 dark:text-gray-200
  //               border-gray-300 dark:border-gray-700
  //               hover:bg-gray-100 dark:hover:bg-gray-700
  //               disabled:opacity-50 disabled:cursor-not-allowed"
  //           >
  //             Previous
  //           </button>

  //           <button
  //             disabled={!next}
  //             onClick={() => setPage((p) => p + 1)}
  //             className="px-4 py-2 rounded-full border text-sm font-medium
  //               bg-white dark:bg-gray-800
  //               text-gray-700 dark:text-gray-200
  //               border-gray-300 dark:border-gray-700
  //               hover:bg-gray-100 dark:hover:bg-gray-700
  //               disabled:opacity-50 disabled:cursor-not-allowed"
  //           >
  //             Next
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

return (
  <div className="min-h-screen bg-gray-50 flex justify-center w-full">
    <div className="w-full max-w-3xl px-4 py-10">
      
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0f2041]">
          Community Members
        </h1>
        <p className="text-gray-500 mt-1 text-sm">
          People who are part of this community
        </p>
      </div>

      {/* Members Card */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        
        {/* Members List */}
        <div className="p-5">
          <MembersList users={users} />
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100" />

        {/* Pagination */}
        <div className="flex justify-between items-center px-5 py-4 bg-gray-50">
          <button
            disabled={!previous}
            onClick={() => setPage((p) => p - 1)}
            className="
              px-5 py-2 rounded-full text-sm font-semibold
              border border-gray-300
              text-gray-700
              hover:bg-gray-100
              disabled:opacity-40 disabled:cursor-not-allowed
              transition
            "
          >
            ← Previous
          </button>

          <button
            disabled={!next}
            onClick={() => setPage((p) => p + 1)}
            className="
              px-5 py-2 rounded-full text-sm font-semibold
              bg-[#0f2041]
              text-white
              hover:bg-[#132a55]
              disabled:opacity-40 disabled:cursor-not-allowed
              transition
            "
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  </div>
);

};

export default CommunityMembers;




