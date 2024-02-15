import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row mx-auto my-0 justify-between items-center gap-10">
      <div className="flex-1  ">
        <p className="text-3xl md:text-5xl lg:text-6xl text-blue-700 font-extrabold font-mono">
          Inspire. Explore. Connect.
        </p>
        <p className="text-lg font-semibold my-5">
          Discover insightful perspectives and ignite your curiosity with our
          engaging blog content.
        </p>
        <div>
          <button className=" bg-blue-600 text-white font-medium mr-2 rounded-md p-2 cursor-pointer">
            Learn More
          </button>
          <button className=" bg-gray-500 text-white font-medium mr-2 rounded-md p-2 cursor-pointer">
            Contact
          </button>
        </div>
        <Image
          src="/brands.png"
          width={500}
          height={500}
          alt="brands"
        />
      </div>
      <div className="flex-1 relative flex flex-row justify-center items-center">
        <Image
          src="/hero.gif"
          width={500}
          height={500}
          alt="hero"
        />
      </div>
    </div>
  );
};

export default page;
