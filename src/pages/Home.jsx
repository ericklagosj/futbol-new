
import React from 'react';
import HeroCarousel from '@/components/home/HeroCarousel';
import StatsSection from '@/components/home/StatsSection';
import MissionSection from '@/components/home/MissionSection';
import FeaturedNewsSection from '@/components/home/FeaturedNewsSection';
import UpcomingMatchesSection from '@/components/home/UpcomingMatchesSection';
import SocialMediaSection from '@/components/home/SocialMediaSection';
import StandingsTableSection from '@/components/home/StandingsTableSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <StatsSection />
      <StandingsTableSection />
      <MissionSection />
      <FeaturedNewsSection />
      <UpcomingMatchesSection />
      <SocialMediaSection />
    </div>
  );
};

export default Home;
