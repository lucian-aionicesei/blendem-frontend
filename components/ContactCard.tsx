import Image from "next/image";
import locationIcon from "../public/icons/location-icon.png";
import emailIcon from "../public/icons/email-icon.png";

const ContactCard = ({
  location,
  email,
}: {
  location: string;
  email: string;
}) => {
  return (
    <section className="mx-5 md:mx-14 mb-12 lg:mb-16 lg:grid grid-cols-12">
      <article className=" text-base col-start-4 col-end-10 bg-project-dark-gray text-white p-8 sm:p-12 flex flex-col gap-y-2">
        <h1 className=" text-xl sm:text-2xl font-semibold mb-3">Contact</h1>
        <div className="group flex items-center gap-x-3 w-fit">
          <div className="w-12 h-12 flex items-center justify-center group-hover:bg-project-green rounded-full">
            <span className="relative w-7 h-7 flex items-center">
              <Image
                className="static"
                src={locationIcon}
                fill={true}
                alt="location icon"
              ></Image>
            </span>
          </div>
          <p>{location}</p>
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
      </article>
    </section>
  );
};

export default ContactCard;
