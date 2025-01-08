import { GithubIcon } from "lucide-react";
import Logo from "./logo";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="absolute left-0 right-0 top-0 z-50 h-16 bg-transparent transition-colors duration-200 px-safe pt-safe">
      <div
        className="container-main relative z-10 flex h-full items-center"
        aria-label="Global"
      >
        <Logo />
        <nav className="ml-[77px] ">
          <ul className="flex">
            <li className="">
              <a
                className=" inline-flex whitespace-pre p-3 text-[14px] text-white transition-colors duration-200 hover:text-blue"
                href="/pricing"
              >
                Pricing
              </a>
            </li>
            <li className="">
              <a
                className="inline-flex whitespace-pre p-3 text-[14px] text-white transition-colors duration-200 hover:text-blue"
                href="https://huly.blog/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resources   
              </a>
            </li>
            <li className="group/navitem relative">
              <button
                className="inline-flex items-center gap-x-1.5 whitespace-pre p-3 text-[14px] text-white"
                type="button"
              >
                Community
                <img
                  alt=""
                  width={8}
                  height={14}
                  decoding="async"
                  data-nimg={1}
                  style={{ color: "transparent" }}
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxMCA2Ij48cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS40IiBkPSJtMSAxIDQgNCA0LTQiIG9wYWNpdHk9Ii42Ii8+PC9zdmc+"
                />
                
              </button>
            </li>
            <li className="">
              <a
                className="inline-flex whitespace-pre p-3 text-[14px] text-white transition-colors duration-200 hover:text-blue"
                href="https://huly.blog/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download   
              </a>
            </li>
          </ul>
        </nav>
        <div className="ml-auto flex gap-x-3.5 ">
          <Button size={"sm"} variant={"outline"}>
            <GithubIcon className="mr-1" size={16} />
            STAR US
          </Button>
          <Button size={"sm"} variant={"outline"}>
            GET STARTED
          </Button>
          <Button size={"sm"} variant={"outline"}>
            SIGN IN
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
