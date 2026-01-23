// import Avatar from "../common/Avatar";

// const ModeratorsList = ({ moderators }) => {
//   if (!moderators || moderators.length === 0) {
//     return (
//       <p className="text-sm text-gray-500 mt-6">
//         No moderators assigned
//       </p>
//     );
//   }

//   return (
//     <div className="mt-8">
//       <h2 className="text-lg font-semibold mb-4">
//         Moderators
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//         {moderators.map((user) => (
//           <div
//             key={user.id}
//             className="flex items-center gap-3 px-4 py-3 border border-gray-800 rounded-xl bg-black hover:bg-gray-950 transition"
//           >
//             <Avatar src={user.avatar} />
//             <div>
//               <p className="font-medium leading-none">
//                 {user.username}
//               </p>
//               <p className="text-xs text-gray-500">
//                 {user.email}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ModeratorsList;



import Avatar from "../common/Avatar";

const ModeratorsList = ({ moderators }) => {
  if (!moderators || moderators.length === 0) {
    return (
      <p className="text-sm text-gray-500 mt-6">
        No moderators assigned
      </p>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-[#0f2041] mb-4">
        Moderators
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {moderators.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-3 px-4 py-3 border border-gray-200 rounded-xl bg-white shadow-sm"
          >
            <Avatar src={user.avatar} />
            <div>
              <p className="font-medium">{user.username}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModeratorsList;
