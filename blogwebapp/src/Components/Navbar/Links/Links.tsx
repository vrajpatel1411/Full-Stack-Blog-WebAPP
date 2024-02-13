"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
const Links: React.FC = () => {
  const Links: Array<{ name: string; path: string }> = [
    {
      name: "HomePage",
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
  var isSession = true;
  let isactive;
  var isadmin = false;
  return (
    <div className="flex-1 flex flex-row items-center justify-end gap-[14px]">
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
              pathname.endsWith("/Logout")
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
              pathname.endsWith("/Login")
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

export default Links;
