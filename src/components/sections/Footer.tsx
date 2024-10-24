import {
  Facebook,
  Instagram,
} from "lucide-react";
import DiscordIcon from "@/components/DiscordIcon";
import { Links } from "@/types";

const Footer = ({
  title,
  caption,
  links,
}: {
  title: string;
  caption: string;
  links: Links;
}) => {
 
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className=" text-primary">
      <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-bold mb-4 ">{title}</h2>
            <p className="mb-4 font-bold">{caption}</p>
            <div className="flex mt-4 space-x-4">
              <div className="group p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300 ease-in-out transform hover:scale-105">
                <a
                  href={links.facebook}
                  className="hover:text-primary"
                  aria-label="Facebook"
                >
                  <Facebook />
                </a>
              </div>
              <div className="group p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300 ease-in-out transform hover:scale-105">
                <a
                  href={links.instagram}
                  className="hover:text-primary"
                  aria-label="Instagram"
                >
                  <Instagram />
                </a>
              </div>
              <div className="group p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300 ease-in-out transform hover:scale-105">
                <a href={links.discord} aria-label="Discord">
                  <DiscordIcon className="hover:fill-primary" />
                </a>
              </div>
            </div>
          </div>

        <div className="mt-8 pt-8 border-t border-secondary text-center font-bold">
          <p>&copy; {currentYear} {title}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
