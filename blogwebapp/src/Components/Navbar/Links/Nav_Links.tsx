"use client";
import Nav_button from "./Nav_button";
const Nav_links = () => {
  const Links: Array<{ name: string; path: string }> = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Blog",
      path: "/blog",
    },
  ];

  var isSession = false;
  var isadmin = true;
  return (
    <div
      className=" flex-1 flex flex-col relative right-[30%]
    top-[200px] sm:top-0 sm:right-0 sm:flex-row items-center justify-end gap-[14px]">
      {Links.map((link, index) => {
        return (
          <Nav_button
            key={index}
            link={link}
          />
        );
      })}
      {isadmin ? (
        <Nav_button
          link={{
            name: "Admin",
            path: "/admin",
          }}
        />
      ) : (
        ""
      )}
      {isSession ? (
        <Nav_button
          link={{
            name: "LogOut",
            path: "/login",
          }}
        />
      ) : (
        <Nav_button
          link={{
            name: "Login",
            path: "/login",
          }}
        />
      )}
    </div>
  );
};

export default Nav_links;
