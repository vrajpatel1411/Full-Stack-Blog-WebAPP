import Link from "next/link";
import { usePathname } from "next/navigation";
const Nav_button = ({ link }: { link: { name: string; path: string } }) => {
  const pathname = usePathname();
  return (
    <Link
      className={
        pathname.endsWith(link.path)
          ? " w-fit text-center p-[12px] rounded-lg font-bold underline underline-offset-8 decoration-gray  cursor-pointer "
          : " cursor-pointer"
      }
      href={link.path}>
      {link.name}
    </Link>
  );
};

export default Nav_button;
