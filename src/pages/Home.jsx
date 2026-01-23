// import { useAuth } from "../context/AuthContext";
// import { useEffect, useState, useCallback } from "react";
// import { getFeed, getPost } from "../api/post.api";
// import PostList from "../components/post/PostList";
// import Loader from "../components/common/Loader";
// import { useNavigate, useLocation } from "react-router-dom";
// import Search from "../components/layout/Search";

// const Home = () => {
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [posts, setPosts] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const [loading, setLoading] = useState(true);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);


//   // Fetch paginated feed
//   const fetchFeed = useCallback(async (pageNum = 1) => {
//     setLoading(true);
//     try {
//       const data = await getFeed(pageNum);
//       if (pageNum === 1) setPosts(data.results);
//       else setPosts((prev) => [...prev, ...data.results]);
//       setHasMore(!!data.next);
//       setPage(pageNum);
//     } catch (err) {
//       console.error("Failed to fetch feed", err);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   // Initial load
//   useEffect(() => {
//     fetchFeed(1);
//   }, [fetchFeed]);

//   useEffect(() => {
//     if (query.length > 0) {
//       // Fake API filter example
//       const filtered = posts.filter((post) =>
//         post.title.toLowerCase().includes(query.toLowerCase())
//       );
//       setResults(filtered);
//     } else {
//       setResults([]);
//     }
//   }, [query]);

//   // Infinite scroll
//   const handleScroll = useCallback(() => {
//     if (
//       window.innerHeight + window.scrollY >=
//       document.body.offsetHeight - 500 &&
//       !loading &&
//       hasMore
//     ) {
//       fetchFeed(page + 1);
//     }
//   }, [fetchFeed, page, loading, hasMore]);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   // Refresh a single post (after like/share/comment/edit)
//   const refreshPost = async (postId) => {
//     try {
//       const updatedPost = await getPost(postId);
//       setPosts((prev) =>
//         prev.map((p) => (p.id === postId ? updatedPost : p))
//       );
//     } catch (err) {
//       console.error("Failed to refresh post", err);
//     }
//   };

//   // Show success message if navigated from create post page
//   useEffect(() => {
//     if (location.state?.message) {
//       setSuccessMessage(location.state.message);
//       // Clear message after 3 seconds
//       const timer = setTimeout(() => setSuccessMessage(""), 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [location.state]);

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Feed Container */}
//       <div className="max-w-xl mx-auto border-x border-gray-800 min-h-screen pt-16 px-4">
//         {/* Feed Header */}
//         <div className="sticky top-16 z-10 bg-black border-b border-gray-800 px-4 py-3">
//           <h1 className="text-xl font-bold">Home</h1>
//         </div>

//         {/* Success Message */}
//         {successMessage && (
//           <div className="px-4 py-3 text-center text-green-500 text-sm border-b border-gray-800">
//             {successMessage}
//           </div>
//         )}


//         {/* Empty State */}
//         {posts.length === 0 && !loading && (
//           <p className="text-center text-gray-500 py-10">
//             No posts yet
//           </p>
//         )}

//         {/* Feed */}
//         <div className="space-y-0">
//           <PostList posts={posts} onRefreshPost={refreshPost} />
//         </div>

//         {/* Loader */}
//         {loading && (
//           <div className="py-6">
//             <Loader />
//           </div>
//         )}

//         {/* End Message */}
//         {!hasMore && posts.length > 0 && (
//           <p className="text-center text-gray-500 py-6 text-sm">
//             No more posts
//           </p>
//         )}
//       </div>
//       {/* Floating Create Post Button (X-style) */}
//       <button
//         onClick={() => navigate("/create-post")}
//         className="fixed bottom-6 right-6 z-50 bg-blue-500 hover:bg-blue-600 transition text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
//         aria-label="Create Post"
//       >
//         {/* Feather (Compose) Icon */}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             fillRule="evenodd"
//             d="M12 5a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H6a1 1 0 110-2h5V6a1 1 0 011-1z"
//             clipRule="evenodd"
//           />
//         </svg>

//       </button>

// {/* sun  pele apne header design krte hai navabr?  ha thik chlo jldi ha */}

//     </div>
//   );

// };

// export default Home;

// ------------------------------------------------------------------

// import { useAuth } from "../context/AuthContext";
// import { useEffect, useState, useCallback } from "react";
// import { getFeed, getPost } from "../api/post.api";
// import PostList from "../components/post/PostList";
// import Loader from "../components/common/Loader";
// import { useNavigate, useLocation } from "react-router-dom";
// import Search from "../components/layout/Search";

// const Home = () => {
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [posts, setPosts] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const [loading, setLoading] = useState(true);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);

//   // Fetch paginated feed
//   const fetchFeed = useCallback(async (pageNum = 1) => {
//     setLoading(true);
//     try {
//       const data = await getFeed(pageNum);
//       if (pageNum === 1) setPosts(data.results);
//       else setPosts((prev) => [...prev, ...data.results]);
//       setHasMore(!!data.next);
//       setPage(pageNum);
//     } catch (err) {
//       console.error("Failed to fetch feed", err);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   // Initial load
//   useEffect(() => {
//     fetchFeed(1);
//   }, [fetchFeed]);

