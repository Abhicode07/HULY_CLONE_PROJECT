import StickyScroll from "./scroll-reveal";
import Image from "next/image";

const MetaBrain = () => {
  return (
    <div className="bg-[#f6f6f6] min-h-screen flex flex-col items-center justify-center">
      <section className="w-full px-8">
        {/* Text Section */}
        <div className="relative z-10 text-left">
          {/* Title with Space Above */}
          <h2 className="font-title text-8xl font-semibold leading-tight tracking-tighter text-black sm:text-7xl mt-16 ml-20">
            Huly MetaBrain
          </h2>
          {/* Paragraph with Space Below */}
          <p className="mt-8 text-lg leading-relaxed tracking-tight text-gray-600 sm:text-base max-w-5xl mx-auto ml-20">
            Connect every element of your workflow to build a dynamic knowledge base.
          </p>
          <p className="text-gray-600 sm:text-base max-w-3xl mx-auto ml-20">
            Soon, Huly AI will turn it into a powerful asset — a second brain for your team.
          </p>
        </div>
        {/* Image Section with Increased Size */}
        <div className="mt-12 mb-16 w-full">
          <Image
            src="/image.png" // Replace with the correct image path
            alt="Huly MetaBrain Illustration"
            width={2400} // Increased width
            height={2000} // Increased height
            className="w-full max-w-5xl h-auto object-contain mx-auto"
            priority
          />
        </div>
      </section>
      <StickyScroll />
    </div>
  );
};

export default MetaBrain;
