import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BottomNav from '../components/BottomNav';

describe('BottomNav', () => {
  it('renders all nav items', () => {
    render(<BottomNav />);
    expect(screen.getByText('Games')).toBeInTheDocument();
    expect(screen.getByText('Apps')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByText('Books')).toBeInTheDocument();
  });

  it('renders a nav landmark', () => {
    render(<BottomNav />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('activates Games by default', () => {
    render(<BottomNav />);
    // The active item has a blue pill indicator — check via text color class presence
    // by verifying its button contains the active color class
    const gamesBtn = screen.getByRole('button', { name: /games/i });
    expect(gamesBtn).toHaveClass('text-[#1A73E8]');
  });

  it('switches active item on click', async () => {
    render(<BottomNav />);
    const appsBtn = screen.getByRole('button', { name: /apps/i });
    await userEvent.click(appsBtn);
    expect(appsBtn).toHaveClass('text-[#1A73E8]');
  });

  it('deactivates previous item when a new one is clicked', async () => {
    render(<BottomNav />);
    await userEvent.click(screen.getByRole('button', { name: /apps/i }));
    expect(screen.getByRole('button', { name: /games/i })).toHaveClass('text-[#5F6368]');
  });
});
