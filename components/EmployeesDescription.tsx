import EmployeeCard from "./EmployeeCard";

interface EmployeesDescriptionProps {
  employees: {
    imgUrl: string;
    name: string;
    jobTitle: string;
    description: string;
  }[];
}

const EmployeesDescription: React.FC<EmployeesDescriptionProps> = ({
  employees,
}) => {
  return (
    <section className="sm:mx-5 md:mx-14 mb-12 lg:mb-24 gap-y-16 lg:gap-y-24 gap-x-24 flex flex-wrap items-center justify-around">
      {employees.map((employee, index) => (
        <EmployeeCard
          key={index}
          imgUrl={employee.imgUrl}
          name={employee.name}
          jobTitle={employee.jobTitle}
          description={employee.description}
        />
      ))}
    </section>
  );
};

export default EmployeesDescription;
