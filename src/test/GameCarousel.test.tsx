import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GameCarousel from '../components/GameCarousel';
import type { Game } from '../types';

const makeGame = (id: string, title: string): Game => ({
  id,
  title,
  developer: 'Test Studio',
  category: 'action',
  rating: 4.5,
  reviewCount: 1000,
  price: 'Free',
  iconUrl: `https://picsum.photos/seed/${id}-icon/96/96`,
  bannerUrl: `https://picsum.photos/seed/${id}-banner/800/450`,
  description: 'A test game.',
  tags: ['Action', 'Multiplayer'],
});

const games = Array.from({ length: 9 }, (_, i) => makeGame(`g${i + 1}`, `Game ${i + 1}`));
const fewGames = games.slice(0, 3);

describe('GameCarousel', () => {
  it('renders the section title', () => {
    render(<GameCarousel title="Puzzle games" games={games} />);
    expect(screen.getByRole('heading', { name: /puzzle games/i })).toBeInTheDocument();
  });

  it('renders a card for every game', () => {
    render(<GameCarousel title="Test" games={games} />);
    games.forEach((g) => {
      expect(screen.getAllByText(g.title).length).toBeGreaterThan(0);
    });
  });

  it('has accessible section label', () => {
    render(<GameCarousel title="Offline games" games={games} />);
    expect(screen.getByRole('region', { name: /offline games/i })).toBeInTheDocument();
  });

  it('renders Next button when there are more than 3 games', () => {
    render(<GameCarousel title="Test" games={games} />);
    expect(screen.getAllByRole('button', { name: /next test games/i }).length).toBeGreaterThan(0);
  });

  it('does not render Next button when all games fit in one page', () => {
    render(<GameCarousel title="Test" games={fewGames} />);
    expect(screen.queryByRole('button', { name: /next test games/i })).not.toBeInTheDocument();
  });

  it('does not render Prev button on first page', () => {
    render(<GameCarousel title="Test" games={games} />);
    expect(screen.queryByRole('button', { name: /previous test games/i })).not.toBeInTheDocument();
  });

  it('each card has an accessible label with title, tags, and rating', () => {
    render(<GameCarousel title="Test" games={[games[0]]} />);
    expect(
      screen.getAllByRole('button', { name: /game 1, action, multiplayer, rated 4\.5 stars/i }).length
    ).toBeGreaterThan(0);
  });

  it('card activates on Enter key', async () => {
    const onClick = vi.fn();
    render(<GameCarousel title="Test" games={[games[0]]} />);
    const cards = screen.getAllByRole('button', { name: /game 1/i });
    cards[0].addEventListener('click', onClick);
    await userEvent.type(cards[0], '{Enter}');
    expect(onClick).toHaveBeenCalled();
  });
});
