import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row mx-auto my-0 justify-between items-center gap-10">
      <div className="flex-1  ">
        <p className="text-2xl md:text-4xl lg:text-5xl  text-blue font-extrabold font-mono">
          {/* Inspire. Explore. Connect. */}
          Where Ideas Flourish, Connections Spark, and Knowledge Blossoms. Join
          Us!
        </p>
        <p className="text-lg font-semibold my-5">
          Discover insightful perspectives and ignite your curiosity with our
          engaging blog content.
        </p>
        <div>
          <button className=" bg-blue text-white font-medium mr-2 rounded-md p-2 cursor-pointer">
            Learn More
          </button>
          <button className=" bg-gray text-white font-medium mr-2 rounded-md p-2 cursor-pointer">
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
      <div className="flex-1 flex flex-row justify-center items-center">
        <Image
          src="/hero.svg"
          loading="eager"
          priority={true}
          width={500}
          height={500}
          alt="hero"
        />
      </div>
    </div>
  );
};

export default page;
