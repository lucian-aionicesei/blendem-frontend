import Header from "./Header";
import HomePageProvider from "./app-context";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <HomePageProvider>
      <Header />
      {children}
    </HomePageProvider>
  );
};

export default Layout;
