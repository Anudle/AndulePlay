import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer', () => {
  it('renders Anudle Play column heading', () => {
    render(<Footer />);
    expect(screen.getByText('Anudle Play')).toBeInTheDocument();
  });

  it('renders Kids & family column heading', () => {
    render(<Footer />);
    expect(screen.getByText('Kids & family')).toBeInTheDocument();
  });

  it('renders all Play links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /play pass/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /play points/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /gift cards/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /redeem/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /refund policy/i })).toBeInTheDocument();
  });

  it('renders Kids & family links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /parent guide/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /family sharing/i })).toBeInTheDocument();
  });

  it('renders legal links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /terms of service/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /privacy/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about anudle play/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /developers/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /anudle store/i })).toBeInTheDocument();
  });

  it('renders the locale button', () => {
    render(<Footer />);
    expect(screen.getByRole('button', { name: /united states/i })).toBeInTheDocument();
  });

  it('renders a footer landmark', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
