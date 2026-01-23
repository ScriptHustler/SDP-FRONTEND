// import { useState } from "react";
// import { useAuth } from "../../context/AuthContext";
// import { searchUsers } from "../../api/user.api";
// import UserCard from "../../user/UserCard";
// import { motion, AnimatePresence } from "framer-motion";

// const Search = () => {
//   const { user: currentUser } = useAuth();
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     if (!query.trim()) return;

//     setLoading(true);
//     try {
//       const res = await searchUsers(query.trim());
//       setResults(res.data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 flex flex-col items-center px-4 py-12">
//       <div className="w-full max-w-lg bg-gray-800 bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl p-8 space-y-6">
//         <h2 className="text-3xl font-bold text-white text-center">
//           Search Users
//         </h2>

//         {/* Search Form */}
//         <form className="flex gap-3 w-full" onSubmit={handleSearch}>
//           <input
//             type="text"
//             placeholder="Search by username..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             className="flex-1 bg-gray-700 text-gray-100 rounded-2xl p-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-gray-800 transition-all duration-300 transform hover:scale-[1.02]"
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 rounded-2xl transition-all duration-300 transform hover:scale-105"
//           >
//             Search
//           </button>
//         </form>

//         {/* Loading */}
//         {loading && (
//           <div className="flex justify-center py-4">
//             <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//           </div>
//         )}

//         {/* No Results */}
//         {!loading && results.length === 0 && query && (
//           <p className="text-gray-400 text-center">No users found.</p>
//         )}

//         {/* Results */}
//         <div className="space-y-4">
//           <AnimatePresence>
//             {results.map((user) => (
//               <motion.div
//                 key={user.id}
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <UserCard
//                   user={user}
//                   currentUser={currentUser}
//                   className="bg-gray-700 bg-opacity-80 rounded-2xl p-4 hover:bg-gray-600 hover:scale-[1.02] transition-transform duration-300"
//                 />
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Search;


import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { searchUsers } from "../../api/user.api";
import UserCard from "../../user/UserCard";
import { motion, AnimatePresence } from "framer-motion";

const Search = () => {
  const { user: currentUser } = useAuth();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const res = await searchUsers(query.trim());
      setResults(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Search Section */}
      <div className="relative overflow-hidden">
        {/* Brand surface */}
        <div className="absolute inset-0 bg-[#0f2041]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />

        <div className="relative max-w-3xl mx-auto px-6 pt-28 pb-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl font-semibold tracking-tight text-white"
          >
            Find people on Voyage
          </motion.h1>

          <p className="mt-3 text-sm text-white/80">
            Search by username and connect instantly
          </p>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="
              mt-10
              mx-auto
              max-w-2xl
              flex
              items-center
              gap-3
              bg-white
              rounded-full
              p-2
              shadow-2xl
            "
          >
            <input
              type="text"
              placeholder="Type a username…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="
                flex-1
                h-12
                px-5
                text-sm
                text-gray-800
                placeholder-gray-400
                rounded-full
                focus:outline-none
              "
            />

            <button
              type="submit"
              className="
                h-12
                px-7
                rounded-full
                bg-[#0f2041]
                text-white
                text-sm
                font-medium
                hover:bg-[#132b5f]
                transition
              "
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Results Section */}
      <div className="relative -mt-12 max-w-3xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-6">
          {/* Loading */}
          {loading && (
            <div className="flex justify-center py-10">
              <div className="w-7 h-7 border-2 border-[#0f2041] border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {/* Empty State */}
          {!loading && results.length === 0 && query && (
            <p className="text-sm text-gray-400 text-center py-10">
              No users found for “{query}”
            </p>
          )}

          {/* Results */}
          <div className="space-y-3">
            <AnimatePresence>
              {results.map((user) => (
                <motion.div
                  key={user.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                >
                  <UserCard
                    user={user}
                    currentUser={currentUser}
                    className="
                      bg-white
                      border border-gray-200
                      rounded-2xl
                      p-4
                      hover:border-[#0f2041]
                      hover:shadow-md
                      transition
                    "
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
