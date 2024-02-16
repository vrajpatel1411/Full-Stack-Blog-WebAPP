import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col-reverse gap-10 md:flex-row justify-center items-center">
      <div className="flex-1">
        <h2 className="text-2xl md:text-4xl lg:text-5xl underline underline-offset-8 decoration-2 text-blue font-extrabold font-mono">
          About Us
        </h2>
        <p className="text-lg font-semibold my-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
          consequuntur blanditiis laboriosam, aspernatur praesentium modi at
          ducimus fugit quos officiis totam? Alias inventore reiciendis cum
          adipisci? Dicta ut obcaecati veniam?
        </p>
        <div className="flex flex-grow-0 justify-start gap-4 items-center">
          <div className="card">
            <p className="card_stats">10 K+</p>
            <p className=" card_title">Year Of Experience</p>
          </div>
          <div className="card">
            <p className="card_stats">234 K+</p>
            <p className="card_title">People Reached</p>
          </div>
          <div className="card">
            <p className="card_stats">5 K+</p>
            <p className="card_title">Services</p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-start items-center ">
        <Image
          src="/About.jpg"
          width={400}
          height={400}
          alt=""
        />
      </div>
    </div>
  );
};

export default page;
