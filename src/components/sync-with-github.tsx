const SyncWithGithub = () => {
  return (
    <section className=" relative z-20 overflow-hidden bg-[#111111] pb-[180px] pt-[131px] px-safe lg:pb-[131px] lg:pt-24 md:py-24 sm:py-16">
      <div className="container-narrow">
        <h2 className="max-w-2xl text-80 font-medium leading-[0.9] tracking-snugger text-white text-7xl  tracking-tight">
          Sync with GitHub. Both&nbsp;ways.
        </h2>
        <p className="mt-4 max-w-[580px] leading-snug tracking-tight text-gray-400">
         {` Manage your tasks efficiently with Huly's bidirectional GitHub
          synchronization. Use&nbsp;Huly as an advanced front-end for GitHub
          Issues and GitHub Projects.`}
        </p>
        <div className="relative my-20 border-[8px] rounded-lg border-gray-700">
          <div className="rounded-md overflow-hidden">
            <Image src="/huly-github.png" alt="" className="rounded-md overflow-hidden" width={960} height={554} />
          </div>
        </div>
        <FeatureList />
      </div>
    </section>
  );
};

export default SyncWithGithub;

import Image from "next/image";
import React from "react";

const features = [
  {
    icon: "https://huly.io/_next/static/media/2a9e454742efc41c8de5d3889bf55d34.svg",
    title: "Two-way synchronization",
    description:
      "Integrate your task tracker with GitHub to sync changes instantly.",
    iconWidth: 37,
    iconHeight: 40,
  },
  {
    icon: "https://huly.io/_next/static/media/4d5dd04473e9f2ebc5c49291c1f73681.svg",
    title: "Private tasks",
    description:
      "Integration and management of multiple data repositories effectively.",
    iconWidth: 40,
    iconHeight: 40,
    titleMaxWidth: "95px",
  },
  {
    icon: "https://huly.io/_next/static/media/7338cddab3021d50f73a3d36c88df490.svg",
    title: "Multiple repositories",
    description:
      "Organize multiple projects for more effective planning and collaboration.",
    iconWidth: 44,
    iconHeight: 40,
    titleMaxWidth: "190px",
  },
  {
    icon: "https://huly.io/_next/static/media/c1edb00984cbfb46dd8eda516738f4f0.svg",
    title: "Milestone migration",
    description:
      "Seamless migration of key project milestones between repositories.",
    iconWidth: 40,
    iconHeight: 40,
    titleMaxWidth: "190px",
  },
  {
    icon: "https://huly.io/_next/static/media/352118264d839bffe60735ff4aeed26f.svg",
    title: "Track progress",
    description:
      "Keep track of GitHub contributions and changes within your workspace.",
    iconWidth: 60,
    iconHeight: 40,
    titleMaxWidth: "140px",
  },
  {
    icon: "https://huly.io/_next/static/media/12b7898bd7ddbbbbcacf68c0f47c7c51.svg",
    title: "Advanced filtering",
    description:
      "Precise project data search with advanced filtering capabilities.",
    iconWidth: 40,
    iconHeight: 40,
    titleMaxWidth: "150px",
  },
];

const FeatureList = () => {
  return (
    <ul className="grid mt-40 grid-cols-3 gap-x-16 gap-y-20">
      {features.map((feature, index) => (
        <li key={index} className="relative">
          <div className="relative after:pointer-events-none after:absolute after:-left-2 after:-top-2 after:h-8 after:w-8 after:rounded-[50%] after:bg-[linear-gradient(180deg,#478BEB_60%,rgba(71,139,235,0)_100%)] after:opacity-60 after:mix-blend-plus-lighter after:blur-2xl after:lg:h-7 after:lg:w-7">
            <img
              alt=""
              loading="lazy"
              width={feature.iconWidth}
              height={feature.iconHeight}
              decoding="async"
              data-nimg={1}
              className="h-10 w-auto md:h-9 sm:h-8"
              style={{ color: "transparent" }}
              src={feature.icon}
            />
          </div>
          <h3
            className={`mt-5 font-title text-3xl leading-none font-medium tracking-snugger text-white`}
            style={{ maxWidth: feature.titleMaxWidth }}
          >
            {feature.title}
          </h3>
          <p className="mt-3 text-[15px] font-light leading-snug tracking-snugger text-gray-400 md:mt-2 md:leading-tight sm:mt-1">
            {feature.description}
          </p>
        </li>
      ))}
    </ul>
  );
};