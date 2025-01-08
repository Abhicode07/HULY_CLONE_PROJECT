const WorkTogether = () => {
  return (
    <section className=" py-60 bg-[#f4f4f4]">
      <div className="container-main max-w-[1344px]  ">
        <div className="pl-80 pr-16 ">
          <h2 className="relative z-10 max-w-[550px] font-title text-7xl font-semibold leading-[0.9] tracking-tighter text-black">
            Work together. Like in the office.
          </h2>
          <p className="relative z-10 mt-3.5 max-w-[544px] text-lg leading-tight tracking-tight lg:mt-2.5">
            Create customized virtual office spaces for any department or event
            with high quality audio and video conferencing.
          </p>
          <div className="relative z-0 mt-[60px] aspect-video h-[486px] lg:h-[432px] md:ml-2 md:mt-12 md:h-[316px] sm:mx-[5px] sm:mt-6 sm:h-auto sm:w-[calc(100%-10px)]">
            <div className="absolute left-[-69.792%] top-[-69.136%] aspect-[1.62025] w-[222.222%] max-w-none">
              <video
                className="absolute inset-0"
                width={1920}
                height={1185}
                autoPlay
                muted
                loop
                playsInline
                style={{ opacity: 1 }}
              >
                <source src="/waves2.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="relative h-auto w-full">
              <img
                className="overflow-hidden rounded-[10px] -left-8 top-8 absolute lg:rounded-lg md:rounded-[7px] sm:rounded-md xs:rounded"
                width={880}
                height={486}
                src="/work-together-video.png"
              />
            </div>
          </div>
          <p className="relative z-10 mt-40 max-w-2xl text-2xl font-medium leading-snug tracking-snugger">
            Collaborating with remote teams is easy in your virtual office
            environment. Enjoy real-time communication within your workspace
            without additional software hassle.
          </p>
          <FeatureList />
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;


const features = [
  {
    title: "Customize workspace",
    description: "Create your own offices and meeting rooms to suit your team's needs.",
    imageSrc: "/customise.png"
  },
  {
    title: "Audio and video calls",
    description: "Collaborate efficiently and seamlessly with high quality virtual conferencing.",
    imageSrc: "/video.png"
  },
  {
    title: "Invite guests",
    description: "Meet with guests without ever needing to leave your workspace.",
    imageSrc: "/invite.png"
  }
];
const FeatureList = () => {

  return (
    <ul className="relative z-10 mt-10 grid grid-cols-3 gap-16 ">
      {features.map((feature, index) => (
        <li key={index}>
          <img
            alt={feature.title}
            loading="lazy"
            width={40}
             height={40}
            className="md:h-9 md:w-9 sm:h-8 sm:w-8"
            src={feature.imageSrc}
          />
          <h3 className="mt-5 max-w-32 font-medium text-2xl leading-none tracking-snugger ">
            {feature.title}
          </h3>
          <p className="mt-3.5 max-w-[204px] text-[15px] font-light leading-snug tracking-snugger">
            {feature.description}
          </p>
        </li>
      ))}
    </ul>
  );
};