"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  let isactive;
  var isadmin = true;
  return (
    <div className="flex-1 flex flex-row items-center justify-end gap-[14px]">
      {Links.map((link, index) => {
        isactive = pathname.endsWith(link.path);

        return (
          <Link
            className={
              isactive
                ? " w-fit text-center p-2 rounded-full font-bold bg-white "
                : " "
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
              isactive
                ? " w-fit text-center p-2 rounded-xl font-bold bg-white "
                : " "
            }>
            Admin
          </button>
        </Link>
      ) : (
        <Link href="/admin">
          <button
            className={
              isactive
                ? " w-fit text-center p-2 rounded-xl font-bold bg-white "
                : " "
            }>
            Login
          </button>
        </Link>
      )}
    </div>
  );
};

export default Links;
