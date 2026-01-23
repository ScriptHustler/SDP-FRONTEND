// import { useState } from "react";
// import { createPost } from "../../api/post.api";

// const CreatePostForm = ({ onPostCreated, communityId = null }) => {
//   const [postType, setPostType] = useState("TEXT");
//   const [caption, setCaption] = useState("");
//   const [content, setContent] = useState("");
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const resetForm = () => {
//     setCaption("");
//     setContent("");
//     setFile(null);
//     setPostType("TEXT");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     const formData = new FormData();
//     formData.append("post_type", postType);

//     if (caption) formData.append("caption", caption);
//     if (communityId) formData.append("community", communityId);

//     if (postType === "TEXT") {
//       formData.append("content", content);
//     }

//     if (postType === "IMAGE" && file) {
//       formData.append("image", file);
//     }

//     if (postType === "VIDEO" && file) {
//       formData.append("video", file);
//     }

//     try {
//       setLoading(true);
//       const newPost = await createPost(formData);
//       resetForm();
//       onPostCreated?.(newPost);
//     } catch (err) {
//       setError("Failed to create post");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-gray-800 rounded-2xl p-6 space-y-4 shadow-md"
//     >
//       <h3 className="text-xl font-semibold text-white">Create Post</h3>

//       {/* Post Type */}
//       <select
//         value={postType}
//         onChange={(e) => setPostType(e.target.value)}
//         className="w-full bg-gray-700 text-gray-100 border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//       >
//         <option value="TEXT">Text</option>
//         <option value="IMAGE">Image</option>
//         <option value="VIDEO">Video</option>
//       </select>

//       {/* Caption */}
//       <input
//         type="text"
//         placeholder="Caption (optional)"
//         value={caption}
//         onChange={(e) => setCaption(e.target.value)}
//         className="w-full bg-gray-700 text-gray-100 border border-gray-600 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//       />

//       {/* Text Content */}
//       {postType === "TEXT" && (
//         <textarea
//           placeholder="Write something..."
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           className="w-full bg-gray-700 text-gray-100 border border-gray-600 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//           rows={4}
//         />
//       )}

//       {/* File Upload */}
//       {(postType === "IMAGE" || postType === "VIDEO") && (
//         <label className="block w-full border border-dashed border-gray-600 rounded-lg p-4 text-center text-gray-400 hover:border-blue-500 hover:text-blue-400 cursor-pointer transition">
//           {file ? file.name : `Upload ${postType.toLowerCase()}`}
//           <input
//             type="file"
//             accept={postType === "IMAGE" ? "image/*" : "video/*"}
//             onChange={(e) => setFile(e.target.files[0])}
//             className="hidden"
//           />
//         </label>
//       )}

//       {error && <p className="text-sm text-red-500">{error}</p>}

//       <button
//         type="submit"
//         disabled={loading}
//         className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-3 rounded-lg disabled:opacity-50 transition"
//       >
//         {loading ? "Posting..." : "Post"}
//       </button>
//     </form>
//   );
// };

// export default CreatePostForm;


import { useState } from "react";
import { createPost } from "../../api/post.api";

const CreatePostForm = ({ onPostCreated, communityId = null }) => {
  const [postType, setPostType] = useState("TEXT");
  const [caption, setCaption] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const resetForm = () => {
    setCaption("");
    setContent("");
    setFile(null);
    setPostType("TEXT");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData();
    formData.append("post_type", postType);

    if (caption) formData.append("caption", caption);
    if (communityId) formData.append("community", communityId);

    if (postType === "TEXT") {
      formData.append("content", content);
    }

    if (postType === "IMAGE" && file) {
      formData.append("image", file);
    }

    if (postType === "VIDEO" && file) {
      formData.append("video", file);
    }

    try {
      setLoading(true);
      const newPost = await createPost(formData);
      resetForm();
      onPostCreated?.(newPost);
    } catch (err) {
      setError("Failed to create post");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h3 className="text-lg font-semibold text-[#0f2041]">
        Create a post
      </h3>

      {/* Post Type */}
      <select
        value={postType}
        onChange={(e) => setPostType(e.target.value)}
        className="w-full bg-gray-50 text-gray-800 border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0f2041]/30 focus:border-[#0f2041]"
      >
        <option value="TEXT">Text</option>
        <option value="IMAGE">Image</option>
        <option value="VIDEO">Video</option>
      </select>

      {/* Caption */}
      <input
        type="text"
        placeholder="Write a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        className="w-full bg-gray-50 text-gray-800 border border-gray-300 rounded-xl px-4 py-2.5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0f2041]/30 focus:border-[#0f2041]"
      />

      {/* Text Content */}
      {postType === "TEXT" && (
        <textarea
          placeholder="What’s on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          className="w-full bg-gray-50 text-gray-800 border border-gray-300 rounded-xl px-4 py-3 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#0f2041]/30 focus:border-[#0f2041]"
        />
      )}

      {/* File Upload */}
      {(postType === "IMAGE" || postType === "VIDEO") && (
        <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-xl py-8 text-gray-500 hover:border-[#0f2041] hover:text-[#0f2041] cursor-pointer transition">
          <span className="text-sm font-medium">
            {file ? file.name : `Upload ${postType.toLowerCase()}`}
          </span>
          <span className="text-xs text-gray-400">
            Click to browse
          </span>
          <input
            type="file"
            accept={postType === "IMAGE" ? "image/*" : "video/*"}
            onChange={(e) => setFile(e.target.files[0])}
            className="hidden"
          />
        </label>
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#0f2041] hover:bg-[#0c1a36] text-white font-semibold py-2.5 rounded-xl disabled:opacity-50 transition"
      >
        {loading ? "Posting..." : "Post"}
      </button>
    </form>
  );
};

export default CreatePostForm;
