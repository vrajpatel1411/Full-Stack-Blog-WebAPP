"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  var isSession = false;
  let isactive;
  var isadmin = true;
  return (
    <div
      className=" flex-1 flex flex-col relative right-[30%]
    top-[200px] sm:top-0 sm:right-0 sm:flex-row items-center justify-end gap-[14px]">
      {Links.map((link, index) => {
        isactive = pathname.endsWith(link.path);

        return (
          <Link
            className={
              isactive
                ? " w-fit text-center p-[12px] rounded-full font-bold bg-white cursor-pointer "
                : " cursor-pointer"
            }
            key={index}
            href={link.path}>
            {link.name}
          </Link>
        );
      })}

      {isadmin ? (
        <Link href="/admin">
          <button
            className={
              pathname.endsWith("/admin")
                ? " w-fit text-center p-[12px] rounded-xl font-bold bg-white  cursor-pointer "
                : "cursor-pointer "
            }>
            Admin
          </button>
        </Link>
      ) : (
        ""
      )}

      {isSession ? (
        <Link href="/login">
          <button
            className={
              pathname.endsWith("/login")
                ? " w-fit text-center p-[12px] rounded-xl font-bold bg-white  cursor-pointer"
                : " cursor-pointer"
            }>
            Logout
          </button>
        </Link>
      ) : (
        <Link href="/login">
          <button
            className={
              pathname.endsWith("/login")
                ? " w-fit text-center p-[12px] rounded-xl font-bold bg-white "
                : " cursor-pointer"
            }>
            Login
          </button>
        </Link>
      )}
    </div>
  );
};

export default Nav_links;
