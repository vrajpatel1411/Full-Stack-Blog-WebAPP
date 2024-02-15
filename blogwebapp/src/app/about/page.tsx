import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="relative w-[500px] h-[500px]">
        <Image
          src="/about.png"
          alt=""
          fill
        />
      </div>
    </div>
  );
};

export default page;
