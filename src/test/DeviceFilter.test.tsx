import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DeviceFilter from '../components/DeviceFilter';

describe('DeviceFilter', () => {
  it('renders all device pills', () => {
    render(<DeviceFilter />);
    expect(screen.getByRole('button', { name: /windows/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /phone/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /tablet/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^tv$/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /chromebook/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /watch/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /xr headset/i })).toBeInTheDocument();
  });

  it('marks Phone as pressed by default', () => {
    render(<DeviceFilter />);
    expect(screen.getByRole('button', { name: /phone/i })).toHaveAttribute('aria-pressed', 'true');
  });

  it('selects a pill on click', async () => {
    render(<DeviceFilter />);
    const tablet = screen.getByRole('button', { name: /tablet/i });
    await userEvent.click(tablet);
    expect(tablet).toHaveAttribute('aria-pressed', 'true');
  });

  it('deselects the previous pill when a new one is clicked', async () => {
    render(<DeviceFilter />);
    await userEvent.click(screen.getByRole('button', { name: /tablet/i }));
    expect(screen.getByRole('button', { name: /phone/i })).toHaveAttribute('aria-pressed', 'false');
  });

  it('reverts non-phone selection back to Phone after timeout', () => {
    vi.useFakeTimers();
    render(<DeviceFilter />);
    act(() => { fireEvent.click(screen.getByRole('button', { name: /tablet/i })); });
    expect(screen.getByRole('button', { name: /tablet/i })).toHaveAttribute('aria-pressed', 'true');
    act(() => { vi.advanceTimersByTime(700); });
    expect(screen.getByRole('button', { name: /phone/i })).toHaveAttribute('aria-pressed', 'true');
    vi.useRealTimers();
  });

  it('has a group label for screen readers', () => {
    render(<DeviceFilter />);
    expect(screen.getByRole('group', { name: /filter by device/i })).toBeInTheDocument();
  });
});
