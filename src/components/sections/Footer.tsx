import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Linkedin,
  Megaphone,
  Loader2,
} from "lucide-react";
import DiscordIcon from "@/components/DiscordIcon";
import useSubscribe from "@/hooks/useSubscribe";
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
  const [email, setEmail] = useState("");
  const { subscribe, loading, success, error } = useSubscribe(); // Use the custom hook
  const currentYear = new Date().getFullYear(); // Get the current year

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await subscribe(email);
  };

  return (
    <footer className=" text-primary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="mb-4">{caption}</p>
            <div className="flex justify-start mt-8 space-x-4">
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
                <a
                  href={links.linkedin}
                  className="hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin />
                </a>
              </div>
              <div className="group p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300 ease-in-out transform hover:scale-105">
                <a href={links.discord} aria-label="Discord">
                  <DiscordIcon className="hover:fill-primary" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-4">
              Subscribe for the latest updates and announcements!
            </p>

            {success ? (
              <p>Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
                <Button
                  className="bg-secondary hover:bg-secondary text-white transition-all duration-300 ease-in-out transform hover:scale-105"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <Loader2 className="animate-spin h-4 w-4" />
                  ) : (
                    <>
                      Subscribe
                      <Megaphone className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
            {error && <p className="text-red-500 mt-2">Try again</p>}
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