//   useEffect(() => {
//     if (query.length > 0) {
//       const filtered = posts.filter((post) =>
//         post.title.toLowerCase().includes(query.toLowerCase())
//       );
//       setResults(filtered);
//     } else {
//       setResults([]);
//     }
//   }, [query]);

//   // Infinite scroll
//   const handleScroll = useCallback(() => {
//     if (
//       window.innerHeight + window.scrollY >=
//         document.body.offsetHeight - 500 &&
//       !loading &&
//       hasMore
//     ) {
//       fetchFeed(page + 1);
//     }
//   }, [fetchFeed, page, loading, hasMore]);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   // Refresh a single post
//   const refreshPost = async (postId) => {
//     try {
//       const updatedPost = await getPost(postId);
//       setPosts((prev) =>
//         prev.map((p) => (p.id === postId ? updatedPost : p))
//       );
//     } catch (err) {
//       console.error("Failed to refresh post", err);
//     }
//   };

//   // Success message
//   useEffect(() => {
//     if (location.state?.message) {
//       setSuccessMessage(location.state.message);
//       const timer = setTimeout(() => setSuccessMessage(""), 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [location.state]);

//   return (
//     <div className="min-h-screen bg-[#f8fafc] text-[#0f2041]">
//       {/* Feed Container */}
//       <div className="max-w-xl mx-auto min-h-screen pt-16 px-4 border-x border-[#d6deee] bg-white">
        
//         {/* Feed Header */}
//         <div className="sticky top-0 z-10 bg-white border-b border-w-100 border-[#d6deee] px-1 py-3">
//           <h1 className="text-xl font-bold text-[#0f2041]">
//             Home
//           </h1>
//         </div>

//         {/* Success Message */}
//         {successMessage && (
//           <div className="px-4 py-3 text-center text-green-600 text-sm border-b border-[#d6deee] bg-green-50">
//             {successMessage}
//           </div>
//         )}

//         {/* Empty State */}
//         {posts.length === 0 && !loading && (
//           <p className="text-center text-gray-500 py-10">
//             No posts yet
//           </p>
//         )}

//         {/* Feed */}
//         <div className="space-y-0">
//           <PostList posts={posts} onRefreshPost={refreshPost} />
//         </div>

//         {/* Loader */}
//         {loading && (
//           <div className="py-6">
//             <Loader />
//           </div>
//         )}

//         {/* End Message */}
//         {!hasMore && posts.length > 0 && (
//           <p className="text-center text-gray-500 py-6 text-sm">
//             No more posts
//           </p>
//         )}
//       </div>

//       {/* Floating Create Post Button */}
//       <button
//         onClick={() => navigate("/create-post")}
//         className="fixed bottom-6 right-6 z-50 bg-[#0f2041] hover:bg-[#0b1832] transition text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
//         aria-label="Create Post"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             fillRule="evenodd"
//             d="M12 5a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H6a1 1 0 110-2h5V6a1 1 0 011-1z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>
//     </div>

   

//   );
// };

// export default Home;



import { useAuth } from "../context/AuthContext";
import { useEffect, useState, useCallback } from "react";
import { getFeed } from "../api/post.api";
import PostList from "../components/post/PostList";
import Loader from "../components/common/Loader";
import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch feed
  const fetchFeed = useCallback(async (pageNum = 1) => {
    setLoading(true);
    try {
      const data = await getFeed(pageNum);
      if (pageNum === 1) setPosts(data.results);
      else setPosts((prev) => [...prev, ...data.results]);
      setHasMore(!!data.next);
      setPage(pageNum);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFeed(1);
  }, [fetchFeed]);

  // 🔁 Update a post instantly
  const handleUpdatePost = (updatedPost) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === updatedPost.id ? updatedPost : p))
    );
  };

  // 🗑️ Delete a post instantly
  const handleDeletePost = (postId) => {
    setPosts((prev) => prev.filter((p) => p.id !== postId));
  };

  useEffect(() => {
    if (location.state?.message) {
      setSuccessMessage(location.state.message);
      const timer = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="max-w-xl mx-auto min-h-screen pt-16 px-4 border-x bg-white">

        <div className="sticky top-0 z-10 bg-white border-b px-1 py-3">
          <h1 className="text-xl font-bold text-[#0f2041]">Home</h1>
        </div>

        {successMessage && (
          <div className="py-3 text-center text-green-600 bg-green-50 text-sm">
            {successMessage}
          </div>
        )}

        <PostList
          posts={posts}
          onUpdatePost={handleUpdatePost}
          onDeletePost={handleDeletePost}
        />

        {loading && <Loader />}

        {!hasMore && posts.length > 0 && (
          <p className="text-center text-gray-400 py-6 text-sm">
            No more posts
          </p>
        )}
      </div>

      <button
        onClick={() => navigate("/create-post")}
        className="fixed bottom-6 right-6 bg-[#0f2041] text-white w-14 h-14 rounded-full shadow-lg"
      >
        +
      </button>
    </div>
  );
};

export default Home;
