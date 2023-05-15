import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Partners from "@/components/Partners";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>fundmygrad</title>
      </Head>
      <div>
        <Header />
        <Stats />
        <Features />
        <About />
        <Testimonials />
        <FAQ />
        <Partners />
        <Footer />
      </div>
    </>
  );
}