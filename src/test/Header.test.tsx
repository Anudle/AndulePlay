import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../components/Header';

describe('Header', () => {
  it('renders the Anudle Play wordmark', () => {
    render(<Header />);
    // Rendered in both desktop and mobile rows
    expect(screen.getAllByText('Anudle Play').length).toBeGreaterThanOrEqual(1);
  });

  it('renders all desktop nav links', () => {
    render(<Header />);
    expect(screen.getByRole('button', { name: /^games$/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^apps$/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /movies & tv/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^books$/i })).toBeInTheDocument();
    // "Kids" appears in both desktop nav and mobile tab strip — just verify presence
    expect(screen.getAllByText('Kids').length).toBeGreaterThanOrEqual(1);
  });

  it('marks Games as the active nav item by default', () => {
    render(<Header />);
    // The desktop nav button (not the mobile tab) has aria-current
    const gamesBtns = screen.getAllByRole('button', { name: /^games$/i });
    const activeBtn = gamesBtns.find((b) => b.getAttribute('aria-current') === 'page');
    expect(activeBtn).toBeTruthy();
  });

  it('switches active nav item on click', async () => {
    render(<Header />);
    const appsBtn = screen.getByRole('button', { name: /^apps$/i });
    await userEvent.click(appsBtn);
    expect(appsBtn).toHaveAttribute('aria-current', 'page');
  });

  it('renders mobile tab strip with all tabs', () => {
    render(<Header />);
    expect(screen.getByRole('tab', { name: /for you/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /top charts/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /other devices/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /kids/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /new/i })).toBeInTheDocument();
  });

  it('marks For you as the selected mobile tab by default', () => {
    render(<Header />);
    expect(screen.getByRole('tab', { name: /for you/i })).toHaveAttribute('aria-selected', 'true');
  });

  it('switches active mobile tab on click', async () => {
    render(<Header />);
    const newTab = screen.getByRole('tab', { name: /^new$/i });
    await userEvent.click(newTab);
    expect(newTab).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tab', { name: /for you/i })).toHaveAttribute('aria-selected', 'false');
  });

  it('renders Search and Help action buttons', () => {
    render(<Header />);
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /help/i })).toBeInTheDocument();
  });

  it('renders Account button', () => {
    render(<Header />);
    // Rendered in both desktop and mobile rows
    expect(screen.getAllByRole('button', { name: /account/i }).length).toBeGreaterThanOrEqual(1);
  });
});
