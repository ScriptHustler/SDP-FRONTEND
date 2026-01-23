// import CommunityList from "../components/community/CommunityList";

// const Communities = () => {
//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Main feed container (aligned with Home) */}
//       <div className="max-w-xl mx-auto border-x border-gray-800 min-h-screen pt-16 px-4">
//         {/* Header */}
//         <div className="sticky top-16 z-10 bg-black border-b border-gray-800 px-4 py-3">
//           <h1 className="text-xl font-bold">Communities</h1>
//         </div>

//         {/* Communities List */}
//         <div className="space-y-4 mt-4">
//           <CommunityList />
//         </div>
//       </div>
//     </div>


//   );
// };

// export default Communities;



import CommunityList from "../components/community/CommunityList";

const Communities = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Main container */}
      <div className="max-w-2xl mx-auto min-h-screen pt-20 px-4">

        {/* Header */}
        <div className="sticky top-16 z-10 bg-gray-50/80 backdrop-blur border-b border-gray-200 px-2 py-4">
          <h1 className="text-2xl font-bold text-[#0f2041] tracking-tight">
            Communities
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Discover and join communities that match your interests
          </p>
        </div>

        {/* Communities List */}
        <div className="space-y-5 mt-6">
          <CommunityList />
        </div>
      </div>
    </div>
  );
};

export default Communities;
