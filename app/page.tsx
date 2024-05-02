import CTA from "@/components/sections/CTA";
import Customers from "@/components/sections/Customers";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";

const page = () => {
  return (
    <div>
      <Navbar />
      <section>
        <Hero />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <Customers />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <CTA />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default page;
