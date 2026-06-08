import Header from "./components/Header";
import Hero from "./components/Hero";
import CryptoClubSection from "./components/CryptoClubSection";
import CrystalPoolSection from "./components/CrystalPoolSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-neutral-950 text-white antialiased">
      <Header />
      <Hero />
      <CrystalPoolSection />
      <CryptoClubSection />
      <Footer />
    </div>
  );
}
