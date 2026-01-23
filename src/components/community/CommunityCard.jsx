// import { Link } from "react-router-dom";

// const CommunityCard = ({ community }) => {
//   return (
//     <div className="border border-gray-700 rounded-xl p-5 bg-[#0f1419] shadow-sm hover:shadow-md transition duration-200">
//       <div className="flex justify-between items-start">
//         <div>
//           <h2 className="text-lg font-semibold text-white">
//             {community.name}
//           </h2>
//           <p className="text-sm text-gray-400 mt-1 line-clamp-2">
//             {community.about}
//           </p>
//         </div>
//       </div>

//       <div className="flex justify-between items-center mt-4 text-sm">
//         <span className="text-gray-400">
//           {community.members_count.toLocaleString()} members
//         </span>

//         <Link
//           to={`/communities/${community.id}`}
//           className="px-3 py-1 rounded-full bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition"
//         >
//           View
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CommunityCard;

import { Link } from "react-router-dom";

const CommunityCard = ({ community }) => {
  return (
    <div
      className="
        group
        bg-white
        border border-gray-200
        rounded-2xl
        p-6
        shadow-sm
        hover:shadow-lg
        hover:border-[#0f2041]/40
        transition-all
        duration-300
      "
    >
      {/* Top section */}
      <div className="flex justify-between items-start gap-4">
        <div>
          <h2
            className="
              text-lg
              font-semibold
              text-[#0f2041]
              tracking-tight
              group-hover:underline
              underline-offset-4
              transition
            "
          >
            {community.name}
          </h2>

          <p className="text-sm text-gray-600 mt-2 line-clamp-2 leading-relaxed">
            {community.about}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6 text-sm">
        <span className="text-gray-500">
          {community.members_count.toLocaleString()} members
        </span>

        <Link
          to={`/communities/${community.id}`}
          className="
            inline-flex
            items-center
            gap-1.5
            px-4
            py-2
            rounded-full
            bg-[#0f2041]
            text-white
            text-sm
            font-medium
            hover:bg-[#132b5f]
            hover:shadow-md
            transition-all
          "
        >
          View
          <span className="text-base">→</span>
        </Link>
      </div>
    </div>
  );
};

export default CommunityCard;

