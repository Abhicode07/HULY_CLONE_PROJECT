"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CameraIcon, PencilIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function SplitLayoutComponent() {
  const containerRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const leftPanel = leftPanelRef.current;
    const rightPanel = rightPanelRef.current;

    const scrollTrigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      pin: leftPanel,
      pinSpacing: true,
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="container-main pb-20 relative flex">
      <div
        ref={leftPanelRef}
        className=" flex pt-20 h-screen justify-center items-center"
      >
        <div className=" h-64 w-72 absolute left-[18%] top-1/4 overflow-hidden rounded-md shadow-xl bg-white ">
          <img
            alt=""
            loading="lazy"
            width="64"
            height="64"
            decoding="async"
            data-nimg="1"
            className=" w-full h-40 object-cover"
            src="huly-metabrain.png"
          />
          <div className=" p-4 z-20">
            <h3 className="font-semibold leading-snug tracking-tight ">
              Collaborate
            </h3>
            <p className="mt-1.5 text-sm">
              Enhance teamwork with powerful real-time collaboration features.
            </p>
          </div>
        </div>
      </div>
      <div
        ref={rightPanelRef}
        className="flex-grow ml-[calc(15%+200px)] max-w-[707px]"
      >
        <div>
          <h2 className="relative mt-[-40px] max-w-xl pt-[40px] font-title text-7xl font-semibold leading-none tracking-tighter text-black ">
            Knowledge at <br />
            Your Fingertips
          </h2>
          <p className="mt-10 text-[22px] ">
          {`  Huly offers a wide range of features to create and manage your
            project documentation. Huly's suite of collaborative editing tools
            boosts team efficiency.`}
          </p>
          <div className="relative text-[22px] mt-[26px] ">
            <div className="relative">
              <span className="relative z-10 md:pr-2">
                <span className="absolute -left-3 top-[-7px] md:-left-2 sm:-left-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 36"
                    className="height-9 h-9 w-2.5 rotate-180 md:h-[26px] md:w-2 sm:h-[25px] sm:w-[7px]"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M4 26.1A5.002 5.002 0 0 0 5 36a5 5 0 0 0 1-9.9V0H4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="font-semibold ">Documents in Huly</span> can be
                used for sharing reference materials among team members,
                collaborating on plans and roadmaps, storing meeting notes and
                assigning action items.
              </span>
              <div className="absolute top-0 scale-x-[1.02]">
                <span
                  className="pointer-events-none bg-no-repeat py-0.5 pr-3 text-transparent md:pr-2"
                  aria-hidden="true"
                >
                  <span className="font-semibold">Documents in Huly</span>
                  can be used for sharing reference materials among team
                  members, collaborating on plans and roadmaps, storing meeting
                  notes and assigning action items.
                </span>
              </div>
              <div className="absolute left-4 top-0 w-full scale-[1.02] md:left-1">
                <span
                  className="pointer-events-none bg-no-repeat py-0.5 pr-3 text-transparent md:pr-2"
                  style={{
                    background:
                      "linear-gradient(90deg, #ffeba4 50%, transparent 50%) 100% 0 / 200% 100% no-repeat",
                    backgroundPosition:
                      "calc((1 - var(--highlight-position)) * 100%) 0",
                  }}
                  aria-hidden="true"
                >
                  <span className="font-semibold">Documents in Huly</span>{" "}
                  {/* */}can be used for sharing reference materials among team
                  members, collaborating on plans and roadmaps, storing meeting
                  notes and assigning action items.
                </span>
              </div>
              <p className="relative -mt-8 pb-3 pt-[68px] lg:-mt-9 md:mt-[-19px] md:pt-[47px] sm:mt-[-22px] sm:pt-[38px]">
                <span
                  className="absolute left-1/2 top-0 -z-10 h-full w-px"
                  aria-hidden="true"
                />
                With{/* */}{" "}
                <span className="relative bg-gradient-to-br from-grey-70 to-grey-70 bg-[left_14px] bg-no-repeat [transition:background_1s_0.5s,color_0.5s_0s] lg:bg-[left_12px] md:bg-[left_9px] bg-[length:100%_2px] text-grey-70 sm:bg-[length:100%_1px]">
                  live
                </span>{" "}
                {/* */}real-time collaboration, remote teams are able to work
                together to bring a unified vision to life on the page. Tagging
                users, linking to issues, and assigning action items are just a
                few of the{/* */}{" "}
                <span className="relative bg-gradient-to-br from-grey-70 to-grey-70 bg-[left_14px] bg-no-repeat [transition:background_1.5s_2s,color_0.5s_1.5s] lg:bg-[left_12px] md:bg-[left_9px] bg-[length:100%_2px] text-grey-70 sm:bg-[length:100%_1px]">
                  advanced solutions
                </span>{" "}
                <span className="relative pr-2 md:pr-1">
                  <strong className="font-medium text-orange">
                    powerful features
                  </strong>
                  <span className="relative">
                    <span
                      className="absolute z-40 flex flex-col items-center hover:cursor-grab active:cursor-grabbing group bottom-[-8px] left-[-30px] text-orange md:bottom-[-4px] md:left-[-21px] sm:left-[-16px]"
                      aria-hidden="true"
                      draggable="false"
                      style={{
                        userSelect: "none",
                        touchAction: "none",
                        transform: "none",
                      }}
                    >
                      <img
                        alt=""
                        loading="lazy"
                        width={66}
                        height={66}
                        decoding="async"
                        data-nimg={1}
                        className="pointer-events-none z-10 max-w-none rounded-full border-2 border-orange shadow-[0px_6px_25px_0px_#00000080] transition-all duration-200 group-active:translate-y-[-15px] group-active:scale-[1.05] group-active:shadow-[0px_14px_30px_0px_#00000080] md:max-w-[45px] sm:max-w-[36px]"
                        style={{ color: "transparent" }}
                        srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forange-pin-image.5c9a9e65.jpg&w=96&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forange-pin-image.5c9a9e65.jpg&w=256&q=75 2x"
                        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forange-pin-image.5c9a9e65.jpg&w=256&q=75"
                      />
                      <span className="flex flex-col items-center transition-transform duration-200 group-active:-translate-y-[25px]">
                        <span className="h-[27px] w-0.5 bg-orange md:h-[18px] md:w-px" />
                        <span className="-mt-px h-2.5 w-2.5 rounded-full bg-orange md:h-[7px] md:w-[7px]" />
                      </span>
                    </span>
                  </span>
                </span>
                available within the Huly document editor.
              </p>
            </div>
          </div>
          <img
            alt=""
            loading="lazy"
            width="706"
            height="423"
            decoding="async"
            data-nimg="1"
            className="mt-9 rounded-[10px] lg:mt-8 md:mt-7 md:h-auto md:w-full sm:mt-[19px]"
            src="/billboard.jpg"
          />
          <p className="relative text-[22px] -mt-8 pb-3 pt-[68px] ">
            <span className=" left-1/2 top-0 -z-10 h-full w-px"></span>
            With{" "}
            <span className="relative bg-gradient-to-br from-grey-70 to-grey-70 bg-[left_14px] bg-no-repeat [transition:background_1s_0.5s,color_0.5s_0s] lg:bg-[left_12px] md:bg-[left_9px] bg-[length:100%_2px] text-grey-70 sm:bg-[length:100%_1px]">
              live
            </span>
            real-time collaboration, remote teams are able to work together to
            bring a unified vision to life on the page. Tagging users, linking
            to issues, and assigning action items are just a few of the
            <span className="line-through text-gray-400 px-2">
              advanced solutions
            </span>
            <span className="relative pr-2 md:pr-1">
              <strong className="font-medium text-orange-600">
                powerful features
              </strong>
            </span>
            available within the Huly document editor.
          </p>
          <img
            alt=""
            loading="lazy"
            width="704"
            height="336"
            decoding="async"
            data-nimg="1"
            className="mt-[22px] rounded-[10px] lg:mt-[22px] md:mt-[11px] md:h-auto md:w-full sm:mt-[3px]"
            src="code.svg"
          />
          <p className="mt-9 text-[22px]">
           {` Documents can be enhanced with rich text formatting, images,
            attachments and code blocks. Use documents to organize team plans,
            create technical documentation and support your team's progress
            towards shared goals.`}
          </p>
          <div className="mt-5 flex text-2xl  items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 36"
              className="mr-2 h-auto w-2.5 rotate-180 fill-black "
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M4 26.1A5.002 5.002 0 0 0 5 36a5 5 0 0 0 1-9.9V0H4z"
                clipRule="evenodd"
              />
            </svg>
            <span className=" text-[#b0b2b7]">Tap here to continue...</span>
          </div>
            <div className="mt-2 flex w-fit gap-x-1 rounded-full bg-gray-100 p-2 j shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 12"
                  className="m-auto h-auto w-3.5 stroke-white sm:w-3"
                >
                  <path d="M6 1v10M1 6h10" />
                </svg>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 ">
                <CameraIcon size={18} />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 ">
               <PencilIcon size={18} /> 
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default SplitLayoutComponent;