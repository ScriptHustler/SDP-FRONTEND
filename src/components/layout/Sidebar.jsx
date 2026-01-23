// // components/layout/NavbarSidebar.jsx
// import { NavLink } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import Logout from "../../pages/Logout";

// const NavbarSidebar = () => {
//   const { user } = useAuth();

//   const sidebarItem =
//     "flex items-center gap-4 px-5 py-3 rounded-full text-base text-[#0f2041] hover:bg-[#eef2f9] transition";
//   const sidebarActive =
//     "font-semibold text-[#0f2041] bg-[#e2e8f4]";

//   return (
//     <>
//       {/* Sidebar */}
//       {user && (
//         <aside className="w-72 h-screen fixed left-0 top-16 bg-white border-r border-[#d6deee] flex flex-col justify-between shadow-sm">
          
//           {/* Top Section: Logo + Navigation */}
//           <div>
//             {/* Logo */}
//             <div className="px-5 py-4">
//               <NavLink to="/" className="text-2xl font-bold text-[#0f2041]">
//                 Voyage
//               </NavLink>
//             </div>

//             {/* Navigation */}
//             <nav className="flex-1 px-2 space-y-1 overflow-y-auto">
//               <NavLink
//                 to={`/profile/${user.username}`}
//                 className={({ isActive }) =>
//                   `${sidebarItem} ${isActive ? sidebarActive : ""}`
//                 }
//               >
//                 {user.username}
//               </NavLink>

//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   `${sidebarItem} ${isActive ? sidebarActive : ""}`
//                 }
//               >
//                 Home
//               </NavLink>

//               <NavLink
//                 to="/communities"
//                 className={({ isActive }) =>
//                   `${sidebarItem} ${isActive ? sidebarActive : ""}`
//                 }
//               >
//                 Communities
//               </NavLink>

//               <NavLink
//                 to="/communities/me"
//                 className={({ isActive }) =>
//                   `${sidebarItem} ${isActive ? sidebarActive : ""}`
//                 }
//               >
//                 My Communities
//               </NavLink>

//               <NavLink
//                 to="/search"
//                 className={({ isActive }) =>
//                   `${sidebarItem} ${isActive ? sidebarActive : ""}`
//                 }
//               >
//                 Search
//               </NavLink>

//               {(user.role === "ADMIN" || user.role === "CREATOR") && (
//                 <NavLink
//                   to="/communities/create"
//                   className="block mt-6 mx-4 text-center bg-[#0f2041] hover:bg-[#0b1832] text-white py-3 rounded-full font-semibold transition shadow-sm"
//                 >
//                   + Create Community
//                 </NavLink>
//               )}
//             </nav>
//           </div>

//           {/* Bottom Section (disabled as in original)
//           <div className="px-5 py-6 border-t border-[#d6deee]">
//             <Logout />
//           </div>
//           */}
//         </aside>
//       )}
//     </>
//   );
// };

// export default NavbarSidebar;
// // ab app



// ################################## /////

// components/layout/NavbarSidebar.jsx
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Logout from "../../pages/Logout";

const NavbarSidebar = () => {
  const { user } = useAuth();

  const sidebarItem =
    "flex items-center gap-4 px-5 py-3 rounded-lg text-base text-[#0f2041] hover:bg-[#eef2f9] transition";
  const sidebarActive =
    "font-semibold text-[#0f2041] bg-[#e2e8f4]";

  return (
    <>
      {user && (
        <aside className="
          fixed 
          left-0 
          top-0 
          inset-y-0 
          w-72 
          bg-white 
          border-r 
          border-[#d6deee] 
          flex 
          flex-col 
          shadow-sm
        ">
          {/* Logo */}
          <div className="px-6 py-6 border-b border-[#e6ecf5]">
            <NavLink to="/" className="text-2xl font-bold text-[#0f2041]">
              Voyage
            </NavLink>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            <NavLink
              to={`/profile/${user.username}`}
              className={({ isActive }) =>
                `${sidebarItem} ${isActive ? sidebarActive : ""}`
              }
            >
              {user.username}
            </NavLink>

            <NavLink
              to="/"
              className={({ isActive }) =>
                `${sidebarItem} ${isActive ? sidebarActive : ""}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/communities"
              className={({ isActive }) =>
                `${sidebarItem} ${isActive ? sidebarActive : ""}`
              }
            >
              Communities
            </NavLink>

            <NavLink
              to="/communities/me"
              className={({ isActive }) =>
                `${sidebarItem} ${isActive ? sidebarActive : ""}`
              }
            >
              My Communities
            </NavLink>

            <NavLink
              to="/search"
              className={({ isActive }) =>
                `${sidebarItem} ${isActive ? sidebarActive : ""}`
              }
            >
              Search
            </NavLink>

            {(user.role === "ADMIN" || user.role === "CREATOR") && (
              <NavLink
                to="/communities/create"
                className="
                  block 
                  mt-6 
                  mx-2 
                  text-center 
                  bg-[#0f2041] 
                  hover:bg-[#0b1832] 
                  text-white 
                  py-3 
                  rounded-lg 
                  font-semibold 
                  transition 
                  shadow-sm
                "
              >
                + Create Community
              </NavLink>
            )}
          </nav>

          {/* Bottom section intentionally untouched / disabled */}
        </aside>
      )}
    </>
  );
};

export default NavbarSidebar;
