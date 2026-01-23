import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getFollowers } from "../api/user.api";
import UserCard from "../user/UserCard";
import Loader from "../components/common/Loader";

const Followers = () => {
  const { username } = useParams();
  const { user: currentUser } = useAuth();
  const [followers, setFollowers] = useState([]);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchFollowers = async (pageNumber = 1) => {
    setLoading(true);
    try {
      const res = await getFollowers(username, pageNumber);
      const results = Array.isArray(res.data.results) ? res.data.results : [];

      setFollowers(prev =>
        pageNumber === 1 ? results : [...prev, ...results]
      );
      setNextPage(res.data.next);
      if (res.data.next) setPage(pageNumber + 1);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setFollowers([]);
    setPage(1);
    fetchFollowers(1);
  }, [username]);

  return (
    <div className="min-h-screen bg-[#f8fafc] px-4">
      <div className="max-w-2xl mx-auto mt-6 bg-white rounded-2xl border border-[#d6deee] shadow-sm">

        {/* Header */}
        <h2 className="text-xl md:text-2xl font-bold text-[#0f2041] px-6 py-4 border-b border-[#d6deee]">
          Followers of {username}
        </h2>

        {/* Loader */}
        {loading && (
          <div className="flex justify-center items-center py-10">
            <Loader />
          </div>
        )}

        {/* Empty State */}
        {!loading && followers.length === 0 && (
          <p className="text-[#64748b] py-10 text-center text-sm">
            No followers found.
          </p>
        )}

        {/* List */}
        {!loading &&
          followers.map((f) => (
            <UserCard
              key={f.id}
              user={f}
              currentUser={currentUser}
            />
          ))}

        {/* Pagination */}
        {nextPage && !loading && (
          <div className="flex justify-center py-6">
            <button
              onClick={() => fetchFollowers(page)}
              className="px-6 py-2 rounded-full bg-[#0f2041] text-white font-medium hover:bg-[#0b1832] transition shadow-sm"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Followers;

// to ye desing ko or kese update krna hi batao  admin wale to sahi lgrhe
// member wale ko krna pdega ek aur prob h post mai bg black kyu  ha co ek alag card compnent hai vo baad me hojyega sahi


// or members ke followers or following list me kya changes krne ha kyu k admin or meber k liye same he desing ahi
// filahl to! any idea fron you end? batao pele kaha dekha ye admin ka or ab member ka show kru?yhi hana??kya borha

// are hamne abhi kons page design kiya pta hai tujhr???? yaar quenee jlde bol nhiii chalo abhi konse page design kiye hamne admin folloers and following page kia thik to me indono ke design ke baat krha to agar tumhe idea ho to batao k kese krna hi design bolo jldee yaar tujhe kuch hoto nhi rha naa?????? ghabrhat ??haa sir ghumra tu apne hisab s kr design mai pani peke aare quenee thode der rest krle letja aagye chl conti kr mai yahi hu ha thik krha