import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Truck Animation Loader */}
      <Loader />

      {/* Main Layout */}
      <div className="min-h-screen flex flex-col">
        {/* Navigation Header */}
        <Header />

        {/* Content Main */}
        <main className="flex-grow">
          {/* Hero Banner Section */}
          <Hero />

          {/* About Section */}
          <About />

          {/* Services & Values Sections */}
          <Services />

          {/* How It Works Timeline */}
          <HowItWorks />

          {/* Pricing Grid */}
          <Pricing />

          {/* Gallery Grid & Lightbox */}
          <Gallery />

          {/* Testimonials Carousel */}
          <Testimonials />

          {/* FAQ Accordion */}
          <FAQ />

          {/* Contact Details & Form */}
          <Contact />
        </main>

        {/* Footer & Floating Actions */}
        <Footer />
      </div>
    </>
  );
}
