import GradientButton from "./ui/gradient-button";

const HeroSection = () => {
  return (
    <section className="hero   relative min-h-[1438px] bg-[#111] overflow-hidden bg-grey-1 xl:pt-[184px] px-safe lg:h-[1078px] lg:pt-28 md:h-auto md:pt-24 sm:pt-[92px]">
      <div className="container-main relative flex h-full flex-col">
        <h1 className="relative z-30 max-w-[616px] bg-gradient-to-br from-white from-30% via-[#d5d8f6] via-80% to-[#fdf7fe] bg-clip-text font-title text-[76px] font-bold leading-[1] tracking-tight text-transparent ">
          Everything App for&nbsp;your teams
        </h1>
        <p className="relative z-30 mt-5 max-w-md text-[18px] leading-snug tracking-tight  text-white">
          Huly, an open-source platform, serves as an all-in-one replacement of
          Linear, Jira, Slack, and Notion.
        </p>
        <div className="mt-11 lg:mt-9 md:mt-7 sm:mt-5">
          <GradientButton>
          <span className="text-[#5A250A]">Try it Free</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 9"
        className="h-[9px] w-[17px] text-[#5A250A]"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
          clipRule="evenodd"
        />
      </svg>
          </GradientButton>
        </div>
      </div>
      <div className="absolute top-[1050px] 2xs:aspect-auto">
        <div className="absolute -left-[200px] bottom-0 z-0 aspect-[1.335187]  max-w-none lg:bottom-[-380px]  lg:w-[1920px] md:bottom-[-2.1%]  md:w-[147%] ">
          <video
            className="absolute inset-0 opacity-100 w-full h-full"
            width="1920"
            height="1438"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/bluetop.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="absolute left-[152px] bottom-[150px]   rounded-t-md overflow-hidden">
        <img
          alt=""
          fetchPriority="high"
          width="1024"
          height="569"
          decoding="async"
          data-nimg="1"
          sizes="100vw"
          src="/hero-illustration.jpg"
        />
        <div className="absolute  bg-gradient-to-b h-32 -bottom-2 blur-sm from-transparent to-black z-10 w-full" />
      </div>
      <div className="absolute bottom-[40px] left-[152px] z-30 overflow-hidden text-sm tracking-snugger ">
        <p className="mb-3.5 font-light leading-none text-white/60 will-change-transform">
          Everything you need for productive team work:
        </p>
        <div className="w-full xs:flex xs:overflow-hidden">
          <ul className="flex flex-shrink-0 font-semibold leading-dense text-white will-change-transform xs:animate-infinityScroll">
            <li className="relative sm:shrink-0 xs:before:relative xs:before:mx-2 xs:before:inline-block xs:before:aspect-square xs:before:w-[3px] xs:before:rounded-full xs:before:bg-white/30 xs:before:align-middle ">
              Team Planner
            </li>
            <li className="relative sm:shrink-0 before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle sm:before:mx-2">
              Project Management
            </li>
            <li className="relative sm:shrink-0 before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle sm:before:mx-2">
              Virtual Office
            </li>
            <li className="relative sm:shrink-0 before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle sm:before:mx-2">
              Chat
            </li>
            <li className="relative sm:shrink-0 before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle sm:before:mx-2">
              Documents
            </li>
            <li className="relative sm:shrink-0 before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle sm:before:mx-2">
              Inbox
            </li>
          </ul>
          <ul className="hidden flex-shrink-0 font-semibold leading-dense text-white will-change-transform xs:flex xs:animate-infinityScroll">
            <li className="relative before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle sm:shrink-0 sm:before:mx-2">
              Team Planner
            </li>
            <li className="relative before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle sm:shrink-0 sm:before:mx-2">
              Project Management
            </li>
            <li className="relative before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle sm:shrink-0 sm:before:mx-2">
              Virtual Office
            </li>
            <li className="relative before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle sm:shrink-0 sm:before:mx-2">
              Chat
            </li>
            <li className="relative before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle sm:shrink-0 sm:before:mx-2">
              Documents
            </li>
            <li className="relative before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle sm:shrink-0 sm:before:mx-2">
              Inbox
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;