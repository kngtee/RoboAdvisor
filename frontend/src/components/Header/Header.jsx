const navLinks = [
  {
    path: "/",
    display: "About",
  },
  {
    path: "/",
    display: "Blog",
  },
  {
    path: "/",
    display: "Contact",
  },
];

const Header = () => {
  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center justify-between">
            <span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
              >
                <g id="SVGRepo_bgCarrier"></g>
                <g id="SVGRepo_tracerCarrier"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM10.99 17C10.99 17.1 10.97 17.19 10.93 17.29C10.85 17.47 10.71 17.62 10.52 17.7C10.43 17.74 10.33 17.76 10.23 17.76C10.13 17.76 10.04 17.74 9.94 17.7C9.85 17.66 9.77 17.61 9.7 17.54L6.75 14.59C6.46 14.3 6.46 13.82 6.75 13.53C7.04 13.24 7.52 13.24 7.81 13.53L9.48 15.2V7C9.48 6.59 9.82 6.25 10.23 6.25C10.64 6.25 10.99 6.59 10.99 7V17ZM17.24 10.48C17.09 10.63 16.9 10.7 16.71 10.7C16.52 10.7 16.33 10.63 16.18 10.48L14.51 8.81V17C14.51 17.41 14.17 17.75 13.76 17.75C13.35 17.75 13.01 17.41 13.01 17V7C13.01 6.9 13.03 6.81 13.07 6.71C13.15 6.53 13.29 6.38 13.48 6.3C13.66 6.22 13.87 6.22 14.05 6.3C14.14 6.34 14.22 6.39 14.29 6.46L17.24 9.41C17.53 9.71 17.53 10.19 17.24 10.48Z"
                    fill="#9b9e1f"
                  ></path>
                </g>
              </svg>
            </span>
            <h2 className="text-2xl font-bold leading-7 text-textColor">
              RoboAdvisor
            </h2>
          </div>

          {/* Menu */}
          <div className="navigation">
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                >
                  <a href="#">{link.display}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Button */}
          <div className="flex items-center gap-4">
            <button className="bg-primaryColor py-2 px-6 font-[600] text-bgColor h-[38px] flex items-center justify-center rounded-[50px]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
