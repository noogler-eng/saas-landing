import Feedback from "./sections/Feedback";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import LogoTicker from "./sections/LogoTicker";
import Pricing from "./sections/Pricing";
import ProductShowcase from "./sections/ProductShowcase";
import SignUp from "./sections/SignUp";

export default function Home() {
  return (
    <div className="text-3xl font-[DM_Sans] bg-[#EAEEFE] min-h-screen">
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Feedback />
      <SignUp />
      <Footer />
    </div>
  );
}
