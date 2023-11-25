import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const RoutesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default RoutesLayout;
