import { useState } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { FaCamera } from "react-icons/fa";

export default function Header() {
  // Function to handle sign-in
  const [isSignedIn, setIsSignedIn] = useState(false);
  const handleSignOut = () => {
    setIsSignedIn(true);
  };
  function pathMatchRoute(route) {
    return route === location.pathname;
  }
  const navigate = useNavigate();
  return (
    <Navbar fluid rounded className=" bg-zinc-200">
      <Navbar.Brand>
        <img
          src="logo.png"
          className="h-14 rounded-full  cursor-pointer "
          alt="logo"
          onClick={() => navigate("/")}
        />
        <form className="flex ml-4">
          <input
            type="text"
            placeholder="search..."
            className="rounded-l-3xl text-black bg-zinc-200 border-2  border-black font-bold   lg:inline "
          />
          <span className="rounded-r-3xl bg-zinc-200 border-2 border-black text-black flex justify-center items-center p-3 border">
            <FaCamera />
          </span>
        </form>
      </Navbar.Brand>

      <div className="flex md:order-2">
        {/* Conditionally render dropdown if signed in, otherwise render sign-in button */}
        {isSignedIn ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                className="mr-3"
                alt="User settings"
                img=""
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <button
            className="text-zinc-950 font-bold ml-2 text-xl cursor-pointer gap-2"
            onClick={() => navigate("/sign-in")}
          >
            Sign In
          </button>
        )}

        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link
          onClick={() => navigate("/science")}
          className={`font-bold ml-2 text-zinc-950 text-xl cursor-pointer  gap-2 ${
            pathMatchRoute("/science") ? "  text-red-700     caret-white " : " "
          } `}
        >
          Science
        </Navbar.Link>
        <Navbar.Link
          onClick={() => navigate("/managment")}
          className={`font-bold text-zinc-950 text-xl  cursor-pointer  gap-2 ${
            pathMatchRoute("/managment") ? "   text-red-700 caret-white " : " "
          } `}
        >
          Managment
        </Navbar.Link>
        <Navbar.Link
          onClick={() => navigate("/entrance")}
          className={`font-bold text-zinc-950 text-xl cursor-pointer  gap-2 ${
            pathMatchRoute("/entrance") ? "    text-red-700 caret-white " : " "
          } `}
        >
          Entrance
        </Navbar.Link>


        <Navbar.Link
          onClick={() => navigate("/oldis-gold")}
          className={`font-bold text-zinc-950 text-xl cursor-pointer  gap-2 ${
            pathMatchRoute("/oldis-gold") ? "    text-red-700 caret-white " : " "
          } `}
        >
           old-is-gold
        </Navbar.Link>

        <Navbar.Link
          onClick={() => navigate("/about")}
          className={`font-bold text-zinc-950 mr-2 text-xl cursor-pointer gap-2 ${
            pathMatchRoute("/about") ? "    text-red-700 caret-white " : " "
          } `}
        >
          About-Us
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
