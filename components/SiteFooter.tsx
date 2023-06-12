import linkedIn from "../public/icons/linkedIn.svg";
import FooterIconLink from "./FooterIconLink";
import facebook from "../public/icons/facebook.svg";
import youTube from "../public/icons/youTube.svg";
import instagram from "../public/icons/instagram.svg";
import tikTok from "../public/icons/tikTok.svg";
import FooterLink from "./FooterLink";

const SiteFooter = () => {
  return (
    <footer className="flex flex-col gap-y-6 items-center bg-project-dark-black w-full py-10 px-5 md:px-14">
      <ul className="flex gap-x-5">
        <FooterIconLink imgSrc={linkedIn} url="#" alt="LinkedIn icon" />
        <FooterIconLink imgSrc={facebook} url="#" alt="Facebook icon" />
        <FooterIconLink imgSrc={youTube} url="#" alt="YouTube icon" />
        <FooterIconLink imgSrc={instagram} url="#" alt="Instagram icon" />
        <FooterIconLink imgSrc={tikTok} url="#" alt="TikTok icon" />
      </ul>
      <nav>
        <ul className=" flex flex-col items-center text-base gap-y-4">
          <FooterLink path="/" name="Home" />
          <FooterLink path="/works" name="Works" />
          <FooterLink path="/about" name="About" />
          <FooterLink path="/contact" name="Contact" />
        </ul>
      </nav>
    </footer>
  );
};

export default SiteFooter;
