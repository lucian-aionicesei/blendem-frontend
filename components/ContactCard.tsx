import Image from "next/image";
import locationIcon from "../public/icons/location-icon.png";
import emailIcon from "../public/icons/email-icon.png";
import Link from "next/link";

const ContactCard = ({
  location,
  email,
}: {
  location: string;
  email: string;
}) => {
  return (
    <>
      <h1 className=" text-xl sm:text-2xl font-semibold mb-3">Contact</h1>
      <div className="group flex items-center gap-x-3 w-fit">
        <div className="w-12 h-12 flex items-center justify-center group-hover:bg-project-green rounded-full flex-shrink-0">
          <span className="relative w-7 h-7 flex items-center">
            <Image
              className="static"
              src={locationIcon}
              fill={true}
              alt="location icon"
            ></Image>
          </span>
        </div>
        <Link href="/contact">{location}</Link>
      </div>
      <div className="group flex items-center gap-x-3 w-fit">
        <a
          href={`mailto: ${email}`}
          className="w-12 h-12 flex items-center justify-center group-hover:bg-project-green rounded-full"
        >
          <span className="relative w-7 h-7 flex items-center">
            <Image
              className="static"
              src={emailIcon}
              fill={true}
              alt="location icon"
            ></Image>
          </span>
        </a>
        <a href={`mailto: ${email}`}>{email}</a>
      </div>
    </>
  );
};

export default ContactCard;
