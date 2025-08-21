import React from 'react';
import { Routes, Route } from 'react-router-dom';

import TopBar from './components/TopBar';
import MainNavigation from './components/MainNavigation';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import MachineryGallery from './components/MachineryGallery';
import OurGlobalAssociates from './components/OurGlobalAssociates';
import NewsInsights from './components/NewsInsights';
import BlogSection from './components/BlogSection';
import RegionalOffices from './components/RegionalOffices';
import Testimonials from './components/Testimonials';
import SleekFooter from './components/SleekFooter';
import SearchModal from './components/SearchModal';

import BlogListPage from './app/media/blog/page';
import BlogViewPage from './app/media/blog/[title]/page';
import NewsPage from './app/media/news/page';
import NewsArticlePage from './app/media/news/[title]/page';
import InvestorRelations from './app/investor-relations/page';

function HomePage() {
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

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <TopBar />
      <MainNavigation />
      <SearchModal />

      <main className="pt-[56px] lg:pt-[60px]">
        <Routes>
          {/* ✅ Match homepage route */}
          <Route path="/" element={<HomePage />} />

          {/* ✅ About page */}
   
          <Route path="/media/blog" element={<BlogListPage />} />
          <Route path="/media/blog/:postTitle" element={<BlogViewPage />} />
          <Route path="/media/news" element={<NewsPage />} />
          <Route path="/media/news/:title" element={<NewsArticlePage />} />
          <Route path="/investor-relations" element={<InvestorRelations />} />
          
          {/* ✅ Catch-all for 404 */}
        </Routes>
      </main>

      <SleekFooter />
    </div>
  );
}

export default App;
