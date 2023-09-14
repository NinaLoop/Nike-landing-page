import { links, socialMedia } from "../constants";
import LinksCard from "../components/LinksCard";
import SocialMediaCard from "../components/SocialMediaCard";
const Footer = () => {
  return (
    <section className="bg-black padding">
      <div className="flex justify-around items-start">
        {links.map((link) => (
          <LinksCard key={link.title} {...link} />
        ))}
      </div>
      {/* social media  */}
      <div
        className="flex justify-center 
      items-center gap-6 mt-10"
      >
        {socialMedia.map((social) => (
          <SocialMediaCard key={social.alt} {...social} />
        ))}
      </div>
    </section>
  );
};

export default Footer;
