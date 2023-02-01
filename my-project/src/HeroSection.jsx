import activImage from "./assets/active-speaker-meeting-scaled.jpg";
import women from "./assets/couch-woman-speaker-view-scaled.jpg";

const HeroSection = () => {
  return (
    <>
      <div className="flex justify-between flex-col md:flex-row">
        <div>
          <h1 className="flex flex-col text-5xl font-semibold ml-10 mr-10 mt-10">
            One platform to
            <span className="text-zoom-blue font-mono"> connect,create</span>
            and <span className="text-zoom-blue font-mono">innovate</span>
          </h1>
          <p className="p-12 font-semibold text-xl mr-3">
            Bring teams together, reimagine workspaces, <br /> engage new
            audiences, and <br /> delight your coustomers - all on Zoom platform
            you know you <span className="text-red-500 font-mono">love.</span>
          </p>
        </div>
        <div className="mr-10 ">
          {/*activ pic */}
          <img
            src={activImage}
            alt="meeting"
            className="rounded-2xl mr-2 hidden md:block mt-10"
            style={{ width: "750px" }}
          />
          {/* women PIC */}

          <div className="flex md:hidden w-64 md:mt-12 mb-10 ml-16">
            <img
              src={women}
              alt="news"
              className="flex "
              style={{ width: "350px" }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row mb-16 mt-10">
        <button className="border font-mono text-base font-bold ml-10 w-15 h-15 p-4 rounded-full bg-blue-600 text-white hover:text-blue-300 ">
          Plans & Pricing
        </button>
        <button className=" font-mono font-bold ml-7 text-zoom-blue hover:text-blue-300 ">
          Sign up, it's free
        </button>
      </div>
    </>
  );
};

export default HeroSection;