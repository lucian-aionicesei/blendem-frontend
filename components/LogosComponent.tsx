import ClientLogo from "./ClientLogo";

interface LogosComponentProps {
  partnersLogo: { name: string; imgUrl: string }[];
}

const LogosComponent: React.FC<LogosComponentProps> = ({ partnersLogo }) => {
  return (
    <section className="mx-5 md:mx-14 my-16 md:my-28 lg:grid grid-cols-12">
      <ul className=" xl:col-start-2 col-span-full xl:col-span-10 flex flex-wrap gap-x-10 gap-y-10 justify-center">
        {partnersLogo.map((company, index) => (
          <ClientLogo key={index} imgUrl={company.imgUrl} name={company.name} />
        ))}
      </ul>
    </section>
  );
};

export default LogosComponent;
