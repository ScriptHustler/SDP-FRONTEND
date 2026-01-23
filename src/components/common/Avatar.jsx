import axios from "../../api/axios";
import defaultAvatar from "../../assets/daniel.webp";

const Avatar = ({ src, size = "md" }) => {
  const sizeMap = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const resolveImageUrl = (src) => {
    if (!src) return defaultAvatar;

    // Already absolute
    if (src.startsWith("http")) return src;

    // Use axios baseURL (MOST RELIABLE)
    const baseURL = axios.defaults.baseURL;

    if (!baseURL) return defaultAvatar;

    // Ensure proper slash handling
    return new URL(src, baseURL).toString();
  };

  return (
    <img
      src={resolveImageUrl(src)}
      alt="avatar"
      className={`rounded-full object-cover ${sizeMap[size]}`}
      onError={(e) => {
        e.currentTarget.src = defaultAvatar;
      }}
    />
  );
};

export default Avatar;
