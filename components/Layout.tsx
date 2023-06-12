import Header from "./Header";
import SiteFooter from "./SiteFooter";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <SiteFooter />
    </div>
  );
};

export default Layout;
