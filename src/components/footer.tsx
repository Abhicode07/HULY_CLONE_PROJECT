import {
  GithubIcon,
  LinkedinIcon,
  SlackIcon,
  Twitter,
  YoutubeIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#090a0c] py-10 text-white bottom-0 z-10 w-full px-safe md:overflow-hidden">
      <div className="container-main flex items-center text-sm leading-none tracking-snugger lg:flex-wrap lg:justify-between md:justify-start md:gap-y-2 sm:text-center">
        <p className="text-gray-400">
          <span>
            © 2025 Abhishek Bhavsar Services.
          </span>
          <span className="2xs:mt-1 2xs:block"> All rights reserved.</span>
        </p>
        <ul className="ml-[70px] flex items-center gap-x-[26px]">
          <li>
            <a
              className="transition-colors duration-200 leading-none text-14 text-grey-80 tracking-tight hover:text-white !tracking-snugger"
              href="https://huly.io/legal/terms"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              className="transition-colors duration-200 leading-none text-14 text-grey-80 tracking-tight hover:text-white !tracking-snugger"
              href="https://huly.io/legal/privacy"
            >
              Privacy Policy
            </a>
          </li>
        </ul>
        <ul className="ml-[70px] flex gap-x-4">
          <li>
            <a
              href="https://www.linkedin.com/in/abhishek-bhavsar1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon size={18} className="text-gray-300 hover:text-white" />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/abhibhavsar_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={18} className="text-gray-300 hover:text-white" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/your-channel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeIcon size={18} className="text-gray-300 hover:text-white" />
            </a>
          </li>
          <li>
            <a
              href="https://slack.com/your-workspace"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SlackIcon size={18} className="text-gray-300 hover:text-white" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Abhicode07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon size={18} className="text-gray-300 hover:text-white" />
            </a>
          </li>
        </ul>
        <div>
          <p className="font-light">Inspired by Huly</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
