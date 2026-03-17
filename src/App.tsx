import Header from './components/Header';
import DeviceFilter from './components/DeviceFilter';
import FeaturedHero from './components/FeaturedGameCard';
import GameCarousel from './components/GameCarousel';
import TopCharts from './components/TopCharts';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';
import {
  featuredGames,
  topFree,
  topGrossing,
  topPaid,
  recommended,
  offlineGames,
  puzzleGames,
  multiplayerGames,
  simulationGames,
} from './data/mockData';
import './index.css';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Header />

      <main className="max-w-[480px] lg:max-w-[1290px] mx-auto pb-28 lg:pb-16 px-4 lg:px-0">
        <DeviceFilter />

        <div className="mt-4 -mx-4 lg:mx-0">
          <FeaturedHero games={featuredGames} />
        </div>

        <TopCharts topFree={topFree} topGrossing={topGrossing} topPaid={topPaid} />

        <GameCarousel title="Recommended for you" games={recommended} />
        <GameCarousel title="Offline games" games={offlineGames} />
        <GameCarousel title="Puzzle games" games={puzzleGames} />
        <GameCarousel title="Multiplayer games" games={multiplayerGames} />
        <GameCarousel title="Simulation games" games={simulationGames} />
      </main>

      <BottomNav />
      <Footer />
    </div>
  );
}
