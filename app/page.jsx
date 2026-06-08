import Header from "@/app/Layout/Header";
import Hero from "@/app/Components/Hero";
// import Services from "@/app/Components/Services";
import About from "@/app/Components/AboutUs";
import Features from "@/app/Components/Features";
import Quality from "@/app/Components/Quality";
import Footer from "@/app/Layout/Footer";

export default function Home() {
  // useEffect(() => {
  //   window.addEventListener("error", (e) => {
  //     if (e?.message?.includes("ChunkLoadError")) {
  //       console.log("Reloading due to chunk error...");
  //       window.location.reload();
  //     }
  //   });
  // }, []);
  return (
    <>
      {/* <Header/> */}
      <Hero />
      {/* <Services/> */}
      <About />
      <Features />
      <Quality />
      {/* <Footer/> */}
    </>
  );
}
