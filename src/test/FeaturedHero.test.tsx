import { render, screen } from '@testing-library/react';
import FeaturedHero from '../components/FeaturedGameCarousel';
import type { Game } from '../types';

const makeGame = (id: string, title: string, themeColor?: string): Game => ({
  id,
  title,
  developer: 'Test Dev',
  category: 'action',
  rating: 4.7,
  reviewCount: 5000,
  price: 'Free',
  iconUrl: `https://picsum.photos/seed/${id}-icon/96/96`,
  bannerUrl: `https://picsum.photos/seed/${id}-banner/800/450`,
  description: 'A featured game.',
  tagline: `${title} tagline`,
  badge: 'New',
  tags: ['Action'],
  isFeatured: true,
  themeColor,
});

const games = [
  makeGame('f1', 'Shadow Realm', '#1a1a2e'),
  makeGame('f2', 'Ocean Quest'),
  makeGame('f3', 'Sky Breaker', '#0d3b66'),
  makeGame('f4', 'Desert Run'),
];

describe('FeaturedHero', () => {
  it('renders all game banners', () => {
    render(<FeaturedHero games={games} />);
    games.forEach((g) => {
      expect(screen.getByAltText(g.title)).toBeInTheDocument();
    });
  });

  it('renders taglines', () => {
    render(<FeaturedHero games={games} />);
    expect(screen.getByText('Shadow Realm tagline')).toBeInTheDocument();
  });

  it('renders badge labels', () => {
    render(<FeaturedHero games={games} />);
    expect(screen.getAllByText('New').length).toBeGreaterThan(0);
  });

  it('renders Install button for each game', () => {
    render(<FeaturedHero games={games} />);
    const installBtns = screen.getAllByRole('button', { name: /install/i });
    expect(installBtns.length).toBe(games.length);
  });

  it('renders developer names', () => {
    render(<FeaturedHero games={games} />);
    expect(screen.getAllByText('Test Dev').length).toBeGreaterThan(0);
  });

  it('renders ratings', () => {
    render(<FeaturedHero games={games} />);
    expect(screen.getAllByText(/4\.7/)).toHaveLength(games.length);
  });

  it('renders In-app purchases label', () => {
    render(<FeaturedHero games={games} />);
    expect(screen.getAllByText(/in-app purchases/i).length).toBeGreaterThan(0);
  });

  it('shows Next button when there are more than 2 games', () => {
    render(<FeaturedHero games={games} />);
    expect(screen.getByRole('button', { name: /^next$/i })).toBeInTheDocument();
  });

  it('does not show Prev button on first load', () => {
    render(<FeaturedHero games={games} />);
    expect(screen.queryByRole('button', { name: /^previous$/i })).not.toBeInTheDocument();
  });
});
