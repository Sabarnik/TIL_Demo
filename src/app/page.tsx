// app/page.tsx


import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import OurGlobalAssociates from '../components/OurGlobalAssociates';
import MachineryGallery from '../components/MachineryGallery';
import NewsInsights from '../components/NewsInsights';
import BlogSection from '../components/BlogSection';
import RegionalOffices from '../components/RegionalOffices';
import Testimonials from '../components/Testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <OurGlobalAssociates />
      <MachineryGallery />
      <NewsInsights />
      <BlogSection />
      <RegionalOffices />
      <Testimonials />
    </>
  );
}
