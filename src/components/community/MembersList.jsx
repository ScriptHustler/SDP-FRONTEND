// import Avatar from "../common/Avatar";

// const MembersList = ({ users }) => {
//   if (!users || users.length === 0) {
//     return (
//       <p className="text-gray-500 dark:text-gray-400 text-sm">
//         No members found.
//       </p>
//     );
//   }

//   return (
//     <div className="space-y-3">
//       {users.map((user) => (
//         <div
//           key={user.id}
//           className="
//             flex items-center gap-4 p-3 rounded-xl
//             border border-gray-200 dark:border-gray-800
//             bg-white dark:bg-gray-900
//             hover:bg-gray-50 dark:hover:bg-gray-800
//             transition
//           "
//         >
//           <Avatar src={user.avatar} size="md" />

//           <div className="flex flex-col">
//             <p className="font-semibold text-gray-900 dark:text-gray-100">
//               {user.username}
//             </p>
//             <p className="text-sm text-gray-500 dark:text-gray-400">
//               {user.email}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MembersList;




import Avatar from "../common/Avatar";

const MembersList = ({ users }) => {
  if (!users || users.length === 0) {
    return (
      <p className="text-sm text-gray-500 text-center py-6">
        No members found.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {users.map((user) => (
        <div
          key={user.id}
          className="
            group flex items-center gap-4 p-4 rounded-2xl
            bg-white
            border border-gray-200
            shadow-sm
            hover:shadow-md
            hover:border-[#0f2041]/30
            transition-all duration-200
          "
        >
          {/* Avatar */}
          <div className="shrink-0">
            <Avatar src={user.avatar} size="md" />
          </div>

          {/* User Info */}
          <div className="flex flex-col min-w-0">
            <p
              className="
                font-semibold text-gray-900
                group-hover:text-[#0f2041]
                transition-colors
              "
            >
              {user.username}
            </p>
            <p className="text-sm text-gray-500 truncate">
              {user.email}
            </p>
          </div>

          {/* Decorative Accent */}
          <div
            className="
              ml-auto h-8 w-1 rounded-full
              bg-transparent
              group-hover:bg-[#0f2041]
              transition-all
            "
          />
        </div>
      ))}
    </div>
  );
};

export default MembersList;
