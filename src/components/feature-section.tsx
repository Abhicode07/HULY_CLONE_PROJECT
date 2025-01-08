const FeatureSection = () => {
  return (
    <section className=" relative bg-[#f4f4f4] z-10 pt-40 lg:pt-32 md:pt-24 sm:pt-16">
      <div className="container-main relative z-10">
        <h2 className="font-title text-7xl font-semibold leading-h2 tracking-tighter text-black">
          Unmatched productivity
        </h2>
        <p className="mt-6 max-w-[705px] text-18 leading-tight tracking-tight lg:mt-5 sm:mt-3 sm:max-w-lg sm:text-15">
          Huly is a process, project, time, and knowledge management platform
          that provides amazing collaboration opportunities for developers and
          product teams alike.
        </p>
        <ul className="mt-10 flex flex-wrap gap-5 lg:mt-9 lg:gap-6 md:mt-6 sm:mt-5 sm:grid sm:grid-cols-8 xs:grid-cols-1">
          <li className="relative grid h-[460px] col-span-3 overflow-hidden rounded-xl bg-grey-2 bg-clip-padding ring-[6px] ring-white/40 lg:h-[300px] md:h-[260px] sm:w-full order-1 ">
            <div className="absolute bottom-0 z-10 col-span-full flex w-full items-end px-6 pb-6 lg:px-5 lg:pb-5 md:px-4 md:pb-4  sm:px-5 sm:pb-5 md:after:absolute md:after:bottom-0 md:after:left-0 md:after:z-0 md:after:h-[180%] md:after:w-full md:after:bg-[linear-gradient(180deg,rgba(9,10,12,0)_0%,#090A0C_40.76%)] md:after:blur-md">
              <p className="relative z-10 font-light leading-snug tracking-snugger text-white/65 md:leading-[1.2] sm:text-15">
                <span className="font-medium text-white">
                  Keyboard shortcuts.
                </span>{" "}
                {/* */}Work efficiently with instant access to common actions.
              </p>
            </div>
            <div className="relative col-span-full row-span-full">
              <span
                className="absolute left-1/2 top-0 -z-10 h-full w-px"
                aria-hidden="true"
              />
              <div
                className="absolute left-1/2 aspect-[1.01904] h-full w-full -translate-x-1/2 overflow-hidden sm:-top-12 sm:h-auto xs:-top-8"
                aria-hidden="true"
              >
                <div className="h-full w-full md:pointer-events-none">
                  <img
                    src="/keyboard.png"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </li>
          <li className="relative grid h-[460px] col-span-5 overflow-hidden rounded-xl bg-grey-2 bg-clip-padding ring-[6px] ring-white/40 lg:h-[300px] md:h-[260px] sm:w-full order-1 ">
            <div className="absolute bottom-0 z-10 col-span-full flex w-full items-end px-6 pb-6 lg:px-5 lg:pb-5 md:px-4 md:pb-4  sm:px-5 sm:pb-5 md:after:absolute md:after:bottom-0 md:after:left-0 md:after:z-0 md:after:h-[180%] md:after:w-full md:after:bg-[linear-gradient(180deg,rgba(9,10,12,0)_0%,#090A0C_40.76%)] md:after:blur-md">
              <p className="relative z-10 font-light leading-snug tracking-snugger text-white/65 md:leading-[1.2] sm:text-15">
                <span className="font-medium text-white">Team Planner. </span>{" "}
                {/* */} Keep track of the bigger picture by viewing all
                individual tasks in one centralized team calendar.
              </p>
            </div>
            <div className="relative col-span-full row-span-full">
              <span
                className="absolute left-1/2 top-0 -z-10 h-full w-px"
                aria-hidden="true"
              />
              <div
                className="absolute left-1/2 aspect-[1.01904] h-full w-full -translate-x-1/2 overflow-hidden sm:-top-12 sm:h-auto xs:-top-8"
                aria-hidden="true"
              >
                <div className="h-full w-full md:pointer-events-none">
                  <img src="/team.png" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </li>
          <li className="relative grid h-[460px] col-span-5 overflow-hidden rounded-xl bg-grey-2 bg-clip-padding ring-[6px] ring-white/40 lg:h-[300px] md:h-[260px] sm:w-full order-1 ">
            <div className="absolute bottom-0 z-10 col-span-full flex w-full items-end px-6 pb-6 lg:px-5 lg:pb-5 md:px-4 md:pb-4  sm:px-5 sm:pb-5 md:after:absolute md:after:bottom-0 md:after:left-0 md:after:z-0 md:after:h-[180%] md:after:w-full md:after:bg-[linear-gradient(180deg,rgba(9,10,12,0)_0%,#090A0C_40.76%)] md:after:blur-md">
              <p className="relative z-10 font-light leading-snug tracking-snugger text-white/65 md:leading-[1.2] sm:text-15">
                <span className="font-medium text-white">Time-blocking.</span>{" "}
                {/* */} Transform daily tasks into structured
                <br /> time blocks for focused productivity.
              </p>
            </div>
            <div className="relative col-span-full row-span-full">
              <span
                className="absolute left-1/2 top-0 -z-10 h-full w-px"
                aria-hidden="true"
              />
              <div
                className="absolute left-1/2 aspect-[1.01904] h-full w-full -translate-x-1/2 overflow-hidden sm:-top-12 sm:h-auto xs:-top-8"
                aria-hidden="true"
              >
                <div className="h-full w-full md:pointer-events-none">
                  <img
                    src="/time-block.png"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </li>
          <li className="relative grid h-[460px] col-span-3 overflow-hidden rounded-xl bg-grey-2 bg-clip-padding ring-[6px] ring-white/40 lg:h-[300px] md:h-[260px] sm:w-full order-1 ">
            <div className="absolute bottom-0 z-10 col-span-full flex w-full items-end px-6 pb-6 lg:px-5 lg:pb-5 md:px-4 md:pb-4  sm:px-5 sm:pb-5 md:after:absolute md:after:bottom-0 md:after:left-0 md:after:z-0 md:after:h-[180%] md:after:w-full md:after:bg-[linear-gradient(180deg,rgba(9,10,12,0)_0%,#090A0C_40.76%)] md:after:blur-md">
              <p className="relative z-10 font-light leading-snug tracking-snugger text-white/65 md:leading-[1.2] sm:text-15">
                <span className="font-medium text-white">Notifications.</span>{" "}
                {/* */} Keep up to date with any changes by receiving instant
                notifications.
              </p>
            </div>
            <div className="relative col-span-full row-span-full">
              <span
                className="absolute left-1/2 top-0 -z-10 h-full w-px"
                aria-hidden="true"
              />
              <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 h-full aspect-[1.52381]">
                <video
                  className="absolute inset-0 z-0"
                  width={640}
                  height={420}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ opacity: 1 }}
                >
                  <source src="waves.mp4" type="video/mp4" />
                </video>
              </div>

              <div
                className="absolute left-1/2 aspect-[1.01904] h-full w-full -translate-x-1/2 overflow-hidden sm:-top-12 sm:h-auto xs:-top-8"
                aria-hidden="true"
              >
                <div className="h-full w-full md:pointer-events-none">
                  <img
                    src="/notification.png"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FeatureSection;