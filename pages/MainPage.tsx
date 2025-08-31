import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import MainMainPage from "@/components/ui/MainMainPage";
import Preloader from "@/components/ui/Preloader";

export default function MainPage() {
  return (
    <>
      <Preloader />
      <Header />
      <MainMainPage />
      <Footer />
    </>
  );
}
