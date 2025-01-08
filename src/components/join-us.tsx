import GradientButton from "./ui/gradient-button";

const JoinUsSection = () => {
  return (
    <section className="relative  bg-[#111] overflow-hidden bg- pb-64 pt-40 px-safe">
      <img
        alt=""
        loading="lazy"
        width={1920}
        height={689}
        decoding="async"
        data-nimg={1}
        className="absolute inset-0 object-cover w-full h-full"
        style={{ color: "transparent" }}
        src="/cta-illustration.jpg"
      />

      <div className="container-main grid-gap relative grid grid-cols-2 ">
        <div className="relative z-10 col-start-2 -ml-16 ">
          <h2 className="max-w-[510px] bg-gradient-to-br from-white from-30% via-[#d5d8f6] via-80% to-[#fdf7fe] bg-clip-text font-title text-7xl leading-none text-white  text-left tracking-tight">
            Join the Movement
          </h2>
          <p className="relative z-10 mb-7 mt-2 leading-snug tracking-tight text-gray-300">
            Unlock the future of productivity with Huly.
            <br />
            Remember, this journey is just getting started.
          </p>
          <div className="mt-11 lg:mt-9 md:mt-7 sm:mt-5">
            <GradientButton>Start Now</GradientButton>
          </div>
        </div>

        <div className="pointer-events-none absolute -top-7 left-[100px] aspect-square w-[403px] overflow-hidden rounded-full ">
          <video
            className="absolute inset-0"
            width={400}
            height={400}
            autoPlay
            muted
            loop
            playsInline
            style={{ opacity: 1 }}
          >
            <source
              src="https://huly.io/videos/cta/clock.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;