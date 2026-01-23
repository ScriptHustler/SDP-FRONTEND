// import { Link } from "react-router-dom";

// const CommunityHeader = ({ community }) => {
//   return (
//     <div className="border-b border-gray-700 pb-4 mb-6">
//       <h1 className="text-3xl font-bold text-white">
//         {community.name}
//       </h1>

//       <p className="text-gray-400 mt-2">
//         {community.about}
//       </p>

//       <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
//         <span className="text-gray-400">
//           Created by <strong className="text-white">{community.created_by}</strong>
//         </span>
//         <span className="text-gray-400">
//           {community.members_count} members
//         </span>
//       </div>

//       <Link
//         to={`/communities/${community.id}/members`}
//         className="text-blue-500 hover:underline mt-3 inline-block"
//       >
//         View members
//       </Link>
//     </div>
//   );
// };

// export default CommunityHeader;


import { Link } from "react-router-dom";

const CommunityHeader = ({ community }) => {
  return (
    <div className="pb-4">
      <h1 className="text-3xl font-bold text-[#0f2041]">
        {community.name}
      </h1>

      <p className="text-gray-600 mt-2">
        {community.about}
      </p>

      <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
        <span>
          Created by <strong className="text-gray-800">{community.created_by}</strong>
        </span>
        <span>{community.members_count} members</span>
      </div>

      <Link
        to={`/communities/${community.id}/members`}
        className="text-[#0f2041] hover:underline mt-3 inline-block text-sm font-medium"
      >
        View members
      </Link>
    </div>
  );
};

export default CommunityHeader;
