import Header from "./Header";
import HomePageProvider from "./app-context";
import SiteFooter from "./SiteFooter";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <HomePageProvider>
      <Header />
      {children}
      <SiteFooter />
    </HomePageProvider>
  );
};
export default Layout;
