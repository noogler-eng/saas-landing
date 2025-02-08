import Header from "./sections/Header";
import Hero from "./sections/Hero";
import LogoTicker from "./sections/LogoTicker";
import ProductShowcase from "./sections/ProductShowcase";

export default function Home() {
  return (
    <div className="text-3xl font-[DM_Sans] bg-[#EAEEFE] min-h-screen">
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
    </div>
  );
}
