import Header from "./Header";
import LoadingAnimation from "./LoadingAnimation";
import SiteFooter from "./SiteFooter";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <LoadingAnimation />
      <Header />
      {children}
      <SiteFooter />
    </div>
  );
};

export default Layout;
