// // src/components/post/PostList.jsx
// import PostCard from "./PostCard";

// const PostList = ({ posts }) => {
//   if (!posts?.length) {
//     return (
//       <p className="text-center text-gray-500">
//         No posts yet
//       </p>
//     );
//   }

//   return (
//     <div className="space-y-6">
//       {posts.map((post) => (
//         <PostCard key={post.id} post={post} />
//       ))}
//     </div>
//   );
// };

// export default PostList;
// /////////////////////////////////////////////////////////////

// import PostCard from "./PostCard";

// const PostList = ({ posts, onRefreshPost }) => {
//   if (!posts?.length) {
//     return (
//       <p className="text-center text-gray-400 py-10 text-lg">
//         No posts yet
//       </p>
//     );
//   }

//   return (
//     <div className="space-y-6">
//       {posts.map((post) => (
//         <PostCard key={post.id} post={post} onRefresh={onRefreshPost} />
//       ))}
//     </div>
//   );
// };

// export default PostList;



import PostCard from "./PostCard";

const PostList = ({ posts, onUpdatePost, onDeletePost }) => {
  if (!posts?.length) {
    return (
      <p className="text-center text-gray-400 py-10">
        No posts yet
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onUpdate={onUpdatePost}
          onDelete={onDeletePost}
        />
      ))}
    </div>
  );
};

export default PostList;

