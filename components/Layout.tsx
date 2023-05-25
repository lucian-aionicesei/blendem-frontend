import Header from "./Header";

const Layout = ({ children }: { children: any }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
