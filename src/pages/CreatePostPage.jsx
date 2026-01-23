import { useNavigate } from "react-router-dom";
import CreatePostForm from "../components/post/CreatePostForm";

const CreatePostPage = () => {
  const navigate = useNavigate();

  const handlePostCreated = (newPost) => {
    navigate("/", { state: { message: "Post created successfully!" } });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <CreatePostForm onPostCreated={handlePostCreated} />
      </div>
    </div>
  );
};

export default CreatePostPage;
