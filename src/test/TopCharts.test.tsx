import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TopCharts from '../components/TopCharts';
import type { Game } from '../types';

const makeGame = (id: string, title: string): Game => ({
  id,
  title,
  developer: 'Test Studio',
  category: 'action',
  rating: 4.2,
  reviewCount: 500,
  price: 'Free',
  iconUrl: `https://picsum.photos/seed/${id}-icon/96/96`,
  bannerUrl: `https://picsum.photos/seed/${id}-banner/800/450`,
  description: 'Test game.',
  tags: ['Casual'],
});

const freeGames = Array.from({ length: 9 }, (_, i) => makeGame(`free${i}`, `Free Game ${i + 1}`));
const grossingGames = Array.from({ length: 9 }, (_, i) => makeGame(`gross${i}`, `Grossing Game ${i + 1}`));
const paidGames = Array.from({ length: 9 }, (_, i) => makeGame(`paid${i}`, `Paid Game ${i + 1}`));

describe('TopCharts', () => {
  it('renders the Top charts section heading', () => {
    render(<TopCharts topFree={freeGames} topGrossing={grossingGames} topPaid={paidGames} />);
    expect(screen.getByRole('heading', { name: /top charts/i })).toBeInTheDocument();
  });

  it('renders all three tab buttons', () => {
    render(<TopCharts topFree={freeGames} topGrossing={grossingGames} topPaid={paidGames} />);
    expect(screen.getByRole('tab', { name: /top free/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /top grossing/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /top paid/i })).toBeInTheDocument();
  });

  it('selects Top free tab by default', () => {
    render(<TopCharts topFree={freeGames} topGrossing={grossingGames} topPaid={paidGames} />);
    expect(screen.getByRole('tab', { name: /top free/i })).toHaveAttribute('aria-selected', 'true');
  });

  it('shows free games by default', () => {
    render(<TopCharts topFree={freeGames} topGrossing={grossingGames} topPaid={paidGames} />);
    expect(screen.getByText('Free Game 1')).toBeInTheDocument();
    expect(screen.queryByText('Grossing Game 1')).not.toBeInTheDocument();
  });

  it('switches to grossing games when Top grossing tab is clicked', async () => {
    render(<TopCharts topFree={freeGames} topGrossing={grossingGames} topPaid={paidGames} />);
    await userEvent.click(screen.getByRole('tab', { name: /top grossing/i }));
    expect(screen.getByText('Grossing Game 1')).toBeInTheDocument();
    expect(screen.queryByText('Free Game 1')).not.toBeInTheDocument();
  });

  it('switches to paid games when Top paid tab is clicked', async () => {
    render(<TopCharts topFree={freeGames} topGrossing={grossingGames} topPaid={paidGames} />);
    await userEvent.click(screen.getByRole('tab', { name: /top paid/i }));
    expect(screen.getByText('Paid Game 1')).toBeInTheDocument();
  });

  it('marks the clicked tab as selected', async () => {
    render(<TopCharts topFree={freeGames} topGrossing={grossingGames} topPaid={paidGames} />);
    const paidTab = screen.getByRole('tab', { name: /top paid/i });
    await userEvent.click(paidTab);
    expect(paidTab).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tab', { name: /top free/i })).toHaveAttribute('aria-selected', 'false');
  });

  it('renders rank numbers 1 through 9', () => {
    render(<TopCharts topFree={freeGames} topGrossing={grossingGames} topPaid={paidGames} />);
    for (let i = 1; i <= 9; i++) {
      expect(screen.getByText(String(i))).toBeInTheDocument();
    }
  });

  it('each card has an accessible label with rank and rating', () => {
    render(<TopCharts topFree={freeGames} topGrossing={grossingGames} topPaid={paidGames} />);
    expect(screen.getByRole('button', { name: /free game 1, ranked 1, rated 4\.2 stars/i })).toBeInTheDocument();
  });

  it('renders a tab panel', () => {
    render(<TopCharts topFree={freeGames} topGrossing={grossingGames} topPaid={paidGames} />);
    expect(screen.getByRole('tabpanel')).toBeInTheDocument();
  });
});
