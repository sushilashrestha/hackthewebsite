import {
  Facebook,
  Instagram,
  User,
  Mail,
  Phone
} from "lucide-react";
import DiscordIcon from "@/components/DiscordIcon";
import { Links, Info } from "@/types";

const Footer = ({
  title,
  caption,
  links,
  info,
}: {
  title: string;
  caption: string;
  links: Links;
  info: Info;
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-primary w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="grid gap-4 justify-items-center lg:justify-items-start">
            <h2 className="text-2xl font-bold text-center">{title}</h2>
            <p className="font-bold text-center lg:text-left">{caption}</p>
            <div className="grid grid-flow-col gap-4 mt-4">
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
          <div className="grid gap-4 justify-center lg:justify-end">
            <h3 className="text-xl font-bold text-center">Have a question?</h3>
            <div className="grid gap-4">
              <div className="grid grid-cols-[24px_1fr] items-center gap-2">
                <User className="w-5 h-5" />
                <span><strong>{info.name}</strong>, {info.role}</span>
              </div>
              <div className="grid grid-cols-[24px_1fr] items-center gap-2">
                <Mail className="w-5 h-5" />
                <a href={`mailto:${info.email}`} aria-label="Email">{info.email}</a>
              </div>
              <div className="grid grid-cols-[24px_1fr] items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href={`tel:${info.phone}`} aria-label="Phone">{info.phone}</a>
              </div>
            </div>
          </div>

        </div>
        <div className="grid mt-8 pt-8 border-t border-secondary">
          <p className="justify-self-center font-bold">
            &copy; {currentYear} {title}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;